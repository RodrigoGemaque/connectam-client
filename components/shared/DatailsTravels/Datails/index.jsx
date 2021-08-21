import { Col, Row, Button, Form } from 'react-bootstrap'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faShip, faAnchor, faClock, faShoppingCart, faBed, faCalendar, faUser, faUserPlus, faUserMinus, faMoneyBillAlt } from '@fortawesome/free-solid-svg-icons';
import styles from './styles.module.css'


// redux
import { useSelector, useDispatch } from 'react-redux'
import { addCartTravel } from '../../../../store/modules/storefront/cart/reducer'


import Image from 'next/image'

import CartList from '../../../StoreFront/CartList';

import { useState } from 'react';


const Datails = (props) => {


  const dispatch = useDispatch()

  const [quantity, setQuantity] = useState(1)

  const addProduct = (e) => {
    e.preventDefault()

    const travel = { ...props, ...{ quantity: parseInt(quantity) } }
    dispatch(addCartTravel(travel))
    setQuantity(1)

  }




  return (
    <>
      <Row className='ms-4'>
        <Col md={6}>
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
                <Row className='mt-2'>
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
                    <small > Data: {(props.date)} </small>
                  </h5>

                </Row>
                {/* <Row className='mt-4'>
                  <h5>
                    <FontAwesomeIcon
                      icon={faClock}
                      color="var(--color-gray-light)"
                    />
                    <small > 12:00 </small>
                  </h5>
                </Row> */}

              </Col>


              <Col >
                <Row className='mt-2'>
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
                    <Form onSubmit={addProduct} className='d-flex'>
                      <Form.Group>
                        <Form.Control
                          required
                          type="number"
                          placeholder="quantidade"
                          min="1" step="1"

                          onChange={(e) => setQuantity(e.target.value)}
                        />
                      </Form.Group>
                      <Button variant="primary"
                        type="submit"
                        className="ms-2 text-whit ms-6"
                      >
                        Adicionar
                      </Button>
                    </Form>

                  </Col>
                </Row>
                {/* <Link href = '/ticket/new'>
                  <Button>Continuar</Button>
                </Link> */}
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