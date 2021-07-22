import { Row, Col, FormControl, Button, InputGroup, Form, Alert } from 'react-bootstrap'
// import ContainerComponent from '../../ContainerComponent'
// import Link from 'next/link'
import { useState } from 'react'
import createTicket from '../../../../services/createTicket'

import { useRouter } from 'next/router'


// redux
import { useSelector, useDispatch } from 'react-redux'
import { clearCartTravels } from '../../../../store/modules/storefront/cart/reducer'
import { getName, getCpf, getPhone, clearForm } from '../../../../store/modules/admin/form_passager/reducer'

function TicketForm() {
  const cartTravels = useSelector(state => state.cartTravels)
  const { name, cpf, phone_number } = useSelector(state => state.form_passager)
  const [error, setError] = useState(null)
  const router = useRouter()


  const number = cartTravels.length

  const [count, setCount] = useState(number)

  console.log(count)



  const [ticket, setTicket] = useState({
    name: "",
    phone_number: "",
    cpf: ""
  })

  const updateTicketState = (e) => {
    setTicket({ ...ticket, [e.target.name]: e.target.value })

  }

  const submitOrder = async (e) => {
    e.preventDefault()
    try {
      await createTicket(ticket)
      // router.push('/ticket/success')
      dispatch(clearForm())
    } catch (error) {
      setError(true)
    }
  }

  const dispatch = useDispatch()





  return (

    <Form onSubmit={e => submitOrder(e)}>
      <h4 className='fw-bold mb-5 text-center'>Dados do Passageiro</h4>
      <h4 className='fw-bold mb-5 text-center'>Preencha e confirme {count} passageiro(a)</h4>
      <Form.Group>
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
      </Form.Group>

      <Form.Group className='mt-3'>
        <Form.Label>Contato</Form.Label>
        <Form.Control
          required
          type="text"
          placeholder="(00) 00000-0000"
          onChange={updateTicketState}
          value={ticket.phone_number}
          name="phone_number"
        />
      </Form.Group>



      {/* <div className="mt-5"> */}
      {/* <p className='fw-bolder'>Entregar em:</p> */}
      {/* <p><small>{address.street}, {address.number} {address.neighborhood}, {address.city}</small></p> */}
      {/* </div> */}

      {count > 0 &&
        <div className="text-center">
          <Button value={count} onClick={() => setCount(count - 1)} type="submit" size="lg" className="mt-4 text-white">
            Confirmar Passageiro
          </Button>
        </div>
      }

      {count <= 0 &&
        <div className="text-center">
          <Button variant='dark' size="lg" className="mt-4 text-white">
            Concluido Finalizar Pedido
          </Button>
        </div>
      }


      {error && <Alert variant='custom-red' className="mt-4"> Erro no pedido! </Alert>}


    </Form>

  )
}

export default TicketForm




































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



