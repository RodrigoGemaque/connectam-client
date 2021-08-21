
import { Row, Col, Button } from 'react-bootstrap'
import styles from './styles.module.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faMoneyBillAlt, faTrash } from '@fortawesome/free-solid-svg-icons';


import Link from 'next/link'
import toCurrency from '../../../services/toCurrency';
// redux
import { useSelector, useDispatch } from 'react-redux'
import { removeCartTravel, clearCartTravels } from '../../../store/modules/storefront/cart/reducer'



const CartList = () => {
  const cartTravels = useSelector(state => state.cartTravels)
  const dispatch = useDispatch()
  const total = () => cartTravels.reduce(
    (a, b) => a + (parseFloat(b['price']) * parseFloat(b['quantity']) || 0), 0
  );

  const handleRemove = (index) => {
    dispatch(removeCartTravel(index));
  }


 

  return (
    <>
      <Col md={12}>


        <Row className={styles.background}>
          <Row>
            <h5 className='fw-bold text-center mb-0'>Detalhes do pedido </h5>
            <h5>
              <div>
                {cartTravels?.map((travel, index) =>
                  <Col key={index}>
                    <Row className = "mt-4">
                      <span>Viagem : {travel.route_info.departure} x {travel.route_info.arrival} </span>
                      <span>
                        Quantidade de bilhetes : {travel.quantity}  &nbsp;
                        <FontAwesomeIcon
                        className = "ms-5"
                          icon={faTrash}
                          key={index}
                          color="var(--color-gray-light)"
                          onClick={() => handleRemove(index)}
                        />
                      </span>
                    </Row>
                  </Col>

                )}
              </div>
            </h5>
          </Row>
          <Col >
            <Row className='mt-4'>
              <Col> <h4>
                <small className='fw-bold'> Valor Total </small>
              </h4></Col>
              <Col> <h3>
                <span>
                  {
                    toCurrency(total())
                  }
                </span>
                &nbsp;
               
              </h3></Col>
              {/* <Col className={styles.container}>
                <Row>
                  <h4>
                    <small className='fw-bold'> Valor Total </small>
                  </h4>

                </Row>

                <Row>
                  <h3>
                    <span>
                      {
                        total()
                      }
                    </span>
                    &nbsp;
                    <FontAwesomeIcon
                      icon={faMoneyBillAlt}
                      color="var(--color-gray-light)"
                    />
                  </h3>
                </Row>
              </Col> */}
             
              <Link href="/passagers">
                <Button className='text-center'>Continuar</Button>

              </Link>
            </Row>


          </Col>
        </Row>

      </Col>
    </>
  )
}

export default CartList