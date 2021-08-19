import { InputGroup, FormControl, Button, Row, Col  } from "react-bootstrap"

//Libs
import { useState, useEffect, useRef } from 'react';
import Link from 'next/link';
import { useRouter } from 'next/router';
import { toast } from 'react-toastify';

//service
import  UsersService from '../../../services/user';

//redux

import { useDispatch, useSelector } from 'react-redux';
import { setLoggedUser } from '../../../store/modules/auth/reducer';


const LoginForm = ({ titlePhrase, buttonPhrase }) => {
  
  //user local state
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const passwordRef = useRef(null);

  //config
  const router = useRouter();
  const dispatch = useDispatch();

  //redux get element
  const loggedUser = useSelector((state) => state.auth.loggedUser );

  //useEffect para monitorar esse user

  useEffect(()=>{
    if(loggedUser){
      setEmail(loggedUser.email);
      if(passwordRef && passwordRef.current){
        passwordRef.current.focus();
      }
    }
  }, [loggedUser])
  

  //handlesubmit para submeter o form de login
  const handleSubmit = async (evt)=> {
    evt.preventDefault();

    try{
      const response = await UsersService.signIn({email, password });
      const { id, email: userEmail, name, profile} = response.data.data;
      const user = {
        id,
        name,
        email: userEmail,
        profile: profile
      };
      dispatch(setLoggedUser(user));
      toast.info('Login realizado com sucesso');
      
      if(user.profile === "client"){
        router.push('/travels')
      }else if(user.profile === "intermediary"){
        router.push('/order/new')
      }else if(user.profile === 'ship_owner'){
        router.push('/order/success')

      }


      // router.push(user.profile === 'intermedi' ? '/travels' : '/')
      // router.push(user.profile === 'admin' ? '/travels' : '/')
    }catch(err){
      toast.error('E-mail ou senha invalidos');
    }
  }


  return (
    <>
   <form onSubmit={handleSubmit}>
      <Row>
        <Col lg={{ span: 12, offset: 0 }} md={{ span: 8, offset: 2 }}>
            <h4 className = 'text-center'>{titlePhrase}</h4>


            <InputGroup className="mt-3">
              <FormControl
                placeholder="Meu e-mail"
                value={email}
                type="email"
                onChange={
                  (evt) =>setEmail(evt.target.value)
                }
                required
              />
            </InputGroup>

            <InputGroup className="mt-3">
              <FormControl
                placeholder="Senha"
                value={password}
                type="password"
                onChange={
                  (evt) => setPassword(evt.target.value)
                }
                required
                ref={passwordRef}
              />
            </InputGroup>

            <Button type="submit" className="btn btn-info mt-3 w-100">Login</Button>

            <br />

            <Link href="/Auth/PasswordRecovery">Esqueci minha senha</Link> <br />
        </Col>
      </Row>
    </form>
    </>
  )
}

export default LoginForm