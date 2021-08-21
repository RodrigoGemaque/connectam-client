import { useSelector } from 'react-redux';
import { useRouter } from 'next/router';
import Cookie from 'js-cookie';



const withAuth = (Component) => {
  const Auth = (props) => {
    const router = useRouter();
    const loggedUser = useSelector((state) => state.auth.loggedUser);

    const apiDataCookie = Cookie.get('@api-data');
    const apiData = apiDataCookie ? JSON.parse(apiDataCookie) : null;


    if (!loggedUser ||
        !apiData ||
        !apiData['access-token'] ||
        apiData['access-token'] === ''
      ) {
        router.push({
          pathname: '/login',
          query: {
            callback: router.pathname
          }
        });
      }

      return <Component {...props}/>;
  }

  if (Component.getServerSideProps) {
    Auth.getServerSideProps = Component.getServerSideProps;
  }

  return Auth;
}

export default withAuth;