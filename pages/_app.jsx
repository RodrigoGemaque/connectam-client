import 'bootstrap/dist/css/bootstrap.min.css'
import '../styles/home.css'
// import '../styles/features.css'



import '../styles/globals.css'
import Head from 'next/head'

//redux
import { Provider } from 'react-redux'
import { PersistGate } from 'redux-persist/integration/react';
import {store, persistor} from '../store'


const MyApp = ({ Component, pageProps }) => {
  return (

    <>
      <Head>
        <title>ConectAM</title>
        <meta name='viewport' content='initial-scale=1.0, width=device-width' />
      </Head>
     
        <Provider store={store}>
          <PersistGate loading={null} persistor={persistor}>
            <Component {...pageProps} />
          </PersistGate>
        </Provider>
 
    </>
  )

}

export default MyApp
