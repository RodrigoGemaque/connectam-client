import { Button, Form, Card, Row, Col } from 'react-bootstrap'
import Link from 'next/link'
// redux
import { useSelector, useDispatch } from 'react-redux'
import { clearCartTravels } from '../../../../store/modules/storefront/cart/reducer'
import { addPassager, clearList } from '../../../../store/modules/admin/form_passager/reducer'

function TicketForm() {
  const cartTravels = useSelector(state => state.cartTravels)

  const dispatch = useDispatch()

  // let quantity = []  
  // cartTravels.forEach(function(travel){
  //   quantity.push(travel.quantity)
  // })
  // const quantity = cartTravels.map( travel => travel.quantity) 


  var totalQuantity = cartTravels.reduce(function (accumulator, travel) {
    return accumulator + (travel.quantity)
  }, 0)


  

  //gerar um array com todas as posicoes da soma da quantidade com seu respctivo id
    let quantity1 = []  
    let quantity2 = []  
    cartTravels.forEach(function(travel){
      if(travel.quantity > 1){
        for(i = 1; i <= travel.quantity; i++){
          let j = i
          let hour = new Date(travel.hour)
          let hours = hour.getUTCHours()
          quantity1.push({ travel_id: travel.id, quantity: 1,ship_id: travel.ship_id , hour: hours,j}) 
        }
      }else if(travel.quantity == 1){
        for(i = 1; i <= travel.quantity; i++){
          let j = Math.random().toFixed(2)
          let hour = new Date(travel.hour)
          let hours = hour.getUTCHours()
          quantity1.push({ travel_id: travel.id, quantity: 1,ship_id: travel.ship_id,hour: hours, j}) 
        }
        
      }

    })
    
    // console.log( quantity1)
    // console.log(quantity2)
    const newArr = quantity1.concat(quantity2)

  //Estados do form


  //Adicionar Passageiro
  const listPassager = () => {
    newArr.map((e) => {
      let name = document.getElementById(`name${e.j}`).value
      let cpf = document.getElementById(`cpf${e.j}`).value
      let email = document.getElementById(`email${e.j}`).value
      let travel_id = e.travel_id
      let ship_id = e.ship_id
      let hour = e.hour

      let passager = {
        name: name,
        cpf: cpf,
        email: email,
        travel_id: travel_id,
        ship_id: ship_id,
        hour: hour
      }
      dispatch(addPassager(passager))
    })
  }

  var test = []
  for (var i = 1; i <= totalQuantity; i++) {
    test.push(i)
  }

  // console.log(test)
  // console.log(newArr)


  return (
    <>
    <Row>
      <Col>
      <Card>

      <h4 className='fw-bold mb-5 text-center'>Dados do Passageiro(s)</h4>
      <h4 className='fw-bold mb-5 text-center'>Preencha e confirme as Informacoes  </h4>

      </Card>
      {newArr?.map((e) =>
        <div className="mb-3 mt-3" key={e.j}>
          <Card className='p-3 mb-3'>
            
          <h4>viagem id {e.travel_id}</h4>
          <Form.Group>
            <Form.Label>Nome completo</Form.Label>
            <Form.Control
              id={`name${e.j}`}
              required
              type="text"
              placeholder="Dennis Ritchie..."
              // onChange={(e) => setPassagerName(e.target.value)}
              // value={passagerName}
              className='mb-2'
            />
          </Form.Group>
          <Form.Group className='mt-3'>
            <Form.Label>CPF</Form.Label>
            <Form.Control
              id={`cpf${e.j}`}
              required
              type="text"
              placeholder="000.000.000-00"
              // onChange={(e) => setPassagerCpf(e.target.value)}
              // value={passagerCpf}
              name="cpf"
            />
          </Form.Group>

          <Form.Group className='mt-3 mb-3'>
            <Form.Label>Email</Form.Label>
            <Form.Control
              id={`email${e.j}`}
              required
              type="text"
              placeholder="jose_fernando@gmail.com"
              // onChange={(e) => setPassagerEmail(e.target.value)}
              // value={passagerEmail}
              name="phone_number"
            />
          </Form.Group>

          <div className="text-center">

          </div>
          </Card>
        </div>
   


      )}
      </Col>
     
      <Link href='order/new'>
        <Button onClick={() => listPassager()} type="submit" size="lg" className="mt-3 mb-2 text-white">
          Confirmar 
        </Button>
      </Link>

      </Row>
     
    </>
  )
}

export default TicketForm








