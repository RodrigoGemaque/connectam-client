import TicketForm from '../../components/shared/NewTicket/TicketForm'
import { Card, Row, Col } from 'react-bootstrap'
import withAuth from '../../components/withAuth'

import { useRouter } from 'next/router'
import { useSelector } from 'react-redux'
const PassagersForm = () => {
const user = useSelector(state => state.auth.loggedUser)
const router = useRouter()
  try {
    if(user.profile === 'ship_owner' || user.profile === 'client' || user.profile === 'intermediary' || user.profile === 'admin'){
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
  } catch (error) {
    router.push('/login')
  }  

 
}

export default withAuth(PassagersForm);