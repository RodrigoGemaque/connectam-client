import { Row, Col, Form, Table, Card, Button } from 'react-bootstrap';
import { faTrash, faMoneyBill, faCalendar, faShip, faUserMinus, faUserPlus } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import styles from './styles.module.css'
import Link from 'next/link'


//Redux
import { useSelector, useDispatch } from 'react-redux'
import { addCartTravel, removeCartTravel, clearCartTravels } from '../../../store/modules/storefront/cart/reducer'


const CartComponent = () => {
  const cartTravels = useSelector(state => state.cartTravels)
  const dispatch = useDispatch();


  const handleRemove = (index) => {
    dispatch(removeCartTravel(index))
  }


  return (
    <Card >
      <Row >
        <Col className='col-lg-12 ' >
          <div className={styles.title}>
            <Row>
              <Col>
                <h4><b>Shopping Cart</b></h4>
              </Col>
              <Col className={styles.countItens}>3 items</Col>
            </Row>
          </div>


          {/* Card de passagem */}


          <Col className={styles.card}>{cartTravels.map((navio, i) =>
            
            
            <Card key={i}>
              <Row>
                <Row className=" main align-items-center">
                  <Col className={styles.sumary}><img className="img-fluid" src="https://i.imgur.com/ba3tvGm.jpg"></img></Col>
                  <Col>
                    <div >
                      <FontAwesomeIcon
                        icon={faShip}
                      />
                      <span className='text-muted'> Embarcacao </span>
                    </div>

                    <Row>{navio.ship}</Row>
                  </Col>
                  <Col>
                    <span>Data</span>
                    <Row>
                      <div >
                        <FontAwesomeIcon
                          icon={faCalendar}
                        />
                        <span>{` ${navio.date}`}</span>
                      </div>
                    </Row>
                    <Row>

                    </Row>

                  </Col>
                  <Col>
                    <Row>
                      <div >
                        <span>Adulto </span>
                        <FontAwesomeIcon
                          icon={faUserPlus}
                          onClick={e => e.h4}
                        />

                        <FontAwesomeIcon
                          icon={faUserMinus}
                          onClick={e => e.h4}
                        />
                      </div>
                    </Row>
                    <Row>
                      <div >
                        <span>Crianca </span>
                        <FontAwesomeIcon
                          icon={faUserPlus}
                          onClick={e => e.h4}
                        />

                        <FontAwesomeIcon
                          icon={faUserMinus}
                          onClick={e => e.h4}
                        />
                      </div>
                    </Row>
                  </Col>
                  <Col>
                    <span>Preco</span>
                    <div >
                      <FontAwesomeIcon
                        icon={faMoneyBill}
                      />
                      <span>{` ${navio.price}`}</span>
                    </div>
                  </Col>
                  <Col>
                    <Link href='/ticket'>
                      <Button  > Seguir</Button>
                    </Link>
                  </Col>
                </Row>
                <Row>


                  {/* <Col className=" main align-items-center"> test</Col> */}
                </Row>


              </Row>
            </Card>

            )}
            
          </Col>
          <br></br>


          {/* <Row className=" border-top border-bottom">
            <Row className=" main align-items-center">
              <Col className={styles.col_2}><img class="img-fluid" src="https://i.imgur.com/ba3tvGm.jpg"></img></Col>
              <Col>
                <Row className='text-muted'> Shirt</Row>
                <Row>Cotton T-shirt</Row>
              </Col>
              <Col><a href="#">-</a><a href="#" class="border">1</a><a href="#">+</a></Col>
              <Col>&euro; 44.00 <span class="close">&#10005;</span></Col>
            </Row>
          </Row>


          <Row className=" border-top border-bottom">
            <Row className=" main align-items-center">
              <Col className={styles.col_2}><img class="img-fluid" src="https://i.imgur.com/pHQ3xT3.jpg"></img></Col>
              <Col>
                <Row className='text-muted'> Shirt</Row>
                <Row>Cotton T-shirt</Row>
              </Col>
              <Col><a href="#">-</a><a href="#" class="border">1</a><a href="#">+</a></Col>
              <Col>&euro; 44.00 <span class="close">&#10005;</span></Col>
            </Row>
          </Row> */}

        </Col>
      </Row>
    </Card >

  )
}

export default CartComponent


