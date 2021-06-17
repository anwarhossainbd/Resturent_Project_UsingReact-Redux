import React, {Component} from 'react';
import DISHES from "../../data/dishes";
import MenuItem from "./MenuItem";
import DishDetails from "./DishDetails";
import {Card, CardBody, CardImg, CardTitle} from "reactstrap";

class Menu extends Component {
    constructor() {
        super();
        this.state={
            dishes:DISHES,
            selectDish:null
        }
    }

    ondishselect=item=>{
        this.setState({
            selectDish:item
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
                    <div className="col-6">
                        {menu}
                    </div>

                    <div className="col-5">
                        {dishDetails}
                    </div>
                </div>



            </div>
        );
    }
}

export default Menu;