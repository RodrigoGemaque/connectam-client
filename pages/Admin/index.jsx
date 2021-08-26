import React from 'react';
import AdminComponent from '../../components/shared/AdminComponent';
import withAuthAdmin from '../../components/WithAuthAdmin';


const Home = () => {

  return (

      <AdminComponent>
        <h1>Parabéns, você acessou o painel! \o/</h1>
      </AdminComponent>


  )
}

export default withAuthAdmin(Home);