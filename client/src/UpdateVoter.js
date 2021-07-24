import React, { Component } from 'react';
import './index';

class UpdateVoter extends Component {
    render(){
        return (
            <div>
                <div className="updateV">
                    <h2>Update Voter</h2>
                    <form onSubmit={(e) => {
                        e.preventDefault()
                        this.props.updateVoter(this.voterId.value,this.location.value,this.time.value,this.dov.value)
                    }}>
                        <input type="text" placeholder="Voter Id" className='inputtxt'
                            ref={(input_1) => {this.voterId=input_1}}
                        required/>
                        <br /><br />
                         <input type="text" placeholder="Location" className='inputtxt'
                            ref={(input_5) => {this.location=input_5}}
                        />
                        <br /><br />
                        <input type="time" placeholder="Time" className='inputtxt'
                            ref={(input_4) => {this.time=input_4}}
                        /><br /><br />
                        <input type="date" placeholder="Date Of Vote" className='inputtxt'
                            ref={(input_7) => {this.dov=input_7}}
                            required/>
                        <br /><br />
                        <input className="updatebtn" type="submit" value="Update" />
                    </form>
                </div>
            </div>
        )
    }
}

export default UpdateVoter;