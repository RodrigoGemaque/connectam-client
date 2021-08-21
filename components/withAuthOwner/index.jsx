
import { useSelector } from 'react-redux';
import { useRouter } from 'next/router';
import Cookie from 'js-cookie';



const withAuthAdmin = (Component) => {
  const Auth = (props) => {
    const router = useRouter();
    const loggedUser = useSelector((state) => state.auth.loggedUser);
    
    const apiDataCookie = Cookie.get('@api-data');
    const apiData = apiDataCookie ? JSON.parse(apiDataCookie) : null;

    // checando se o usuário existe no redux e se o mesmo é ship_owner
    // checando se os dados da api existem no cookie e ainda se existe o access-token salvo.
    if (!loggedUser || 
        loggedUser.profile !== 'ship_owner' ||
        !apiData ||
        !apiData['access-token'] ||
        apiData['aceess-token'] === ''
    ) {
        router.push('/login')
      // router.push({
      //   pathname: '/login',
      //   query: {
      //     callback: router.pathname
      //   }
      // })
    }

    return <Component {...props} />;
  }

  // se o component tiver o método getServerSideProps (responsável por 
  // fazer o fetch das props e realizar o pre-render da página no server side) 
  // ele irá repassar para o component auth, para que assim as props sejam 
  // acessiveis pelo Auth e caso o usuário tenha acesso a página, essas props 
  // serão repassadas ao component (linha 19)
  if(Component.getServerSideProps) {
    Auth.getServerSideProps = Component.getServerSideProps;
  }

  return Auth;
}

export default withAuthAdmin;