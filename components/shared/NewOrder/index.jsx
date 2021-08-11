import { Row, Col, Card } from 'react-bootstrap';
import Cart from '../../StoreFront/Cart';
import OrderForm from './OrderForm';
import TicketForm from '../NewTicket/TicketForm';
// import FormPassager from './FormPassager'
// import Cart from '../Cart';

export default function NewOrder() {
  return (
    <>
      <Row className='justify-content-md-center'>

        <Col md={{ span: 4 }}>
          <Card className='p-5 mb-4'>
            <h5 className='text-center'>Resumo da Compra</h5>
            <Cart />
          </Card>
        </Col>
        <Col md={{ span: 4 }}>
          <Card className='p-5 mb-4'>
            <OrderForm />
          </Card>
        </Col>
      </Row>
    </>
  )
}