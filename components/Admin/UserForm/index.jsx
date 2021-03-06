import { useState, useEffect } from 'react';
import { Form, Col } from 'react-bootstrap';
import { faUserPlus, faTimes } from '@fortawesome/free-solid-svg-icons';
import styles from '../styles.module.css';
import StyledButton from '../../shared/StyledButton';


import { clearUserToEdit } from '../../../store/modules/admin/user/reducer';

import { useSelector, useDispatch } from 'react-redux';
import { useRouter } from 'next/router';


const UserForm = ({ handleSubmit, action= "Adicionar"}) => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [id, setId] = useState(0);
  const [profile, setProfile] = useState('client');
  const [password, setPassword] = useState('');
  const [passwordConfirmation, setPasswordConfirmation] = useState('');

  const user = useSelector(state => state.user);
  const router = useRouter();
  const dispatch = useDispatch();

  useEffect(() => {
    if (user && router.pathname.includes('Edit')) {
      setName(user.name);
      setEmail(user.email);
      setId(user.id);
      setProfile(user.profile);
    }
  }, [user]);



  const handleFormSubmit = async (evt) => {
    evt.preventDefault();

    await handleSubmit({
      name,
      email,
      profile,
      id: user?.id,
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
              <option value="admin">Administrador</option>
              <option value="client">Cliente</option>
              <option value="intermediary">Intermediario</option>
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
              // campo requerido apenas para o cadastro de usu??rio
              required={router.pathname.includes('New')}
            />
          </Form.Group>

          <Form.Group as={Col} sm={6} xs={12} className="p-2">
            <Form.Label>Confirma????o de senha</Form.Label>
            <Form.Control  
              type="password" 
              placeholder="Digite a confirma????o da senha" 
              className={styles.secundary_input}
              value={passwordConfirmation}
              onChange={ (evt) => setPasswordConfirmation(evt.target.value) }
              // campo requerido apenas para o cadastro de usu??rio
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
              dispatch(clearUserToEdit());
              router.back();
            }}
          />
        </div>
      </Form>
    </div>
  )
}

export default UserForm;