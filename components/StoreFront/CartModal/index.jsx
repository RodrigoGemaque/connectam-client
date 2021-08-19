import { Modal, Row, Col, Form, Button } from 'react-bootstrap';
// import Image from 'next/image'
// import { useState } from 'react';

// import toCurrency from '../../../services/toCurrency'

import Cart from '../Cart'
import Link from 'next/link'

//redux
import { addCartTravel } from '../../../store/modules/storefront/cart/reducer'
import { useSelector, useDispatch } from 'react-redux'


export default function CartModal(props) {

  //Redux
  const cartTravels = useSelector(state => state.cartTravels)
  const dispatch = useDispatch();
  //Redux
  // console.log(cartTravels.length > 0)

  
  // // const travel = { ...props, ...{ 'quantity': quantity } }
  // // const newvalue = [...cartTravels, travel]

  // console.log( props)
  // //Quantidade de Viagens
  // const [quantity, setQuantity] = useState(1);

  // const addProduct = (e) => {
  //   e.preventDefault();

  //   const travel = { ...props.travel, ...{ 'quantity': quantity } }

  //   if (cartTravels.id != props.travel.id){
  //       dispatch(addCartTravel([travel]))
  //     //   setCart({ restaurant: props.restaurant, products: [product] })
  //   }else {
  //     dispatch(addCartTravel([...cartTravels, travel]))
  //   }

  //     setQuantity(1);
  //     props.onHide();

  // //   else
  // //   setCart({ restaurant: props.restaurant, products: [...cart.products, product] })

  // }





  return (
    <Modal
      show={props.show}
      
      aria-labelledby='contained-modal-title-vcenter'
      centered
      keyboard={false}
      onHide={() => props.onHide()}
    >
      <Modal.Header>
        <h5 className='fw-bold mt-2'>Carrinho</h5>
      </Modal.Header>
      <Modal.Body>
       
       <Cart show = {props.show}/>
       {cartTravels.length > 0 &&
        <div className = 'text-center pt-2'>
          <Link href = '/passagers'>
            <Button variant = 'primary' className = 'text-whit'>Finalizar Pedido</Button>
          </Link>
        </div>
       }
    

      </Modal.Body>
    </Modal>
  )
}