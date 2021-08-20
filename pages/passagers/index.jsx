import TicketForm from '../../components/shared/NewTicket/TicketForm'
import { Card, Row, Col } from 'react-bootstrap'
import withAuth from '../../components/withAuth'

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

export default withAuth(PassagersForm);