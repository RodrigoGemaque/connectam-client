import { Row, Col, FormControl, Button, InputGroup, Form, Alert } from 'react-bootstrap'
import ContainerComponent from '../../ContainerComponent'
import Link from 'next/link'
import { useState } from 'react'
import createOrder from '../../../../services/createOrder'

import TicketForm from '../../NewTicket/TicketForm'

import { useRouter } from 'next/router'


// redux
import { useSelector, useDispatch } from 'react-redux'
import { clearCartTravels } from '../../../../store/modules/storefront/cart/reducer'
import createTicket from '../../../../services/createTicket'


function OrderForm() {
  const cartTravels = useSelector(state => state.cartTravels)
  const [error, setError] = useState(null)
  const router = useRouter()
  const dispatch = useDispatch()


  // if (cartTravels.length == 0){
  //   router.push('/travels')
  // }

  const [order, setOrder] = useState({

    line_items_attributes: cartTravels.map(t => (
     
      { 'travel_id': t.id, 'quantity': t.quantity }
    )),

  })



  const [ticket, setTicket] = useState({

    line_items_attributes: cartTravels.map(t => (
      {
        name: '',
        cpf: "",
        phone_number: '',
      }
    )),

  })





  // const updateOrderState = (e) => {
  //   setOrder({ ...order, [e.target.name]: e.target.value })
  // }

  const updateTicketState = (e) => {
    setOrder({ ...ticket, [e.target.name]: e.target.value })
  }


  const submitOrder = async (e) => {
    e.preventDefault()
  
    try {
      await createOrder(order)
      // await createTicket(ticket)
      
      router.push('/order/success')

      dispatch(clearCartTravels())
    } catch (error) {
      setError(true)
    }
  }




  return (

    <Form onSubmit={e => submitOrder(e)}>

      <h4 className='fw-bold mb-5'>Finalizar pedido</h4>
      {/* <Form.Group>
        <Form.Label>Nome completo</Form.Label>
        <Form.Control
          required
          type="text"
          placeholder="Dennis Ritchie..."
          onChange={updateTicketState}
          value={ticket.name}
          name="name"
        />
      </Form.Group>
      <Form.Group className='mt-3'>
        <Form.Label>CPF</Form.Label>
        <Form.Control
          required
          type="text"
          placeholder="000.000.000-00"
          onChange={updateTicketState}
          value={ticket.cpf}
          name="cpf"
        />
      </Form.Group> */}
      {/* <TicketForm/> */}
      
      {/* <Form.Group className='mt-3'>
        <Form.Label>Contato</Form.Label>
        <Form.Control
          required
          type="text"
          placeholder="(00) 00000-0000"
          onChange={updateTicketState}
          value={ticket.phone_number}
          name="phone_number"
        />
      </Form.Group> */}



      {/* <div className="mt-5"> */}
      {/* <p className='fw-bolder'>Entregar em:</p> */}
      {/* <p><small>{address.street}, {address.number} {address.neighborhood}, {address.city}</small></p> */}
      {/* </div> */}


      {cartTravels.length > 0 &&
        <div className="text-center">
          <Button type="submit" size="lg" className="mt-4 text-white">
            Finalizar Pedido
          </Button>
        </div>
      }

      {error && <Alert variant='custom-red' className="mt-4"> Erro no pedido! </Alert>}
    </Form>

  )
}

export default OrderForm




































// {/* <form

// // onSubmit={handleSubmit}

// >
//   <Row>
//     <Col lg={{ span: 4, offset: 1 }} md={{ span: 8, offset: 2 }}>
//       <ContainerComponent>
//         <h4>
//           {/* {titlePhrase} */}
//           Informacoes do bilhete
//         </h4>


//         <InputGroup className="mt-3">
//           <FormControl
//             placeholder="Nome Completo*"
//             // value={email}
//             type="text"
//             // onChange={
//             //   (evt) => setEmail(evt.target.value)
//             // }
//             required
//           />
//         </InputGroup>

//         <InputGroup className="mt-3">
//           <FormControl
//             placeholder="e-mail do passageiro *"
//             // value={email}
//             type="email"
//             // onChange={
//             //   (evt) => setEmail(evt.target.value)
//             // }
//             required
//           />
//         </InputGroup>

//         <InputGroup className="mt-3">
//           <FormControl
//             placeholder="telefone"
//             // value={password}
//             // type="password"
//             // onChange={
//             //   (evt) => setPassword(evt.target.value)
//             // }
//             required
//           // ref={passwordRef}
//           />
//         </InputGroup>


//         <InputGroup className="mt-3">
//           <FormControl
//             placeholder="Data de nascimento"
//             // value={password}
//             type="data"
//             // onChange={
//             //   (evt) => setPassword(evt.target.value)
//             // }
//             required
//           // ref={passwordRef}
//           />
//         </InputGroup>

//         <InputGroup className="mt-3">
//           <FormControl
//             placeholder="CPF *"
//             // value={password}
//             type="data"
//             // onChange={
//             //   (evt) => setPassword(evt.target.value)
//             // }
//             required
//           // ref={passwordRef}
//           />
//         </InputGroup>


//         {/* <InputGroup className="mt-3">
//           <FormControl
//             placeholder="RG *"
//             // value={password}
//             type="data"
//             // onChange={
//             //   (evt) => setPassword(evt.target.value)
//             // }
//             required
//           // ref={passwordRef}
//           />
//         </InputGroup> */}


//         {/* <Form.Group placeholder = 'asdf' controlId="exampleForm.ControlSelect1">
//           <Form.Label placeholder = 'asdf'></Form.Label>
//           <Form.Control as="select">
//             <option value = '0' >Sexo</option>
//             <option>Masculino</option>
//             <option>Feminino</option>
//           </Form.Control>
//         </Form.Group> */}



//         <Button type="submit" className="btn btn-info mt-3 w-100">
//           {/* {buttonPhrase} */}
//           Continuar
//         </Button>

//         <br />


//       </ContainerComponent>
//     </Col>


//     <Col >
//       <ContainerComponent>
//         <h4>
//           {/* {titlePhrase} */}
//           Informacoes do bilhete
//         </h4>


//         <InputGroup className="mt-3">
//           <FormControl
//             placeholder="Nome Completo*"
//             // value={email}
//             type="text"
//             // onChange={
//             //   (evt) => setEmail(evt.target.value)
//             // }
//             required
//           />
//         </InputGroup>

//         <InputGroup className="mt-3">
//           <FormControl
//             placeholder="e-mail do passageiro *"
//             // value={email}
//             type="email"
//             // onChange={
//             //   (evt) => setEmail(evt.target.value)
//             // }
//             required
//           />
//         </InputGroup>

//         <InputGroup className="mt-3">
//           <FormControl
//             placeholder="telefone"
//             // value={password}
//             // type="password"
//             // onChange={
//             //   (evt) => setPassword(evt.target.value)
//             // }
//             required
//           // ref={passwordRef}
//           />
//         </InputGroup>


//         <InputGroup className="mt-3">
//           <FormControl
//             placeholder="Data de nascimento"
//             // value={password}
//             type="data"
//             // onChange={
//             //   (evt) => setPassword(evt.target.value)
//             // }
//             required
//           // ref={passwordRef}
//           />
//         </InputGroup>

//         <InputGroup className="mt-3">
//           <FormControl
//             placeholder="CPF *"
//             // value={password}
//             type="data"
//             // onChange={
//             //   (evt) => setPassword(evt.target.value)
//             // }
//             required
//           // ref={passwordRef}
//           />
//         </InputGroup>


//         {/* <InputGroup className="mt-3">
//           <FormControl
//             placeholder="RG *"
//             // value={password}
//             type="data"
//             // onChange={
//             //   (evt) => setPassword(evt.target.value)
//             // }
//             required
//           // ref={passwordRef}
//           />
//         </InputGroup> */}


//         {/* <Form.Group placeholder = 'asdf' controlId="exampleForm.ControlSelect1">
//           <Form.Label placeholder = 'asdf'></Form.Label>
//           <Form.Control as="select">
//             <option value = '0' >Sexo</option>
//             <option>Masculino</option>
//             <option>Feminino</option>
//           </Form.Control>
//         </Form.Group> */}



//         <Button type="submit" className="btn btn-info mt-3 w-100">
//           {/* {buttonPhrase} */}
//           Continuar
//         </Button>

//         <br />


//       </ContainerComponent>

//     </Col>
//   </Row>


// </form> */}

































//redux

// import { getArrival, getDeparture, getDate } from '../../store/modules/admin/travels/travelsSlice'


// import TravelsService from '../../services/travels'
// const defaultUrl = '/admin/v1/cities'
// const MainHome = () => {
//   //router config
//   const router = useRouter()
  // const { data } = useSWR(defaultUrl, TravelsService.index)


  // console.log(data)

  // const chegada = data.map(t => t.name)
  // console.log(  chegada)  




  //redux init
  // const dispatch = useDispatch()
  // const { departure, arrival, date } = useSelector(state => state.travel)




  //Params Search
  // function Search(e) {
  //   e.preventDefault()
  //   router.replace(`/travels?departure=${departure}&arrival=${arrival}&date=${date}`)
  // }


  // function getCity() {
  //   if (data) {
  //     return data.map((t, i) => <option key={i}>{t.name}</option>)
  //   }
  // }

//  import React from 'react'



