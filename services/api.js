import axios from 'axios'
import Cookie from 'js-cookie';
import Router from 'next/router';


export default axios.create({
  baseURL: 'http://localhost:3000'
});



// adição da função para setar os headers de authẽnticação na api e nos cookies do browser, iremos utilizar ela no interceptor de request (tanto no fluxo normal quando no fluxo de erro).
function setHeaders(res) {
  if (res.headers['access-token'] && res.headers['access-token'] !== '') {
    const apiData = {
      'access-token': res.headers['access-token'],
      client: res.headers.client,
      expiry: res.headers.expiry,
      'token-type': res.headers['token-type'],
      uid: res.headers.uid
    };
    api.defaults.headers = apiData;
    Cookie.set('@api-data', JSON.stringify(apiData));
  }
}



api.interceptors.response.use(res => {
  setHeaders(res);
  return res;
}
  , err => {
    // caso um erro ocorra na response, um novo token é retornado, logo devemos atualizá-lo na api e nos cookies
    if (err.response) {
      setHeaders(err.response);

      const data = err.response.data;

      // aqui estamos tratando os erros no padrão que o rails no devolve, se existem algum array de erros, iremos extrair o nome do campo e as mensagens para que as mesmas possam ser exibidas na tela utilizando um toast
      if (data && data.errors && data.errors.fields) {
        const errors = data.errors;
        const fieldsName = Object.keys(errors.fields)

        fieldsName.forEach(error => {
          toast.error(error + ': ' + errors.fields[error].join(`, `))
        })
        console.log('errors', errors);
      }
    }

    if (err.response && (
      err.response.status === 401 ||
      err.response.status === 403
    )) {
      Router.push('/login');
    }
    throw err;
  });


api.interceptors.request.use(req => {
  req.headers = { ContentType: 'application/json' };

  if (
    req.url.includes('auth/user') || req.url.includes('api')
  ) {
    const apiDataCookie = Cookie.get('@api-data');
    if (!apiDataCookie) {
      return req;
    }
    const apiData = JSON.parse(apiDataCookie);
    req.headers = { ...apiData, ...req.headers };
  }
  return req;
})