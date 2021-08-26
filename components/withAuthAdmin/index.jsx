import { useSelector } from 'react-redux';
import { useRouter } from 'next/router';
import Cookie from 'js-cookie';

const withAuthAdmin = (Component) => {
  const Auth = (props) => {
    const router = useRouter();
    const loggedUser = useSelector((state) => state.auth.loggedUser);
    const apiData = JSON.parse(Cookie.get('@api-data'));
  
    if(!loggedUser || 
      loggedUser.profile !== 'admin' ||
      !apiData ||
      !apiData['access-token'] ||
      apiData['access-token'] === '') {
      router.push('/login')
    }


    return <Component {...props} />;
  }
  
  if(Component.getServerSideProps) {
    Auth.getServerSideProps = Component.getServerSideProps;
  }

  return Auth;
}

export default withAuthAdmin;