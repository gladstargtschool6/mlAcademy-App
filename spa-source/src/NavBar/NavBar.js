import React from 'react';
import { Link, withRouter } from 'react-router-dom';
import auth0Client from '../Auth';
import logo from "../img/logo.svg";

//import { Nav, Navbar, NavItem, NavDropdown, MenuItem } from 'react-bootstrap';
import ClassSelector from '../ClassSelector/ClassSelector';

function NavBar(props) {
    const signOut = () => {
        auth0Client.signOut();
        props.history.replace('/');
    };

    return (
        <nav class="navbar navbar-expand-md navbar-light bg-light">
            <Link to="/" class="navbar-brand"><img src={logo} alt="logo" height="24px" /></Link>
            <div class="navbar-collapse collapse" id="navbarColor01">
                <ul class="navbar-nav mr-auto">
                    <li class="nav-item">
                        <Link to="/" class="nav-link">Home</Link>
                    </li>
                    <li class="nav-item">
                        <Link to="/editor" class="nav-link">Labs</Link>
                    </li>
                </ul>
            </div>

        </nav >
    );
}

/*
        <nav className="fixed-top navbar navbar-expand-lg navbar-dark bg-primary">
            <Link className="navbar-brand" to="/">
                mlAcademy
            </Link>
            <div class="container">
                <div id="navbarColor01">

                    <ul class="navbar-nav mr-auto">
                        <li class="nav-item">
                            <Link to="/" class="nav-link">Home</Link>
                        </li>
                        <li class="nav-item">
                            <Link to="/requirements" class="nav-link">Requirements</Link>
                        </li>
                        <li class="nav-item">
                            <Link to="/research" class="nav-link">Research</Link>
                        </li>
                        <li class="nav-item">
                            <Link to="/hci" class="nav-link">HCI</Link>
                        </li>
                        <li class="nav-item">
                            <Link to="/prototype" class="nav-link">Prototype</Link>
                        </li>
                    </ul>
                </div>
                <div>
                    <ul class="nav navbar-nav navbar-right">
                        {
                            !auth0Client.isAuthenticated() &&
                            <button className="btn btn-dark navbar-right" onClick={auth0Client.signIn}>Sign In</button>
                        }
                        {
                            auth0Client.isAuthenticated() &&
                            <div>
                                <label className="mr-2 text-white">{auth0Client.getProfile().name}</label>
                                <button className="btn btn-dark" onClick={() => { signOut() }}>Sign Out</button>
                            </div>
                        }
                    </ul>
                </div>
            </div>
                    </nav>*/
export default withRouter(NavBar);