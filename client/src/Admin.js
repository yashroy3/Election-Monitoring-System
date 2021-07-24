import React, { Component } from "react";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import AddVoter from './AddVoter';
import UpdateVoter from './UpdateVoter'
import './Admin.css';
import Emblem from './emblem.svg';

class Admin extends Component{
    render(){
        return(
            <div>
                <Router>
                    <div className='nav'>
                            
                           <ul className="navbar">
                                <li><img src ={Emblem} width="60px" height = "60px"/></li>
                                <li><a>Election Commission of India</a></li>
                                <li className="rightMenu"><Link to='/addVoter' className="li" >Add Voters</Link></li>
                                <li className="rightMenu"><Link to='/updateVoter' className="li">Update Voters</Link></li>
                            </ul>
                    </div>
                    <Switch>
                        <Route path='/addVoter' render={(props) => <AddVoter addVoter={this.props.addVoter} {...this.props} />}/>
                        <Route path='/updateVoter' render={(props) => <UpdateVoter updateVoter={this.props.updateVoter} {...this.props} />} />
                    </Switch>
                </Router>
            </div>
                    
        );
    }
}
export default Admin;