import React from 'react';
import { Navbar, NavbarBrand} from 'reactstrap';

const Navigation = () => {

    return (
        <div >
            <Navbar color="dark" dark expand="md" >
               <div className="container">
                   <NavbarBrand href="/">React_Redux Resturent</NavbarBrand>

               </div>
            </Navbar>

        </div>
    );
};

export default Navigation;