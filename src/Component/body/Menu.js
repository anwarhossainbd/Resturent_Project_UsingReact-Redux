import React, {Component} from 'react';
import DISHES from "../../data/dishes";
import MenuItem from "./MenuItem";
import COMMENTS from "../../data/comments";
import DishDetails from "./DishDetails";
import {  CardColumns ,Button, Modal, ModalBody, ModalFooter} from "reactstrap";
import {connect} from "react-redux"

const mapStateToProps=state=>{
    return{
        dishes: state.dishes,
        comments: state.comments
    }
}


const mapDispatchToProps =dispatch =>{
    return{
        addComment:(dishId,rating,author,comment)=>dispatch({
            type:"Add_Comment",
            payload:{
                dishId:dishId,
                author: author,
                rating: rating,
                comment: comment
            }
        })
    }
}

class Menu extends Component {
    constructor() {
        super();
        this.state={
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
        document.title="Menu"
        const menu=this.props.dishes.map(item=>{
            return (
               <MenuItem dish={item} key={item.id} OnDishSelect={()=>this.ondishselect(item)} />
            )
        })



        let dishDetails = null
        if (this.state.selectDish != null){

            const comment=this.props.comments.filter(comments=>{
                return comments.dishId === this.state.selectDish.id
            })

            dishDetails =  <DishDetails dishes={this.state.selectDish} comments={comment} addComment={this.addComment} />

        }

        // <DishDetails dishes={this.state.selectDish} />



        return (
            <div className="container">
                <div className="row">

                    <CardColumns>
                        {menu}
                    </CardColumns>


                    <Modal isOpen={this.state.modal} size="md"  >

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

export default connect(mapStateToProps,mapDispatchToProps)(Menu);

