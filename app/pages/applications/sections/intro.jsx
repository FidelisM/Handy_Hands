import React from 'react';
import {Input} from 'reactstrap';
import {handleRadioButtonChange, handleCheckBoxChange, handleInputChange} from 'Common/fieldUpdateHelper';

export class App_Intro extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <div className="container intro">
                <div className="position">
                    <span className="title">Position Applying for:</span>
                    <span className="role">
                        <input id="rn" type="radio" name="position" value="RN" checked={this.props.data.rn}
                               onChange={handleRadioButtonChange.bind(this)}/>
                        <label htmlFor="rn">RN</label>
                    </span>
                    <span className="role">
                        <input id="lpn" type="radio" name="position" value="LPN" checked={this.props.data.lpn}
                               onChange={handleRadioButtonChange.bind(this)}/>
                        <label htmlFor="lpn">LPN</label>
                    </span>
                    <span className="role">
                        <input id="hha" type="radio" name="position" value="HHA" checked={this.props.data.hha}
                               onChange={handleRadioButtonChange.bind(this)}/>
                        <label htmlFor="hha">HHA</label>
                    </span>
                    <span className="role">
                        <input id="gna_cna" type="radio" name="position" value="GNA/CNA"
                               checked={this.props.data.gna_cna}
                               onChange={handleRadioButtonChange.bind(this)}/>
                        <label htmlFor="gna_cna">GNA/CNA</label>
                    </span>
                    <span className="role">
                        <input id="cma" type="radio" name="position" value="CMA" checked={this.props.data.cma}
                               onChange={handleRadioButtonChange.bind(this)}/>
                        <label htmlFor="cma">CMA</label>
                    </span>
                    <span className="role">
                        <input id="office" type="radio" name="position" value="OFFICE STAFF"
                               checked={this.props.data.office}
                               onChange={handleRadioButtonChange.bind(this)}/>
                        <label htmlFor="office">OFFICE STAFF</label>
                    </span>
                </div>
                <hr/>
                <div className="employment">
                    <span className="title">Type of Employment:</span>
                    <span className="role">
                        <input onChange={handleRadioButtonChange.bind(this)} id="full_time" type="radio"
                               name="employment" value="FULL-TIME" checked={this.props.data.full_time}/>
                        <label htmlFor="full_time">FULL-TIME</label>
                    </span>
                    <span className="role">
                        <input onChange={handleRadioButtonChange.bind(this)} id="part_time" type="radio"
                               name="employment" value="PART-TIME" checked={this.props.data.part_time}/>
                        <label htmlFor="part_time">PART-TIME</label>
                    </span>
                    <span className="role">
                        <input onChange={handleRadioButtonChange.bind(this)} id="temp" type="radio"
                               name="employment" value="TEMPORARY" checked={this.props.data.temp}/>
                        <label htmlFor="temp">TEMPORARY</label>
                    </span>
                    <span className="role">
                        <input onChange={handleRadioButtonChange.bind(this)} id="on_call" type="radio"
                               name="employment" value="ON-CALL" checked={this.props.data.on_call}/>
                        <label htmlFor="on_call">ON-CALL</label>
                    </span>
                </div>
                <hr/>
                <div className="availability">
                    <span className="title">Time of Availability:</span>
                    <span className="role">
                        <input id="morning" type="checkbox" value="MORNINGS" onChange={handleCheckBoxChange.bind(this)}
                               checked={this.props.data.morning}/>
                        <label htmlFor="morning">MORNINGS</label>
                    </span>
                    <span className="role">
                        <input id="nights" type="checkbox" value="NIGHTS" onChange={handleCheckBoxChange.bind(this)}
                               checked={this.props.data.nights}/>
                        <label htmlFor="nights">NIGHTS</label>
                    </span>
                    <span className="role">
                        <input id="weekends" type="checkbox" value="WEEKENDS" onChange={handleCheckBoxChange.bind(this)}
                               checked={this.props.data.weekends}/>
                        <label htmlFor="weekends">WEEKENDS</label>
                    </span>
                </div>
                <hr/>
                <div className="availability_hours">
                    <span className="title">Hours of Availability:</span>
                    <span className="role">
                        <Input id="hours" type="text" placeholder="Enter total hours available in a workweek"
                               onChange={handleInputChange.bind(this)} value={this.props.data.hours}/>
                    </span>
                </div>
                <hr/>
            </div>
        );
    }
}