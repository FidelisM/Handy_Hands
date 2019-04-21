import React from 'react';
import {Col, Row, Form, FormGroup, Label, Input} from 'reactstrap';

import {handleRadioButtonChange, handleInputChange} from 'Common/fieldUpdateHelper';

export class App_Basic extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <div className="container basic">
                <Form onKeyPress={() => {
                    return event.keyCode !== 13;
                }}>
                    <Row form>
                        <Col md={12}>
                            <FormGroup>
                                <Label className="title" htmlFor="name">Name (Last, First Middle Initial)</Label>
                                <Input type="text" name="name" id="name" placeholder="Last, First MI."
                                       onChange={handleInputChange.bind(this)} value={this.props.data.name && this.props.data.name.value}/>
                            </FormGroup>
                        </Col>
                    </Row>
                    <Row form>
                        <Col md={6}>
                            <FormGroup>
                                <Label className="title" htmlFor="birthDate">Date of Birth</Label>
                                <Input type="date" name="birthDate" id="birthDate" placeholder="D.O.B"
                                       onChange={handleInputChange.bind(this)} value={this.props.data.birthDate && this.props.data.birthDate.value}/>
                            </FormGroup>
                        </Col>
                        <Col md={6}>
                            <FormGroup>
                                <Label className="title" htmlFor="soc">Social Security Number</Label>
                                <Input type="password" name="soc" id="soc" onKeyPress={() => {
                                    return event.charCode >= 48 && event.charCode <= 57
                                }} onChange={handleInputChange.bind(this)} value={this.props.data.soc && this.props.data.soc.value}/>
                            </FormGroup>
                        </Col>
                    </Row>
                    <FormGroup>
                        <Label className="title" htmlFor="address">Address</Label>
                        <Input type="text" name="address" id="address" placeholder="1234 Main St."
                               onChange={handleInputChange.bind(this)} value={this.props.data.address && this.props.data.address.value}/>
                    </FormGroup>
                    <Row form>
                        <Col md={6}>
                            <FormGroup>
                                <Label className="title" htmlFor="city">City</Label>
                                <Input type="text" name="city" id="city" onChange={handleInputChange.bind(this)}
                                       value={this.props.data.city && this.props.data.city.value}/>
                            </FormGroup>
                        </Col>
                        <Col md={4}>
                            <FormGroup>
                                <Label className="title" htmlFor="state">State</Label>
                                <Input type="text" name="state" id="state" onChange={handleInputChange.bind(this)}
                                       value={this.props.data.state && this.props.data.state.value}/>
                            </FormGroup>
                        </Col>
                        <Col md={2}>
                            <FormGroup>
                                <Label className="title" htmlFor="zip">Zip</Label>
                                <Input type="text" name="zip" id="zip" onChange={handleInputChange.bind(this)}
                                       value={this.props.data.zip && this.props.data.zip.value}/>
                            </FormGroup>
                        </Col>
                    </Row>
                    <Row form>
                        <Col md={4}>
                            <FormGroup>
                                <Label className="title" htmlFor="telephone">Home Telephone</Label>
                                <Input type="tel" pattern="[0-9]{3}-[0-9]{3}-[0-9]{4}" name="telephone" id="telephone"
                                       onChange={handleInputChange.bind(this)} value={this.props.data.telephone && this.props.data.telephone.value} required/>
                            </FormGroup>
                        </Col>
                        <Col md={4}>
                            <FormGroup>
                                <Label className="title" htmlFor="mobile">Mobile</Label>
                                <Input type="tel" pattern="[0-9]{3}-[0-9]{3}-[0-9]{4}" name="telephone" id="mobile"
                                       onChange={handleInputChange.bind(this)} value={this.props.data.mobile && this.props.data.mobile.value}/>
                            </FormGroup>
                        </Col>
                        <Col md={4}>
                            <FormGroup>
                                <Label className="title" htmlFor="employment_date">Desired Start Date of
                                    Employment</Label>
                                <Input type="date" name="employment_date" id="employment_date"
                                       onChange={handleInputChange.bind(this)} value={this.props.data.employment_date && this.props.data.employment_date.value}/>
                            </FormGroup>
                        </Col>
                    </Row>
                    <Row form>
                        <Col md={4}>
                            <FormGroup className="text-end">
                                <div className="title">Are you willing to travel?</div>
                                <label htmlFor="travel_yes">
                                    <input onChange={handleRadioButtonChange.bind(this)} name="travel" id="travel_yes"
                                           type="radio" value="Yes" checked={this.props.data.travel_yes && this.props.data.travel_yes.value} required/> Yes
                                </label>
                                <label htmlFor="travel_no">
                                    <input onChange={handleRadioButtonChange.bind(this)} name="travel" id="travel_no"
                                           type="radio" value="No" checked={this.props.data.travel_no && this.props.data.travel_no.value}/> No
                                </label>
                            </FormGroup>
                        </Col>
                        <Col md={4}>
                            <FormGroup className="text-end">
                                <div className="title">Are you authorized to work in the United States on an
                                    unrestricted basis?
                                </div>
                                <label htmlFor="sponsor_yes">
                                    <input onChange={handleRadioButtonChange.bind(this)} name="sponsor" id="sponsor_yes"
                                           type="radio" value="Yes" checked={this.props.data.sponsor_yes && this.props.data.sponsor_yes.value} required/> Yes
                                </label>
                                <label htmlFor="sponsor_neg">
                                    <input onChange={handleRadioButtonChange.bind(this)} name="sponsor" id="sponsor_neg"
                                           type="radio" value="No" checked={this.props.data.sponsor_neg && this.props.data.sponsor_neg.value} required/> No
                                </label>
                            </FormGroup>
                        </Col>
                        <Col md={4}>
                            <FormGroup className="text-end">
                                <div className="title">Do you possess a security clearance?</div>
                                <label htmlFor="clearance_yes">
                                    <input onChange={handleRadioButtonChange.bind(this)} name="clearance"
                                           id="clearance_yes" type="radio" value="Yes"
                                           checked={this.props.data.clearance_yes && this.props.data.clearance_yes.value}
                                           required/> Yes
                                </label>
                                <label htmlFor="clearance_no">
                                    <input onChange={handleRadioButtonChange.bind(this)} name="clearance"
                                           id="clearance_no" type="radio" value="No"
                                           checked={this.props.data.clearance_no && this.props.data.clearance_no.value}/> No
                                </label>
                            </FormGroup>
                        </Col>
                    </Row>
                </Form>
            </div>
        );
    }
}