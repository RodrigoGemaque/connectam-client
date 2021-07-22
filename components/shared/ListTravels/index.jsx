// import { Row, Col, Spinner, Alert, Container } from 'react-bootstrap'
import Travel from './Travel'

// import TravelsService from '../../../services/travels'
// import useSWR from "swr"
// const defaultUrl = '/admin/v1/travels'

import getTravels from '../../../services/travelSearch'
import { Row, Col, Container, Spinner, Alert, Card } from 'react-bootstrap'
import CalendarPersonalized from '../CalendarPersonalizade'





const ListTravels = () => {
  // const { data, error } = useSWR(defaultUrl, TravelsService.index)
  const { travels, isLoading, isError } = getTravels()


  // const viagens = [
  //   {
  //     id: 1,
  //     ship: 'example-1',
  //     date: '20/01/2022',
  //     image_url: '/ship.png',
  //     price: 120,
  //     time: '12:00',
  //     departure: 'Santarem',
  //     arrival: 'Prainha',



  //   },
  //   {
  //     id: 2,
  //     ship: 'example-2',
  //     date: '20/01/2022',
  //     image_url: '/ship2.jpg',
  //     price: 120.00,
  //     time: '12:00',
  //     departure: 'Prainha',
  //     arrival: 'Santarem',

  //   }
  // ]




  function renderContent() {
    if (isError)
      return <Col><Alert variant='danger'> Erro ao Carregar</Alert></Col>
    else if (isLoading)
      return <Col><Spinner animation='border'></Spinner>  </Col>
    else if (travels['travels'] == 0)
      return <Col>Nenhuma viagem encontrada</Col>
    else
      return travels.travels.map((travel, i) => <Travel   {...travel} key={i} />)
  }


  return (

    <div >
      <br />
      
      <Row  >
      
      <Col  md = {3}>
          <CalendarPersonalized/>
        </Col>
        <Col  >
          {renderContent()}
          
        </Col>

      </Row>

    </div>
  )
}

export default ListTravels