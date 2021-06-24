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
                    <CardTitle className="mt-3"><h3>{props.dishes.name}</h3> </CardTitle>
                    <CardText>
                        {props.dishes.description}
                    </CardText>

                    <CardText>
                        Price: {props.dishes.price}
                    </CardText>

                    <LoadComments comments={props.comments} />
                </CardBody>
            </Card>

    );
};

export default DishDetails;