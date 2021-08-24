import { useState } from 'react';
import styles from './styles.module.css';
import { Row, Col, Navbar, Nav, NavDropdown, Container } from 'react-bootstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faShip, faShoppingCart, faPeopleArrows, faUserCircle } from '@fortawesome/free-solid-svg-icons';
import Logo from '../Logo';
import Link from 'next/link'
import UsersService from '../../../services/user';
import { toast } from 'react-toastify';
import { useDispatch, useSelector } from 'react-redux';
import { clearLoggedUser } from '../../../store/modules/auth/reducer';

//Modal
import CartModal from '../../StoreFront/CartModal';
import { useRouter } from 'next/router';


// import Badge from '../../Badge';
// import CartModal from '../../../Storefront/CartModal';

// import ProductShow from '../../../../dtos/ProductShow';

const CustomerHeader = () => {
  const [cartModalShow, setCartModalShow] = useState(false);

  const router = useRouter();
  const loggedUser = useSelector((state) => state.auth.loggedUser );
  const dispatch = useDispatch()
  const handleLogout = async (evt)=> {
    evt.preventDefault();

    try{
      const response = await UsersService.signOut();
      dispatch(clearLoggedUser());
      toast.info('Logout realizado com sucesso');
      router.push('/login')

      // router.push(user.profile === 'intermedi' ? '/travels' : '/')
      // router.push(user.profile === 'admin' ? '/travels' : '/')
    }catch(err){
      toast.error('Erro ao encerrar a sessão');
      console.log(err)
    }
  }




  // const handleUserRedirect = (): void => {
  //   router.push(
  //     LoggedService.execute() ? '/Profile' : 'Auth/Admin'
  //   )
  // }

  return (
    <Row className={styles.background}>
      <Col md={6}>
        {/* Posicionamento temporario */}
        <Logo />
      </Col>
      <Col >
      <Navbar >
          <Navbar.Toggle />
          <FontAwesomeIcon
            icon={faShip}
          />
            <Nav >
            <NavDropdown >
                <Link href = '/login/owner'>
                  <NavDropdown.Item href="#action/3.1">Login</NavDropdown.Item>
                </Link>

                {loggedUser ? 
                <NavDropdown.Item 
                  onClick = {(evt) => handleLogout(evt)}
                >SignOut
                </NavDropdown.Item> 
                
                : ''


                }
                
                {/* <NavDropdown.Item href="#action/3.2">Another action</NavDropdown.Item>
                <NavDropdown.Item href="#action/3.3">Something</NavDropdown.Item>
                <NavDropdown.Divider />
                <NavDropdown.Item href="#action/3.4">Separated link</NavDropdown.Item> */}
              </NavDropdown>
            </Nav>
        </Navbar>
      </Col>
      <Col >
      <Navbar >
          <Navbar.Toggle />
          <FontAwesomeIcon
            icon={faPeopleArrows}
          />
            <Nav >
              <NavDropdown >
                <NavDropdown.Item href="#action/3.1">Action</NavDropdown.Item>
                <NavDropdown.Item href="#action/3.2">Another action</NavDropdown.Item>
                <NavDropdown.Item href="#action/3.3">Something</NavDropdown.Item>
                <NavDropdown.Divider />
                <NavDropdown.Item href="#action/3.4">Separated link</NavDropdown.Item>
              </NavDropdown>
            </Nav>
        </Navbar>
      </Col>
      <Col >
        <Navbar
         
        >
          <Navbar.Toggle />
          <FontAwesomeIcon
            icon={faUserCircle}
          />
            <Nav >
              <NavDropdown >
                <Link href = '/login'>
                  <NavDropdown.Item href="#action/3.1">Login</NavDropdown.Item>
                </Link>

                {loggedUser ? 
                <NavDropdown.Item 
                  onClick = {(evt) => handleLogout(evt)}
                >SignOut
                </NavDropdown.Item> 
                
                : ''


                }
                
                {/* <NavDropdown.Item href="#action/3.2">Another action</NavDropdown.Item>
                <NavDropdown.Item href="#action/3.3">Something</NavDropdown.Item>
                <NavDropdown.Divider />
                <NavDropdown.Item href="#action/3.4">Separated link</NavDropdown.Item> */}
              </NavDropdown>
            </Nav>
        </Navbar>

      </Col>


    </Row>
  )
}

export default CustomerHeader;