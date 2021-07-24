import React, { Component } from 'react';
import Navbar from './Navbar';

class Voters extends Component {
    render(){
        return (
            <div>
                <Navbar/>
                <div>
                    <table>
                        <tr><th>Name</th><td>{this.props.name}</td></tr>
                        <tr><th>Age</th><td>{this.props.age}</td></tr>
                        <tr><th>VoterId</th><td>{this.props.voterId}</td></tr>
                        <tr><th>Voting Status</th><td>{this.props.voted?<>Voted</>:<>Not Voted</>}</td></tr>
                        <tr><th>Voting Location</th><td> {this.props.location}</td></tr>
                        <tr><th>Voting Time</th><td>{this.props.time}</td></tr>
                        <tr><th>Voting Date</th><td>{this.props.dov}</td></tr>
                    </table>
                                    
                </div>
            </div>
        )
    }
}

export default Voters;