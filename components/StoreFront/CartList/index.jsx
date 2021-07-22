import { Row, Col, Button } from 'react-bootstrap'
import styles from './styles.module.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faMoneyBillAlt, faTrash } from '@fortawesome/free-solid-svg-icons';


import Link from 'next/link'

// redux
import { useSelector, useDispatch } from 'react-redux'
import { removeCartTravel, clearCartTravels } from '../../../store/modules/storefront/cart/reducer'



const CartList = () => {
  const cartTravels = useSelector(state => state.cartTravels)
  const dispatch = useDispatch()
  const total = () => cartTravels.reduce((acc, item) => parseFloat(acc + item.price), 0).toFixed(2)

  const handleRemove = (index) => {
    dispatch(removeCartTravel(index));
  }

  return (
    <>
      <Col md={12}>


        <Row className={styles.background}>
          <Row>
            <span className='fw-bold'>Passagem: </span>
            <h5>
              <div>
                {cartTravels?.map((travel, index) =>
                    <Col key = {index}>
                      <Row>

                        <span>
                          Viagem id: {travel.id} &nbsp;
                          <FontAwesomeIcon
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

              <Col className={styles.container}>
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
              </Col>
            </Row>
            

          </Col>

        </Row>

      </Col>
    </>
  )
}

export default CartList