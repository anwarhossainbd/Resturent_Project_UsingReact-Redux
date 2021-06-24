import React, {Component, Fragment} from 'react';
import {Button, Form, FormGroup, Label, Input, FormText, Col} from 'reactstrap';

class Contact extends Component {
    constructor(props) {
        super(props);
        this.state={
            firstname:"",
            lastname:"",
            telnum:"",
            email:"",
            agree:"",
            contactType:"",
            message:"",
        }

            this.handleInputChange =this.handleInputChange.bind(this),
            this.handleSubmit =this.handleSubmit.bind(this)
    }

    handleSubmit=(event)=>{
        console.log(this.state),
            event.preventDefault() ;
        this.setState({
            firstname:"",
            lastname:"",
            telnum:"",
            email:"",
            agree:"",
            contactType:"",
            message:"",
        })
    }

    handleInputChange=(event)=>{
        const name=event.target.name ;
        const value =event.target.type==="checkbox"?event.target.checked:event.target.value
        this.setState({
            [name]:value
        })
    }



    render() {
        document.title="Contact"
        return (
            <Fragment>
                <div className="container mt-1 ">
                    <div className="row row-content">
                        <div className="col-12">
                            <h3>Send Your FeedBack</h3>
                        </div>

                        <div className=" col-sm-12 col-md-7 text-center centerClass">
                            <Form onSubmit={this.handleSubmit}>
                                <FormGroup row>
                                    <Label htmlFor="firstname" md={3} sm={12}>First Name</Label>
                                    <Col md={9} sm={12}>
                                        <Input
                                            type="text"
                                            name="firstname"
                                            placeholder="First Name"
                                            value={this.state.firstname}
                                            onChange={this.handleInputChange}
                                        />
                                    </Col>
                                </FormGroup>



                                <FormGroup row>
                                    <Label htmlFor="lastname" sm={12} md={3}>Last Name</Label>
                                    <Col md={9} sm={6}>
                                        <Input
                                            type="text"
                                            name="lastname"
                                            value={this.state.lastname}
                                            placeholder="Last Name"
                                            onChange={this.handleInputChange}
                                        />
                                    </Col>
                                </FormGroup>



                                <FormGroup row>
                                    <Label htmlFor="telnum" md={3}>Contact Tel.</Label>
                                    <Col md={9}>
                                        <Input
                                            type="tel"
                                            name="telnum"
                                            value={this.state.telnum}
                                            placeholder="Tel. Number"
                                            onChange={this.handleInputChange}
                                        />
                                    </Col>
                                </FormGroup>




                                <FormGroup row>
                                    <Label htmlFor="email" md={3}>Email</Label>
                                    <Col md={9}>
                                        <Input
                                            type="email"
                                            name="email"
                                            value={this.state.email}
                                            placeholder="Email"
                                            onChange={this.handleInputChange}
                                        />
                                    </Col>
                                </FormGroup>



                                <FormGroup row>
                                    <Col md={{ size: 5, offset: 3 }}>
                                        <FormGroup check>
                                            <Label check>
                                                <Input
                                                    type="checkbox"
                                                    name="agree"
                                                    checked={this.state.agree}
                                                    onChange={this.handleInputChange}
                                                />
                                                <strong>May we contact you?
                                                </strong>
                                            </Label>
                                        </FormGroup>
                                    </Col>
                                    <Col md={{ size: 4, }}>
                                        <Input
                                            type="select"
                                            name="contactType"
                                            value={this.state.contactType}
                                            onChange={this.handleInputChange}

                                        >
                                            <option>Tel.</option>
                                            <option>Email</option>
                                        </Input>
                                    </Col>
                                </FormGroup>



                                <FormGroup row>
                                    <Label htmlFor="message" md={3}>Your Feedback</Label>
                                    <Col md={9}>
                                        <Input
                                            type="textarea"
                                            name="message"
                                            value={this.state.message}
                                            rows="6"
                                            onChange={this.handleInputChange}
                                        >

                                        </Input>
                                    </Col>
                                </FormGroup>
                                <FormGroup>
                                    <Col md={{ size: 12, offset: 2 }}>
                                        <Button type="submit" color="primary">
                                            Send Feedback
                                        </Button>
                                    </Col>
                                </FormGroup>


                            </Form>



                        </div>


                    </div>
                </div>
            </Fragment>
        );
    }
}

export default Contact;