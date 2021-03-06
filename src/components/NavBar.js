import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import logo from '../logo.svg'
import {ButtonContainer} from './Button'
import styled from 'styled-components'

class NavBar extends Component {
    render() {
        return (
            <NavWrapper className="navbar bg-primary navbar-expand-sm navbar-dark px-sm-5">
                {/* https://www.iconfinder.com/icons/1243689/call_phone_icon
                    Creative Commons (Attribution 3.0 Unported);
                    https://www.iconfinder.com/Makoto_msk */}
                <Link to="/">
                    <img src={logo} alt="home page" className="navbar-brand"></img>
                </Link>
                <ul className="navbar-nav align-item-center">
                    <li className="nav-item ml-5">
                        <Link to="/" className="nav-link">Products
                    </Link>
                    </li>
                </ul>
                <Link to="/cart" className="ml-auto">
                    <ButtonContainer>
                        <span className="mr-2">
                            <i className="fa fa-cart-plus"></i>
                        </span>
                    My Cart
                    </ButtonContainer>
                </Link>
            </NavWrapper>
        );
    }
}
export default NavBar;
const NavWrapper= styled.nav`
background: var(--mainBlue) !important;
.nav-link{
    color: var(--mainWhite) !important;
    font-size:1.3rem;
    text-transform:capitalize;
}
`