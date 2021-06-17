import React from 'react';
import {
    Card, CardImg, CardText, CardBody,
    CardTitle, CardImgOverlay
} from 'reactstrap';
import LoadComments from "./LoadComments";

const DishDetails = (props) => {
    return (
            <Card className="marginclass">
                <CardBody className="styleClass">
                    <CardImg top width="100%"   src={props.dishes.image} alt={props.dishes.name} />
                    <CardTitle className="mt-3">{props.dishes.name} </CardTitle>
                    <CardText>
                        <p>{props.dishes.description}</p>
                        <p> Price: {props.dishes.price}</p>
                    </CardText>

                    <LoadComments comments={props.dishes.comments} />
                </CardBody>
            </Card>

    );
};

export default DishDetails;