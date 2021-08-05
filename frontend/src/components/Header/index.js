import React, { useState, useEffect } from 'react';
import { Link, useHistory } from 'react-router-dom';
import { BsFillBriefcaseFill } from 'react-icons/bs';
//import Logo from '../../assets/imagens/logo-empreender.png';

import './style.css';
import {
  Collapse,
  Navbar,
  NavbarToggler,
  NavbarBrand,
  Nav,
  UncontrolledDropdown,
  DropdownToggle,
  DropdownMenu,
  DropdownItem,
  NavbarText,
} from 'reactstrap';

function Header() {
  const [isOpen, setIsOpen] = useState(false);
  const history = useHistory();
  const [login, setLogin] = useState();
  const id = localStorage.getItem('id');
  useEffect(()=>{
    if(id){
      setLogin(true);
    }
  }, []);
  function handleLogout(){
    localStorage.clear();
    history.push('/1')
  }
  const toggle = () => setIsOpen(!isOpen);
  return (
    <div>
      <Navbar dark expand="md">
      <Link to="/" className="text-decoration-none">
        <NavbarBrand>
            <h1 className="pt-3 pb-0 ms-4">Pesquisa-OABPE</h1>
        </NavbarBrand>
      </Link>
        <NavbarToggler onClick={toggle} />
        <Collapse isOpen={isOpen} navbar>
          <Nav className="ms-auto" navbar>
            <Link to="/login" className="text-decoration-none">
              <NavbarText>
                <BsFillBriefcaseFill size={20} color="#FFF"/>
                {login ?
                  <span className="ms-2 me-5 pt-3 pb-0" onClick={handleLogout}>Sair</span>
                  : 
                  <span className="ms-2 me-5 pt-3 pb-0">Login</span>
                }
              </NavbarText>
            </Link>
          </Nav>
        </Collapse>
      </Navbar>
    </div>
  );
}

export default Header;