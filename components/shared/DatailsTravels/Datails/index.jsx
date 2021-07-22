import { Card, Col, Row, Button } from 'react-bootstrap'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faShip, faAnchor, faClock, faShoppingCart, faBed, faCalendar, faUser, faUserPlus, faUserMinus, faMoneyBillAlt } from '@fortawesome/free-solid-svg-icons';
import styles from './styles.module.css'

import { useState } from 'react'


// redux
import { useSelector, useDispatch } from 'react-redux'
import { addCartTravel, removeCartTravel, clearCartTravels } from '../../../../store/modules/storefront/cart/reducer'


import Link from 'next/link'
import Image from 'next/image'

import { keys } from '@material-ui/core/styles/createBreakpoints';
import CartList from '../../../StoreFront/CartList';



const Datails = (props) => {


  console.log(props)
  const [user, setUser] = useState(0)
  const cartTravels = useSelector(state => state.cartTravels)

  const dispatch = useDispatch()


  // const total = () => cartTravels.reduce((acc, item) => parseFloat(acc + item.price), 0).toFixed(2)



  return (
    <>
      <Row>
        <Col md={7}>
          <Row className={styles.background}>
            <Row >
              {/* Barco imagem */}
              <Col lg={3} md={6} sm={12} className='text-center'>
                <Image
                  src={props.image_url}
                  width={300}
                  height={300}
                  alt="Sem Imagem para a embarcacao"
                >
                </Image>
              </Col>

              <Col >
                <Row className='mt-5'>
                  <h5 className='mb-1'>
                    <FontAwesomeIcon
                      icon={faShip}
                      color="var(--color-gray-light)"
                    />
                    <small > Navio: {(props.ship)} </small>
                  </h5>
                </Row>

                <Row className='mt-4'>
                  <h5>
                    <FontAwesomeIcon
                      icon={faCalendar}
                      color="var(--color-gray-light)"
                    />
                    <small > {(props.date)} </small>
                  </h5>

                </Row>
                <Row className='mt-4'>
                  <h5>
                    <FontAwesomeIcon
                      icon={faClock}
                      color="var(--color-gray-light)"
                    />
                    <small > 12:00 </small>
                  </h5>

                </Row>

              </Col>


              <Col >
                <Row className='mt-5'>
                  <Col>
                    <h5 className='mb-1'>
                      <FontAwesomeIcon
                        icon={faAnchor}
                        color="var(--color-gray-light)"
                      />
                      <small > Origem/Destino:</small> <br />
                      <small>{props.route_info.departure}</small> {`->`} <small>{props.route_info.arrival}</small>
                    </h5>
                  </Col>
                </Row>

                <Row className='mt-4'>

                  <Col>
                    <h6 className={styles.background2}>Adicionar passageiro </h6>
                    <h4>
                      <FontAwesomeIcon
                        icon={faUserPlus}
                        color="var(--color-gray-light)"
                        onClick={() => dispatch(addCartTravel(props))}
                      />
                    </h4>
                  </Col>
                </Row>
                <Link href = '/ticket/new'>
                  <Button>Continuar</Button>
                </Link>
              </Col>

            </Row>
          </Row>
        </Col>
        <Col md={4} className={styles.container}>
          <CartList />
        </Col>
      </Row>


    </>
  )
}

export default Datails