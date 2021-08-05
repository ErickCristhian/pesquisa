import React, { useState } from 'react';
import {useHistory, Link} from 'react-router-dom';

import {
    Navbar, 
    NavbarBrand, 
    Form, 
    FormGroup,  
    Input, 
    Button,
    Col,
    Container} from 'reactstrap';
import Header from '../../components/Header';
import api from '../../services/api';
import './style.css';

function Login() {
    const [email, setLogin] = useState('');
    const [Senha, setPassword] = useState('');
    const history = useHistory();
    
    async function handleSubmit(e){
        e.preventDefault();
        try {
            const response = await api.post('/sessions', {email, Senha})         
            if(response.data){
                localStorage.setItem('id', response.data.id)
                history.push('/');
            }
        } catch (error) {
            alert('Falha no Login, tente Novamente.')
        }
    }
  return (
      <>
        <Header/>
        <Container fluid className="container-login">
            <Form fluid className="form-login" onSubmit={handleSubmit}>
            <h1 className="text-sm-center text-white login">Acessar</h1>
                <FormGroup row>
                    <Col>
                        <Input type="text" 
                        name="nome" 
                        id="nome" 
                        placeholder="E-mail"
                        className="input-login"
                        required
                        onChange={e => setLogin(e.target.value)}/>
                    </Col>
                </FormGroup>
                <FormGroup row>
                    <Col md="12" sm="12">
                        <Input type="password" 
                        name="senha" 
                        id="senha" 
                        placeholder="Senha"
                        className="input-login"
                        required
                        onChange={e => setPassword(e.target.value)}/>
                    </Col>
                </FormGroup>
                <Button type="submit" className="btn-login">
                    Login
                </Button>
            </Form>
            <Link to='/'>Voltar para página inicial</Link>
        </Container>
      </>
  );
}

export default Login;