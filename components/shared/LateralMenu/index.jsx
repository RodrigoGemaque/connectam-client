import styles from './styles.module.css';
import Logo from '../Logo';
import Link from 'next/link';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSignal, faUser, faGamepad, faCheckSquare, faLaptop, faTicketAlt, faDollarSign, faSignOutAlt, faShip, faUserTie, faRoute, faMapMarkedAlt, faCity, faPeopleArrows } from '@fortawesome/free-solid-svg-icons';

import { useRouter } from 'next/router';

// import SignOutService from '../../../util/SignOutService';

const LateralMenu = () => {
  const router = useRouter();

  return (
    <div className={styles.background}>
      <Logo />

      <div className={styles.list}>
        <Link href="/Admin">
          <a className={`${router.pathname === '/Admin' ? styles.active : ''}`}>
            <FontAwesomeIcon 
              icon={faSignal} 
              color="var(--color-gray-light)" 
              className="me-3" 
            />
            Painel Inicial
            <hr />
          </a>
        </Link>

        <Link href="/Admin/Users/List">
          <a className={`${router.pathname === '/Admin/Users/List' ? styles.active : ''}`}>
            <FontAwesomeIcon icon={faUser} color="var(--color-gray-light)" className="me-3" />
            Usuários
            <hr />
          </a>
        </Link>

        <Link href="/Admin/Owners/List">
          <a className={`${router.pathname === '/Admin/Owners/List' ? styles.active : ''}`}>
            <FontAwesomeIcon icon={faUserTie} color="var(--color-gray-light)" className="me-3" />
            Donos de Embarcação
            <hr />
          </a>
        </Link>

       

        <Link href="/Admin/Ships/List">
          <a className={`${router.pathname === '/Admin/Ships/List' ? styles.active : ''}`}>
            <FontAwesomeIcon icon={faShip} color="var(--color-gray-light)" className="me-3" />
            Navios
            <hr />
          </a>
        </Link>

        <Link href="/Admin/Routes/List">
          <a className={`${router.pathname === '/Admin/Routes/List' ? styles.active : ''}`}>
            <FontAwesomeIcon icon={faRoute} color="var(--color-gray-light)" className="me-3" />
            Rotas
            <hr />
          </a>
        </Link>
        <Link href="/Admin/Cities/List">
          <a className={`${router.pathname === '/Admin/Cities/List' ? styles.active : ''}`}>
            <FontAwesomeIcon icon={faCity} color="var(--color-gray-light)" className="me-3" />
            Cidades
            <hr />
          </a>
        </Link>

        <Link href="/Admin/Travels/List">
          <a className={`${router.pathname === '/Admin/Travels/List' ? styles.active : ''}`}>
            <FontAwesomeIcon icon={faMapMarkedAlt} color="var(--color-gray-light)" className="me-3" />
              Viagens
              <hr />
          </a>
        </Link>

      

{/* 
        <Link href="/Admin/Coupons/List">
          <a className={`${router.pathname === '/Admin/Coupons/List' ? styles.active : ''}`}>
            <FontAwesomeIcon icon={faTicketAlt} color="var(--color-gray-light)" className="me-3" />
            Cupons
            <hr />
          </a>
        </Link>

        <Link href="/Admin/#">
          <a>
            <FontAwesomeIcon icon={faDollarSign} color="var(--color-gray-light)" className="me-3" />
            Financeiro
            <hr />
          </a>
        </Link> */}

        <Link href="/Auth/Login">
          <a >
            <FontAwesomeIcon icon={faSignOutAlt} color="var(--color-gray-light)" className="me-3" />
            Sair
            <hr />
          </a>
        </Link>
      </div>
    </div>
  )
}

export default LateralMenu;