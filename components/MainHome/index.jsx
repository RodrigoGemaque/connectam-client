import { Row, Col, Form, } from 'react-bootstrap'
import { useRouter } from 'next/router'
import { useState, useEffect } from 'react'
import useSWR from 'swr'

import Link from 'next/link'
//redux
import { useDispatch, useSelector } from 'react-redux'
import { getArrival, getDeparture, getDate } from '../../store/modules/admin/travels/travelsSlice'


import TravelsService from '../../services/travels'
const defaultUrl = '/admin/v1/cities'
const MainHome = () => {
  //router config
  const router = useRouter()
  const { data } = useSWR(defaultUrl, TravelsService.index)


  // console.log(data)

  // const chegada = data.map(t => t.name)
  // console.log(  chegada)  




  //redux init
  const dispatch = useDispatch()
  const { departure, arrival, date } = useSelector(state => state.travel)




  //Params Search
  function Search(e) {
    e.preventDefault()
    router.replace(`/travels?departure=${departure}&arrival=${arrival}&date=${date}`)
  }


  function getCity() {
    if (data) {
      return data.map((t, i) => <option key={i}>{t.name}</option>)
    }
  }






  return (

    <div id='booking' className='section'>
      <div className="section-center">
        <div className="container">
          <Row>
            <div className="col-md-7 col-md-push-5">
              <div className="booking-cta">
                <h1>Faca Sua Reserva</h1>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Animi facere, soluta magnam consectetur molestias itaque
                  ad sint fugit .
                </p>
              </div>
            </div>

            <div className="col-md-4 col-md-pull-7">
              <div className="booking-form">
                <Form
                  onSubmit={(e) => Search(e)}
                // onChange = {(e) => setSearch(e.target.value)}

                >

                  <Row>
                    <div className="col-sm-6">
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


                    <div className="col-sm-6">
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
                    <Col className="col-sm-6">
                      <div className="form-group">
                        <span className="form-label">Escolha a Data</span>
                        <input className="form-control" type="date" value={date}
                          onChange={(e) => dispatch(getDate(e.target.value))} required></input>

                      </div>
                    </Col>
                  </Row>

                  <Row>
                    <div className="col-sm-4">
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
                    <div className="col-sm-4">
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
                    <button className="submit-btn"

                    >Buscar  </button>
                  </div>
                </Form>


              </div>
            </div>
          </Row>
        </div>
      </div>
    </div>
  )
}

export default MainHome