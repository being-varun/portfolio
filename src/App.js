import React, { Component } from 'react';
import login from './login';
import signup from './signup';
import './css/App.css';
class App extends Component {
    
    constructor(){
            super();
            this.state={ loginState : true};
            this.toggleSignUpLogIn=this.toggleSignUpLogIn.bind(this);
    }
    toggleSignUpLogIn=()=>{
        console.log("In toggle"+this.state.loginState);
        this.setState({loginState:!this.state.loginState});
    } 
      
   
    render() {  
        console.log("State changed to="+this.state.loginState);      
        return(
        <div><button class="btn btn-secondary login-signup-btn" onClick={this.toggleSignUpLogIn}>SignUp or Login
        </button>
        <center>
        <form class="login-signup-class">        
        <div id="01">{this.state.loginState?login():signup()}</div>
        </form>
        </center>
        </div> 
        );
    }   
}

export default App;