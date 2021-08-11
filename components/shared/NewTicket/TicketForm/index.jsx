import {  Button ,Form } from 'react-bootstrap'
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
    return accumulator + parseInt(travel.quantity)
  }, 0)



  console.log(totalQuantity)


  //Estados do form


  //Adicionar Passageiro
  const listPassager = () => {
    test.map((e)=> {
    let name = document.getElementById(`name${e}`).value  
    let cpf = document.getElementById(`cpf${e}`).value  
    let email = document.getElementById(`email${e}`).value  
      let passager = {
        name: name,
        cpf: cpf,
        email: email
      }
      dispatch(addPassager(passager))
    })
  }

  var test = []
  for (var i = 1; i <= totalQuantity; i++) {
    test.push(i)
  }

  


  return (
    <>
      <h4 className='fw-bold mb-5 text-center'>Dados do Passageiro</h4>
      <h4 className='fw-bold mb-5 text-center'>Preencha e confirme  passageiro(a)</h4>
      {test?.map((e) =>
        
        <div className="mb-4" >
          <Form.Group>
            <Form.Label>Nome completo</Form.Label>
            <Form.Control
              id = {`name${e}`}
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
              id = {`cpf${e}`}
              required
              type="text"
              placeholder="000.000.000-00"
              // onChange={(e) => setPassagerCpf(e.target.value)}
              // value={passagerCpf}
              name="cpf"
            />
          </Form.Group>

          <Form.Group className='mt-3 mb-2'>
            <Form.Label>Email</Form.Label>
            <Form.Control
              id = {`email${e}`}
              required
              type="text"
              placeholder="jose_fernando@gmail.com"
              // onChange={(e) => setPassagerEmail(e.target.value)}
              // value={passagerEmail}
              name="phone_number"
            />
          </Form.Group>
          <br />

          <div className="text-center">

          </div>
        </div>


      )}
      <Link href = 'order/new'>
        
        <Button onClick={() => listPassager()} type="submit" size="lg" className="mt-4 text-white">
          Confirmar Passageiro
        </Button>
      </Link>

    </>
  )
}

export default TicketForm








