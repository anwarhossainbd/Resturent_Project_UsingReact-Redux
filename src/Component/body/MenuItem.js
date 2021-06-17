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
                    <CardImgOverlay onClick={props.OnDishSelect.bind(this,props.dish)} className="overlay"><b>{props.dish.name}</b></CardImgOverlay>
                </CardBody>
            </Card>
            
        </div>
    );
};

export default MenuItem;