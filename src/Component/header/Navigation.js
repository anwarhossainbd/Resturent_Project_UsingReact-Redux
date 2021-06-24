import React, {Component, Fragment} from 'react';
import {Collapse, Navbar, NavbarToggler, NavbarBrand, Nav, NavItem, NavLink
} from 'reactstrap';
import {Link} from "react-router-dom";

class Navigation extends Component {
    constructor() {
        super();
        this.state={
            isOpen:false ,
        }
    }

    toggle=()=>{
        this.setState({
            isOpen:  !this.state.isOpen ,
        })
    }

    render() {
        return (
            <Fragment>


                <Navbar color="dark"  dark expand="md" >
                    <div className="container">
                        <NavbarToggler onClick={this.toggle} />
                        <NavbarBrand href="/">Anwar Restaurant</NavbarBrand>

                        <Collapse isOpen={this.state.isOpen} navbar>
                            <Nav className="mr-auto" navbar>
                            </Nav>
                            <Nav navbar>
                                <NavItem>
                                    <Link to="/" className="nav-link active">Home</Link>
                                </NavItem>

                                <NavItem>
                                    <Link to="/menu" className="nav-link ">Menu</Link>
                                </NavItem>

                                <NavItem>
                                    <Link to="/about" className="nav-link ">About</Link>
                                </NavItem>

                                <NavItem>
                                    <Link to="/contact" className="nav-link ">Contact</Link>
                                </NavItem>

                            </Nav>
                        </Collapse>

                    </div>
                </Navbar>

            </Fragment>
        );
    }
}

export default Navigation;







