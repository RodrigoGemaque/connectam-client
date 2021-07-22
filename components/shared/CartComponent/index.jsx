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




// <Col className={styles.background}>
  // <div>
  //   <h5><b>Summary</b></h5>
  // </div>
  // <hr />
  // <Row>
  //   <Col >ITEMS 3</Col>
  //   <Col className='text-right'>&euro; 132.00</Col>
  // </Row>

  // <Row>
  //   <Col className="col-sm-5">
  //     <div className="form-group">
  //       <span className="form-label">Escolha a Data</span>
  //       <input className="form-control" type="date"
  //         required></input>

  //     </div>
  //   </Col>
  // </Row>

  // <span className="select-arrow"></span>

  // <form>
  //   <p>SHIPPING</p>
  //   <select>
  //     <option class="text-muted">Standard-Delivery- &euro;5.00</option>
  //     <p>GIVE CODE</p> <input id="code" placeholder="Enter your code" />
  //   </select>
  // </form>
  // <hr />
  // <Row id='checkout' >
  //   <Col> Total Price</Col>
  //   <Col className='text-right'> &euro; 137.00</Col>
  // </Row>
  // <Button className={styles.Button}>CHECKOUT</Button>

// </Col>










{/* <Container>
  <Row>
    <Col className='col-sm-12 col-md-10 col-md-offset-1'>
      <Table className="table table-hover">
        <thead>
          <tr>
            <th>Product</th>
            <th>Quantity</th>
            <th className="text-center">Price</th>
            <th className="text-center">Total</th>
            <th> </th>
          </tr>
        </thead>
        <tbody>
          <tr>

            <td className="col-sm-8 col-md-6">
              <div className="media">
                <a className="thumbnail pull-left" href="#"> <img className="media-object" src="http://icons.iconarchive.com/icons/custom-icon-design/flatastic-2/72/product-icon.png" /> </a>
                <div className="media-body">
                  <h4 className="media-heading"><a href="#">Product name</a></h4>
                  <h5 className="media-heading"> by <a href="#">Brand name</a></h5>
                  <span>Status: </span><span className="text-success"><strong>In Stock</strong></span>
                </div>
              </div>
            </td>

            <td class="col-sm-1 col-md-1 text-align: center">
              <input type="email" class="form-control" id="exampleInputEmail1" value="3"></input>
            </td>
            <td class="col-sm-1 col-md-1 text-center"><strong>$4.87</strong></td>
            <td class="col-sm-1 col-md-1 text-center"><strong>$14.61</strong></td>
            <td class="col-sm-1 col-md-1">
              <button type="button" class="btn btn-danger">
                <span class="glyphicon glyphicon-remove"></span> Remove
              </button></td>
          </tr>



          <tr>
            <td class="col-md-6">
              <div class="media">
                <a class="thumbnail pull-left" href="#"> <img class="media-object" src="http://icons.iconarchive.com/icons/custom-icon-design/flatastic-2/72/product-icon.png" /> </a>
                <div class="media-body">
                  <h4 class="media-heading"><a href="#">Product name</a></h4>
                  <h5 class="media-heading"> by <a href="#">Brand name</a></h5>
                  <span>Status: </span><span class="text-warning"><strong>Leaves warehouse in 2 - 3 weeks</strong></span>
                </div>
              </div>
            </td>
          </tr>


        </tbody>
      </Table>
    </Col>
  </Row>
  test
</Container> */}