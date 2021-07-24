import React, { Component } from 'react';
import './addVoter.css';
import Navbar from './Navbar.js';

class AddVoter extends Component {
    render(){
        return (
            <div className="container" style={{marginTop:'10%'}}>
                <div className="addV">
                    <h2>Add Voter</h2>
                    <form onSubmit={(e) => {
                        e.preventDefault()
                        this.props.addVoter(this.voterId.value,this.name.value,this.age.value,this.dob.value)
                    }}>
                        <input type="text" placeholder="Voter Id" className='inputtxt'
                            ref={(input_1) => {this.voterId=input_1}}
                        required/>
                        <br /><br />
                        <input type="text" placeholder="Name" className='inputtxt'
                            ref={(input_2) => {this.name=input_2}}
                            required/>
                        <br /><br />
                        <input type="number" placeholder="Age" className='inputtxt'
                            ref={(input_3) => {this.age=input_3}}
                            required/>
                        <br /><br />
                        <input type="date" placeholder="Date Of Birth" className='inputtxt'
                            ref={(input_6) => {this.dob=input_6}}
                            required/>
                        <br /><br />
                         {/* <input type="time" placeholder="Time" className='inputtxt'
                            ref={(input_4) => {this.time=input_4}}
                        />
                        <br /><br />
                         <input type="text" placeholder="Location" className='inputtxt'
                            ref={(input_5) => {this.location=input_5}}
                        />
                        <br /><br />
                         Voted
                        <input type="radio" id="radiobtn"
                            ref={(input_6) => {this.voted=input_6}}
                            /><br /><br /> */}
                        
                        <input className="addbtn" type="submit" value="Add" />
                    </form>
                </div>
            </div>
        )
    }
}

export default AddVoter;