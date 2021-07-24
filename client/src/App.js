import React, { Component } from "react";
import Election from "./contracts/Election.json";
import Web3 from 'web3';
import Voters from "./Voter";
import Home from "./Home";
import Admin from "./Admin";


class App extends Component {
  constructor(props){
    super(props)
    this.state = { 
      web3: null,
      loading:true,
      account: null, 
      instance: null,
      admin:false,
      login:false,
      voterId:0,
      name:'',
      age:0,
      dob:'',
      voted:false,
      location:'',
      time:'',
      dov:''
    };

    this.addVoter=this.addVoter.bind(this);
    this.updateVoter=this.updateVoter.bind(this);
    this.login=this.login.bind(this);
}

async componentWillMount() {
  await this.loadWeb3()
  await this.loadBlockchainData()
}

async loadWeb3() {
  if (window.ethereum) {
    window.web3 = new Web3(window.ethereum)
    await window.ethereum.enable()
  }
  else if (window.web3) {
    window.web3 = new Web3(window.web3.currentProvider)
  }
  else {
    window.alert('Non-Ethereum browser detected. You should consider trying MetaMask!')
  }
}

  async loadBlockchainData() {
    const web3 = window.web3
    // Load account
    const accounts = await web3.eth.getAccounts()
    this.setState({ account: accounts[0] })

    // Network ID
    const networkId = await web3.eth.net.getId()
    const networkData = Election.networks[networkId]
    if(networkData) {
      const instance = new web3.eth.Contract(Election.abi, networkData.address)
      this.setState({ instance })
      if(accounts[0] === "0x7AafEc302FB330b365aD547544aEd568B02cDa1F"){
        this.setState({admin : true})
      }
      this.setState({ web3, instance });
      this.setState({ loading: false})
    } else {
      window.alert('Election Contract not deployed to detected network.')
    }
  }


  addVoter(voterId,name,age,dob){
    this.setState({ loading: true })
    this.state.instance.methods.addVoter(voterId,name,age,dob).send({ from: this.state.account })
    .once('receipt', (receipt) => {
      this.setState({ loading: false })
    })
    console.log("Voter Added!",voterId,name,age,dob)
  }

  updateVoter(voterId,location,time,dov){
    this.setState({ loading: true })
    this.state.instance.methods.updateVoter(voterId,location,time,dov).send({ from: this.state.account })
    .once('receipt', (receipt) => {
      this.setState({ loading: false })
    })
    console.log("Voter Updated !!")
  }

  async resolve(voterId){
    const voter = this.state.instance.methods.voters(voterId).call()
      var p = Promise.resolve(voter);
      let name,age,voted,dob,location,time,dov;
      await p.then(function(v) {
        console.log(v)
        name = v[1];
        age=  v[2];
        voted=v[3];
        dob=v[4];
        location=v[5];
        time=v[6];
        dov=v[7]
      });
      this.setState({voterId:voterId,name:name ,age:age,voted:voted,dob:dob,location:location,time:time,dov:dov})
  }

  validate(password){
    console.log(this.state.name)
    if(password === this.state.dob){
      this.setState({login:true})
    }
    else{
      window.location.reload();
      alert("Invalid Credential")
    }
    console.log(this.state.login)
  }

  async login(voterId,password){
    await this.resolve(voterId);
    this.validate(password);
  }
  

  render() {
    if (!this.state.web3) {
      return <div>Loading Web3, accounts, and contract...</div>;
    }
    if(this.state.login){
      return(
        <Voters
          voterId={this.state.voterId}
          name={this.state.name}
          age={this.state.age}
          voted={this.state.voted}
          location={this.state.location}
          time={this.state.time}
          dov={this.state.dov}
        />
      );
    }
    if(this.state.admin){
      return (
        <div >
          {this.state.loading ? <div>Loading...</div>:
          <Admin 
            addVoter={this.addVoter}
            updateVoter={this.updateVoter}
          />
          }
        </div>
      );
    }
    return(
      <Home
        login = {this.login}
      />
    );
  }
}

export default App;