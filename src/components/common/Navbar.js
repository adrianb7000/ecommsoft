import React, { Component } from 'react';
import {Link} from 'react-router-dom';
import logo from '../../icons8-ecommerce-64.png';
import {ButtonContainer} from '../style/Button';
import styled from 'styled-components';

class Navbar extends Component {
  render() {
    return (
      <NavWrapper className="navbar navbar-expand-sm navbar-dark px-sm-5">
        <Link to="/">
          <img src={logo} alt="store" className="navbar-brand"/>
        </Link>
        <ul className="navbar-nav align-items-center">
          <li className="nav-item ml-5">
           <Link to='/' className="nav-link">Productos</Link>
          </li>
        </ul>
        <Link to="/cart" className="ml-auto">
          <ButtonContainer>
            <span className="mr-2">
              <i className="fas fa-cart-plus"/>
            </span>
            Mi carrito
          </ButtonContainer>
        </Link>
      </NavWrapper> 
    );
  }
}

const NavWrapper = styled.nav`
  background: var(--mainBlue);
  .nav-link {
    color: var(--mainWhite) !important;
    font-size: 1.3rem;
    text-transform: capitalize;
  }
`;

export default Navbar;