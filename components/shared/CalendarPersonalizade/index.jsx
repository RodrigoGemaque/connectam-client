
import { Row, Col, Form, Container } from 'react-bootstrap'
import { useRouter } from 'next/router'
import { useState, useEffect } from 'react'
import useSWR from 'swr'

import Link from 'next/link'
//redux
import { useDispatch, useSelector } from 'react-redux'
import { getArrival, getDeparture, getDate } from '../../../store/modules/admin/travels/travelsSlice'


import TravelsService from '../../../services/travels'
const defaultUrl = '/admin/v1/cities'


const CalendarPersonalized = () => {
  //router config
  const router = useRouter()
  const { data } = useSWR(defaultUrl, TravelsService.index)




  // const chegada = data.map(t => t.name)
  // console.log(  chegada)  




  //redux init
  const dispatch = useDispatch()
  const { departure, arrival, date } = useSelector(state => state.travel)
  const search = useSelector(state => state.search)



  //Params Search
  function Search(e) {
    e.preventDefault()
    router.push(`/travels?departure=${departure}&arrival=${arrival}&date=${date}`)
  }


  function getCity() {
    if (!data) {
      return null
    } else return data.map((t, i) => <option key={i}>{t.name}</option>)
  }





  return (
    
      <Col >
         <div className="booking-form">
          <Form
            value={search}
            onSubmit={(e) => Search(e)}
          // onChange = {(e) => setSearch(e.target.value)}

          >
            {/* {console.log(search)} */}
            <Row>
                
              <div className="col-sm-20">
                <div className="form-group">
                  <span className="form-label">Origem</span>
                  <Form.Control
                    type='text'
                    className='form-control' as="select" custom
                    value={departure}
                    onChange={(e) => dispatch(getDeparture(e.target.value))}
                  >
                    <option placeholder='Cidade'>Origem</option>
                    {getCity()}
                  </Form.Control>
                  <span className="select-arrow"></span>
                </div>
              </div>
            </Row>
            <Row>

              <div className="col-sm-20">
                <div className="form-group">
                  <span className="form-label">Destino</span>
                  <Form.Control
                    type='text'
                    className='form-control' as="select" custom
                    value={arrival}
                    onChange={(e) => dispatch(getArrival(e.target.value))}
                    required
                  >

                    <option >Destino</option>
                    {getCity()}
                  </Form.Control>
                  <span className="select-arrow"></span>
                </div>
              </div>
            </Row>
            <Row>
              <Col className="col-sm-20">
                <div className="form-group">
                  <span className="form-label">Escolha a Data</span>
                  <input className="form-control" type="date" value={date}
                    onChange={(e) => dispatch(getDate(e.target.value))} required></input>

                </div>
              </Col>
            </Row>

            <Row>
              <div className="col-sm-6">
                <div className="form-group">
                  <span className="form-label">Adults</span>
                  <select className="form-control">
                    <option>1</option>
                    <option>2</option>
                    <option>3</option>
                  </select>
                  <span className="select-arrow"></span>
                </div>
              </div>
              <div className="col-sm-6">
                <div className="form-group">
                  <span className="form-label">Children</span>
                  <select className="form-control">
                    <option>0</option>
                    <option>1</option>
                    <option>2</option>
                  </select>
                  <span className="select-arrow"></span>
                </div>
              </div>
            </Row>
            <div className="form-btn">
              <div className='text-center'>

                <button className="submit-btn">Alterar</button>
              </div>
            </div>
          </Form>


        </div> 
      </Col>
    

  )
}

export default CalendarPersonalized