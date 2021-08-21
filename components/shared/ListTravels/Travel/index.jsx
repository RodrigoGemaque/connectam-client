//css
import styles from './styles.module.css';
import { Row, Col, Card, Image } from 'react-bootstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faShip, faAnchor, faClock, faShoppingCart, faBed, faCalendar, faMoneyBill } from '@fortawesome/free-solid-svg-icons';

//end css
import toCurrency from '../../../../services/toCurrency';

// import Link from 'next/link'
import Router from 'next/router'

//modal Code
import {useState} from 'react'
import AddProductModal from '../../../StoreFront/AddProduct';


const Travel = (props) => {
  //Modal
  // const [travelSelect ,setTraveSelected] = useState(null);
  //Modal

  const router = Router;

  function travelIdRedirect(props){
    console.log(props)
    router.push(`/travels/${props.id}`)
    // router.push(`/travels/${props.id}`)
  }

  return (




    <Col lg={11} sm={12}  className="mb-3">
      {/* <Link href={`/travels/${props.id}`}> */}

        <Card body className='clickable_effect' onClick = {() => travelIdRedirect(props)}>
          <Row>
            <Col lg={2} md={4} xs={12} className='text-center ' >
              <Image
                className='border  '
                src={props.image_url}
                alt={props.ship}
                width={200}
                height={200}
                layout="responsive"
              />
            </Col>
            {/* barco e data */}
            <Col md={6, { offset: 1 }} xs={12} className='mt-4'>
              <Row>
                <p className='fw-bold'>

                  <FontAwesomeIcon
                    icon={faShip}
                    color="var(--color-gray-light)"
                  />
                  &nbsp;Embarcação : {props.ship}
                </p>
              </Row>

              <Row className='mt-4'>
                <h6 className='fw-bold'>

                  <FontAwesomeIcon
                    icon={faAnchor}
                    color="var(--color-gray-light)"
                  />
                  &nbsp;Viagem : {props.route_info.departure} / {props.route_info.arrival}
                </h6>
              </Row>
              <Row className='mt-5 '>
                <h6 className='fw-bold '>

                  <FontAwesomeIcon
                    icon={faCalendar}
                    color="var(--color-gray-light)"
                  />
                  &nbsp;<span>Data : {props.date}</span>
                </h6>
              </Row>
              {/* <Row className='mt-4 '>
                <h6 className='fw-bold text-align-rigth'>

                  <FontAwesomeIcon
                    icon={faClock}
                    color="var(--color-gray-light)"
                  />
                  &nbsp;Horario:
                  {/* {props.time} */}
                {/* </h6> */}
              {/* </Row> */} 

            </Col>
            <Col md={3} className='mt-4'>
              {/* <Row>
                <h6 className='fw-bold text-align-rigth'>

                  &nbsp;Acomodacao: <small> Rede</small>
                </h6>

              </Row> */}
              <Row className=' mt-5'>
                <Col>
                  <h5 className='fw-bold  mb-0'>Valor</h5>

                </Col>

                <Col >
                  <h5>
                    <div className={styles.cart_container}>

                      <FontAwesomeIcon
                        icon={faMoneyBill}
                        color="var(--color-gray-light)"
                      // color="var(--color-gray-light)"

                      /> &nbsp;
                    </div>
                  </h5>
                </Col>

              </Row>
              <Row className='mt-0'>
                <h2 className = "className='fw-bold " >
                  <span>{toCurrency(props.price)}</span>
                </h2>
              </Row>

            </Col>

          </Row>
        </Card>
      {/* </Link> */}

      {/* <AddProductModal
        show = {travelSelect != null}
        onHide = {() => setTraveSelected(null)}
        travel = {props}
      /> */}
    </Col>









  )
}

export default Travel


