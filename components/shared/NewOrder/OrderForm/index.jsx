import { Row, Col, FormControl, Button, InputGroup, Form, Alert } from 'react-bootstrap'
import ContainerComponent from '../../ContainerComponent'
import Link from 'next/link'
import { useState } from 'react'
import createOrder from '../../../../services/createOrder'


import { useRouter } from 'next/router'


// redux
import { useSelector, useDispatch } from 'react-redux'
import { clearCartTravels } from '../../../../store/modules/storefront/cart/reducer'

import {clearList} from '../../../../store/modules/admin/form_passager/reducer'


function OrderForm() {
  const cartTravels = useSelector(state => state.cartTravels)
  const passagers = useSelector(state => state.form_passager)
  const user_id = useSelector(state => state.auth.loggedUser.id)
  const [error, setError] = useState(null)
  const router = useRouter()
  const dispatch = useDispatch()


  // if (cartTravels.length == 0){
  //   router.push('/travels')
  // }
  
  let items_passagers =  passagers.map(p => (
    
    {
    'name': p.name,
    'cpf': p.cpf,
    'email': p.email,
    'travel_id': p.travel_id,
    'ship_id': p.ship_id
    
  }))

  const id_travel = cartTravels.filter((travel) =>{
    let id= travel.id
  })

  // console.table(items_passagers)
  // console.log(id_travel)
  // console.log(cartTravels)

  // const passagers1 = items_passagers.filter((passager) =>{
  //   if(passager.travel_id === passager.travel_id){
  //     console.group(passager.travel_id)
  //   }else{
  //     console.log('false')
  //   }
  // })
  let table = []
  let table2 = []

  const passager_ = items_passagers.sort((a,b) => a.travel_id > b.travel_id ? table.push(a.travel_id) : table.push(a.travel_id))
  // const passagers_ = items_passagers.sort((a,b) => a.travel_id > b.travel_id ? pasdd2.push(a.travel_id) : -1)
  // console.table(passager_)
  // console.table(pasdd2)
  // console.log(table)


  
  
  const [order, setOrder] = useState({
    'user_id': user_id,    
    line_items_attributes: cartTravels.map(t => ({ 
      'travel_id': t.id, 'quantity': t.quantity, tickets_attributes: items_passagers
    })),

  })

  console.log(order)

  const submitOrder = async (e) => {
    e.preventDefault()
  
    try {
      await createOrder(order)      
      router.push('/order/success')

      dispatch(clearCartTravels() )
      dispatch(clearList())
    } catch (error) {
      setError(true)
      console.log(error)
    }
  }




  return (

    <Form onSubmit={e => submitOrder(e)}>
      <h4 className='fw-bold mb-5'>Finalizar pedido</h4>
   
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



