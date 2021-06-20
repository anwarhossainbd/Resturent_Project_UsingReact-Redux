import React, {Component} from 'react';
import DISHES from "../../data/dishes";
import MenuItem from "./MenuItem";
import DishDetails from "./DishDetails";
import {  CardColumns ,Button, Modal, ModalBody, ModalFooter} from "reactstrap";

class Menu extends Component {
    constructor() {
        super();
        this.state={
            dishes:DISHES,
            selectDish:null,
            modal:false,
        }
    }


    toggle=()=>{
        this.setState({
            modal:!this.state.modal,
        })
    }


    ondishselect=item=>{
        this.setState({
            selectDish:item,
            modal:!this.state.modal,
        })
    }


    render() {
        const menu=this.state.dishes.map(item=>{
            return (
               <MenuItem dish={item} key={item.id} OnDishSelect={()=>this.ondishselect(item)} />
            )
        })



        let dishDetails = null
        if (this.state.selectDish != null){

            dishDetails =  <DishDetails dishes={this.state.selectDish} />

        }

        // <DishDetails dishes={this.state.selectDish} />



        return (
            <div className="container">
                <div className="row">

                    <CardColumns>
                        {menu}
                    </CardColumns>


                    <Modal isOpen={this.state.modal} onClick={this.toggle} >

                        <ModalBody>
                            {dishDetails}
                        </ModalBody>
                        <ModalFooter>
                            <Button color="primary" onClick={this.toggle}>Close</Button>
                        </ModalFooter>
                    </Modal>





                </div>



            </div>
        );
    }
}

export default Menu;

