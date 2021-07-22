import { useState } from 'react';
import styles from './styles.module.css';
import { InputGroup, FormControl, Row, Col } from 'react-bootstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSearch, faShoppingCart, faUser, faUserCircle } from '@fortawesome/free-solid-svg-icons';
import Logo from '../Logo';

//Modal
import CartModal from '../../StoreFront/CartModal';

import { useRouter } from 'next/router';


// import Badge from '../../Badge';
// import CartModal from '../../../Storefront/CartModal';

import { useSelector } from 'react-redux';
// import ProductShow from '../../../../dtos/ProductShow';

const CustomerHeader = () => {
  const [cartModalShow, setCartModalShow] = useState(false)


  // const [search, setSearch] = useState('');
  // const [showCartModal, setShowCartModal] = useState(false);

  // const cartProducts: ProductShow[] = useSelector(state => state.cartProducts);

  const router = useRouter();

  // const handleSearch = (): void => {
  //   router.push(`
  //     /Search?search=${search}&length=12&page=1&order=price&direction=asc
  //   `);
  // }

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
              <Col md={8}>
                <FontAwesomeIcon
                  onClick={() => setCartModalShow(true)}
                  icon={faShoppingCart}
                  color="var(--color-gray-light)"
                />
                <CartModal

                  show={cartModalShow}
                  onHide={() => setCartModalShow(false)}
                  onShow={() => setCartModalShow(true)}
                />

              </Col>
              <Col md={4}>
                <FontAwesomeIcon

                  icon={faUserCircle}
                  color="var(--color-gray-light)"
                />


              </Col>


            </Row>
          </Col>
        </Row>
      </Col>
    </Row>
  )
}

export default CustomerHeader;