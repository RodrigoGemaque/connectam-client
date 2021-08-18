import TicketForm from '../../components/shared/NewTicket/TicketForm'
import { Card, Row, Col } from 'react-bootstrap'
const PassagersForm = () => {
  return (
    <>
      <Row className='justify-content-md-center'>

        <Col md={{ span: 4 }}>


            <TicketForm />
        </Col>
      
      </Row>
    </>

  )
}

export default PassagersForm