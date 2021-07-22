import { Modal, Row, Col, Form, Button } from 'react-bootstrap';
import Image from 'next/image'
import { useState } from 'react';

import toCurrency from '../../../services/toCurrency'




//redux
import { addCartTravel } from '../../../store/modules/storefront/cart/reducer'
import { useSelector, useDispatch } from 'react-redux'


export default function AddProductModal(props) {

  //Redux

  const cartTravels = useSelector(state => state.cartTravels)
  const dispatch = useDispatch();
  //Redux

  // console.log(props)
  const travel = { ...props.travel, ...{ 'quantity': quantity } }


  // console.log(cartTravels)

  // const newvalue = [...cartTravels, travel]

  //Quantidade de Viagens
  const [quantity, setQuantity] = useState(1);

  const addProduct = (e) => {
    e.preventDefault();

    const travel = { ...props.travel, ...{ 'quantity': quantity } }
    // console.log(travel.travel)

    dispatch(addCartTravel(travel))
    //   setCart({ restaurant: props.restaurant, products: [product] })
    // }else {
    //   dispatch(addCartTravel([...cartTravels, travel]))


    // setQuantity(1);
    props.onHide();

    //   else
    //   setCart({ restaurant: props.restaurant, products: [...cart.products, product] })

  }

  if (!props.travel) {
    return null
  }




  return (
    <Modal
      show={props.show}
      size='sm'
      aria-labelledby='contained-modal-title-vcenter'
      centered
      keyboard={false}
      onHide={() => props.onHide()}
    >
      <Modal.Header>
        <h5 className='fw-bold mt-2'>Adicionar Viagem</h5>
      </Modal.Header>
      <Modal.Body>
        <Row>
          <Col>
            <Image
              src={props.travel.image_url}
              alt={props.ship}
              width={300}
              height={200}
            />
          </Col>
        </Row>
        <Row className="pb-0">
          <Col md={8}>
            <p className='fw-bold mb-0'>{props.travel.ship}</p>
          </Col>
          <Col>
            <small className='border px-1 border-custom-gray fw-bold'>
              {toCurrency(props.travel.price)}
            </small>
          </Col>
        </Row>
        <Row>
          <Col>
            <p><small>{props.travel.date}</small></p>
          </Col>
          <Col>
            <p><small>{props.travel.route_info.departure}</small></p>
          </Col><Col>
            <p><small>{props.travel.route_info.arrival}</small></p>
          </Col>


        </Row>
        <Form onSubmit={addProduct} className='d-flex'>
          {/* <Form.Group>
            <Form.Control
              required
              type="number"
              placeholder="quantidade"
              min="1" step="1"
              name="quantidade"
             
              onChange={(e) => setQuantity(e.target.value)}
            />
          </Form.Group> */}
          <Button variant="primary"
            type="submit"
            className="text-white ms-6">
            Adicionar
          </Button>

        </Form>



      </Modal.Body>
    </Modal>
  )
}