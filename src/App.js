import React, { Component } from 'react';
import login from './login';
import signup from './signup';
class App extends Component {
    
    constructor(){
            super();
            this.state={ loginState : true};
            this.toggleSignUpLogIn=this.toggleSignUpLogIn.bind(this);
    }
    toggleSignUpLogIn(){
        console.log("In toggle"+this.state.loginState);
        this.setState({loginState:!this.state.loginState});
    }    
   
    render() {  
        console.log("State changed to="+this.state.loginState);      
        return(
        <div><button onClick={this.toggleSignUpLogIn}>SIGNUP/LOGIn</button>
        
        <div id="01">{this.state.loginState?login():signup()}</div>
        </div> 
        );
    }   
}

export default App;