import { Row, Col, Button } from 'react-bootstrap';
import toCurrency from '../../../services/toCurrency';

//redux
import { removeCartTravel } from '../../../store/modules/storefront/cart/reducer'
import { useSelector, useDispatch } from 'react-redux'

export default function Cart(props) {

  //Redux
  const cartTravels = useSelector(state => state.cartTravels)
  const dispatch = useDispatch();
  //Redux

  const total = () => cartTravels.reduce(
    (a, b) => a + (parseFloat(b['price']) * parseFloat(b['quantity']) || 0), 0
  );

  // const total = () => cartTravels.reduce((acc, item) => parseFloat(acc + item.price), 0).toFixed(2)
  // const total = () => cart.restaurant.delivery_tax + subTotal();
  if (cartTravels.length <= 0)
    return <p>Carrinho vazio</p>;
  const handleRemove = (index) => {
    dispatch(removeCartTravel(index));
  }



  return (
    <>
      <hr />
      {cartTravels?.map((travel, i) =>
        <div key={travel.id} className="mb-4" key={i}>
          <Row>
            <Col md={8} xs={8}>
              <small className='fw-bolder'>{travel.quantity} x Bilhete {travel.ship}</small>
            </Col>
            <Col md={4} xs={4} className="text-right">
              <small >
                {toCurrency(travel.price)}
              </small>
            </Col>
          </Row>
          <Row className="mt-2">
            <Col md={8} xs={8}>
              <p><small>Data : {travel.date}</small></p>
            </Col>
            <Col md={4} xs={4} className="text-right">
              <Button
                size="sm"
                variant="primary"
                onClick={() => handleRemove(i)}
                className='border px-1 border-custom-gray'
              >
                Remover
              </Button>
            </Col>
          </Row>
        </div>
      )}
    
     <hr />
      <Row className="mb-4">
        <Col md={8} xs={8}>
          <p className='fw-bolder'>Total</p>
        </Col>
        <Col md={4} xs={4} className="text-right">
          <p className='fw-bolder'>{toCurrency(total())}</p>
        </Col>
      </Row>
    </>
  )
}



















// <Row className="mt-4">
// <Col md={8} xs={8}>
//   <p>Subototal</p>
// </Col>
// <Col md={4} xs={4} className="text-right">
//   {/* <p>{toCurrency(subTotal())}</p> */}
// </Col>
// </Row> 
// <Row className="mt-n2">
//   <Col md={8} xs={8}>
//   <p>Taxa de entrega</p>
// </Col> 
// <Col md={4} xs={4} className="text-right">
//   {/* <p>{toCurrency(cartTravels.travel.delivery_tax)}</p> */}
// </Col>
// <hr />
// </Row>