import React, { Component } from 'react';
import login from './login';
import signup from './signup';
class App extends Component {
    
    constructor(){
            super();
            this.state={ loginState : false};
    }
    toggleSignUpLogIn(){
        this.setState({loginState:true});
    }
    
   
    render() { 
        console.log("State="+this.loginState);
        return(
        <><input type="button" onclick="toggleSignUpLogIn()" value="Login/Signup" />
       { console.log("State="+this.loginState)}
        <div id="01">{this.loginState?login():signup()}</div>
        </> 
        );
    }

   
}

export default App;