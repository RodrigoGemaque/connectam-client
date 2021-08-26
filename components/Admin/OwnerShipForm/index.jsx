import { useState, useEffect } from 'react';
import { Form, Col } from 'react-bootstrap';
import { faUserPlus, faTimes } from '@fortawesome/free-solid-svg-icons';
import styles from '../styles.module.css';
import StyledButton from '../../shared/StyledButton';


import { clearOwnerShipToEdit } from '../../../store/modules/admin/owner_ship/reducer';

import { useSelector, useDispatch } from 'react-redux';
import { useRouter } from 'next/router';


const OwnerShipForm = ({ handleSubmit, action= "Adicionar"}) => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [id, setId] = useState(0);
  const [profile, setProfile] = useState('owner_ship');
  const [password, setPassword] = useState('');
  const [passwordConfirmation, setPasswordConfirmation] = useState('');

  const owner_ship = useSelector(state => state.owner_ship);
  const router = useRouter();
  const dispatch = useDispatch();

  useEffect(() => {
    if (owner_ship && router.pathname.includes('Edit')) {
      setName(owner_ship.name);
      setEmail(owner_ship.email);
      setId(owner_ship.id);
      setProfile(owner_ship.profile);
    }
  }, [owner_ship]);



  const handleFormSubmit = async (evt) => {
    evt.preventDefault();

    await handleSubmit({
      name,
      email,
      profile,
      id: owner_ship?.id,
      password,
      password_confirmation: passwordConfirmation
    })
  }

  return (
    <div className={styles.admin_panel}>
      <Form className={styles.new_form} onSubmit={handleFormSubmit}>
        <Form.Row>
          <Form.Group as={Col} sm={6} xs={12} className="p-2">
            <Form.Label>Nome</Form.Label>
            <Form.Control 
              type="text" 
              placeholder="Digite seu Nome" 
              className={styles.secundary_input} 
              value={name}
              onChange={(evt) => setName(evt.target.value) }
              required
            />
          </Form.Group>

          {/* <Form.Group as={Col} sm={6} xs={12} className="p-2">
            <Form.Label>ID</Form.Label>
            <Form.Control 
              type="number" 
              min="1"
              placeholder="Digite seu ID"
              className={styles.secundary_input} 
              value={id}
              onChange={ (evt) => setId(Number(evt.target.value))}
              required
            />
          </Form.Group> */}
        </Form.Row>

        <Form.Row>
          <Form.Group as={Col} sm={6} xs={12} className="p-2">
            <Form.Label>Email</Form.Label>
            <Form.Control 
              type="email" 
              placeholder="Digite seu email" 
              className={styles.secundary_input} 
              value={email}
              onChange={ (evt) => setEmail(evt.target.value)}
              required
            />
          </Form.Group>

          <Form.Group as={Col} sm={6} xs={12} className="p-2">
            <Form.Label>Perfil</Form.Label>
            <Form.Control 
              as="select" 
              className={styles.secundary_input}
              value={profile}
              onChange={ (evt) => setProfile(evt.target.value) }
              required
            >
              <option value="owner_ship">Dono de Embarcacao</option>
             
            </Form.Control>
          </Form.Group>
        </Form.Row>

        <Form.Row>
          <Form.Group as={Col} sm={6} xs={12} className="p-2">
            <Form.Label>Senha</Form.Label>
            <Form.Control 
              type="password" 
              placeholder="Digite sua senha" 
              className={styles.secundary_input} 
              value={password}
              onChange={ (evt) => setPassword(evt.target.value)}
              // campo requerido apenas para o cadastro de usuário
              required={router.pathname.includes('New')}
            />
          </Form.Group>

          <Form.Group as={Col} sm={6} xs={12} className="p-2">
            <Form.Label>Confirmação de senha</Form.Label>
            <Form.Control  
              type="password" 
              placeholder="Digite a confirmação da senha" 
              className={styles.secundary_input}
              value={passwordConfirmation}
              onChange={ (evt) => setPasswordConfirmation(evt.target.value) }
              // campo requerido apenas para o cadastro de usuário
              required={router.pathname.includes('New')}
            />
          </Form.Group>
        </Form.Row>

        <div className={styles.details_button}>
          <StyledButton 
            icon={faUserPlus} 
            action={action} 
            type_button="blue" 
            type="submit"
          />
          <StyledButton 
            icon={faTimes} 
            action={"Cancelar"} 
            type_button="red" 
            onClick={() => {
              dispatch(clearOwnerShipToEdit());
              router.back();
            }}
          />
        </div>
      </Form>
    </div>
  )
}

export default OwnerShipForm;