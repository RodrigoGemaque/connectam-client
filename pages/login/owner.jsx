import { Row, Col, Card } from "react-bootstrap"
import Header from "../../components/shared/Header"
// import styles from './styles.module.css'
import LoginForm from '../../components/shared/LoginForm'
import SignUpFormOwner from "../../components/shared/SignUpForm/owner"

const LoginPage = () => {
  return (

    <>
      <Row className='justify-content-md-center mt-4'>

        <Col md={{ span: 4 }}>
          <Card className='p-5 mb-3'>
            <LoginForm
              titlePhrase="Acessar minha Conta"
              buttonPhrase="Acessar"
            />
          </Card>
        </Col>
      </Row>


      <Row className='justify-content-md-center mt-4'>

        <Col md={{ span: 4 }}>
          <Card className='p-5 mb-3'>
            <SignUpFormOwner
              titlePhrase="Criar nova conta"
              buttonPhrase="CRIAR" />
          </Card>
        </Col>
      </Row>
    </>
  )
}

export default LoginPage