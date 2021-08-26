import React from 'react';
import { Row, Col } from 'react-bootstrap';
import styles from './styles.module.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSignal, faUser, faGamepad, faCheckSquare, faLaptop, faTicketAlt, faDollarSign, faUserCircle, faSignOutAlt, faShip, faUserTie, faPeopleArrows, faRoute, faCity, faMapMarkedAlt } from '@fortawesome/free-solid-svg-icons';
import Link from 'next/link';

import { useRouter } from 'next/router';

import { useSelector } from 'react-redux';
// import SignOutService from '../../../util/SignOutService';

const AdminHeader = () => {
  const router = useRouter();

  const { name } = useSelector(state => state.auth.loggedUser);

  return (
    <Row className={styles.background}>
      <Col xs={12} className={styles.menu}>
        <Link href="/Admin">
          <a>
            <FontAwesomeIcon 
              icon={faSignal} 
              color="var(--color-gray-light)" 
              className={`me-3 ${router.pathname === '/Admin' ? styles.active : ''}`} 
            />
          </a>
        </Link>
        <Link href="/Admin/Users/List">
          <a>
            <FontAwesomeIcon 
              icon={faUser} 
              color="var(--color-gray-light)" 
              className={`me-3 ${router.pathname === '/Admin/Users/List' ? styles.active : ''}`}
            />
          </a>
        </Link>

        <Link href="/Admin/Owners/List">
          <a>
            <FontAwesomeIcon 
              icon={faUserTie} 
              color="var(--color-gray-light)" 
              className={`me-3 ${router.pathname === '/Admin/Owners/List' ? styles.active : ''}`}
            />
          </a>
        </Link>

        

        <Link href="/Admin/Ships/List">
          <a>
            <FontAwesomeIcon 
              icon={faShip} 
              color="var(--color-gray-light)" 
              className={`me-3 ${router.pathname === '/Admin/Ships/List' ? styles.active : ''}`} 
            />
          </a>
        </Link>
        <Link href="/Admin/Routes/List">
          <a>
            <FontAwesomeIcon 
              icon={faRoute}
              color="var(--color-gray-light)" 
              className={`me-3 ${router.pathname === '/Admin/Routes/List' ? styles.active : ''}`} 
            />
          </a>
        </Link>
        <Link href="/Admin/Cities/List">
          <a>
            <FontAwesomeIcon 
              icon={faCity} 
              color="var(--color-gray-light)" 
              className={`me-3 ${router.pathname === '/Admin/Cities/List' ? styles.active : ''}`} 
            />
          </a>
        </Link>

        <Link href="/Admin/Travels/List">
          <a>
            <FontAwesomeIcon 
              icon={faMapMarkedAlt} 
              color="var(--color-gray-light)" 
              className={`me-3 ${router.pathname === '/Admin/Travels/List' ? styles.active : ''}`} 
            />
          </a>
        </Link>
        {/* <Link href="/Admin/Coupons/List">
          <a>
            <FontAwesomeIcon 
              icon={faTicketAlt} 
              color="var(--color-gray-light)" 
              className={`me-3 ${router.pathname === '/Admin/Coupons/List' ? styles.active : ''}`} 
            />
          </a>
        </Link>

        <Link href="#">
          <a>
            <FontAwesomeIcon 
              icon={faDollarSign} 
              color="var(--color-gray-light)" 
              className="me-3" />
          </a>
        </Link> */}

        <Link href="/Auth/Login">
          <a
            // onClick={SignOutService.execute}
            // onTouchEnd={() => SignOutService.execute()}
          >
            <FontAwesomeIcon 
              icon={faSignOutAlt} 
              color="var(--color-gray-light)" 
              className="me-3" />
          </a>
        </Link>

        <Link href="/Profile">
          <a className={styles.profile}>
            <span className={styles.name}>{name}</span>
            <FontAwesomeIcon icon={faUserCircle} color="var(--color-gray-light)" />
          </a>
        </Link>
      </Col>
    </Row>
  )
}

export default AdminHeader;