import React from 'react';
import {
    Card, CardImg, CardText, CardBody,
    CardTitle, CardImgOverlay
} from 'reactstrap';

const MenuItem = (props) => {



    return (
        <div>
            <Card className="marginclass">
                <CardBody >
                    <CardImg top width="100%"  className="imgClass" src={props.dish.image} alt={props.dish.name} />
                    <CardImgOverlay onClick={props.OnDishSelect.bind(this,props.dish)} className="mybutton"> <button>Clik For Details</button></CardImgOverlay>
                </CardBody>
                <CardTitle className="overlay mt-2"><b>{props.dish.name}</b> </CardTitle>
            </Card>
            
        </div>
    );
};

export default MenuItem;