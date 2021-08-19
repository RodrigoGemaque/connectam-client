import { useState } from 'react';
import styles from './styles.module.css';
import { Row, Col } from 'react-bootstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faShip, faShoppingCart, faPeopleArrows, faUserCircle } from '@fortawesome/free-solid-svg-icons';
import Logo from '../Logo';
import Link from 'next/link'

//Modal
import CartModal from '../../StoreFront/CartModal';
import { useRouter } from 'next/router';


// import Badge from '../../Badge';
// import CartModal from '../../../Storefront/CartModal';

import { useSelector } from 'react-redux';
// import ProductShow from '../../../../dtos/ProductShow';

const CustomerHeader = () => {
  const [cartModalShow, setCartModalShow] = useState(false);

  const router = useRouter();



  // const handleUserRedirect = (): void => {
  //   router.push(
  //     LoggedService.execute() ? '/Profile' : 'Auth/Admin'
  //   )
  // }

  return (
    <Row className={styles.background}>
      <Col md={9} className="mt-2">
        {/* Posicionamento temporario */}
        <Logo />
      </Col>

      <Col md={3} className="mt-2 text-center">
        <Row>
          <Col md={12}>
            <Row>
              <Col md={4}>
              <Link href = '/login/owner'>
                <FontAwesomeIcon
                  // onClick={() => setCartModalShow(true)}
                  icon={faShip}
                  color="var(--color-gray-light)"
                />
                </Link>
                {/* <CartModal
                  show={cartModalShow}
                  onHide={() => setCartModalShow(false)}
                  onShow={() => setCartModalShow(true)}
                /> */}
              </Col>
              <Col md={4}>
              <Link href = '/login/intermediary'>
                <FontAwesomeIcon
                  onClick={() => setCartModalShow(true)}
                  icon={faPeopleArrows}
                  color="var(--color-gray-light)"
                />
                </Link>
              </Col>
              <Col md={4}>
                <Link href = '/login'>
                  <FontAwesomeIcon
                    icon={faUserCircle}
                    color="var(--color-gray-light)"
                  />
                </Link>
              </Col>
            </Row>
          </Col>
        </Row>
      </Col>
    </Row>
  )
}

export default CustomerHeader;