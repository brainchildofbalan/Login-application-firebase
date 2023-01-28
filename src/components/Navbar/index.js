import React from 'react';
import { Nav } from 'react-bootstrap';
import { Link, useLocation } from 'react-router-dom';
import style from './navbar.module.css'
const Navbar = () => {
    const location =  useLocation();

    return (
        <div className={style.root}>
            <div className={`container`}>
                <Nav activeKey="/" as="ul" className='d-flex justify-content-end'>
                    <Nav.Item as="li">
                        <Nav.Link to={'/'} active={location.pathname === '/'} as={Link}>Home</Nav.Link>
                    </Nav.Item>
                    <Nav.Item as="li">
                        <Nav.Link to={'/login'} active={location.pathname === '/login'} as={Link}>Login</Nav.Link>
                    </Nav.Item>
                </Nav>
            </div>

            
            
        </div>
    );
}

export default Navbar;
