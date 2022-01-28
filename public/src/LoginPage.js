import React, { Component } from 'react';

import Login from './Login';
import Register from './Register';
import LogedPage from './LogedPage';

class LoginPage extends Component{

   state = {
       visible: true,
       exist: true
   };
   

      render(){
          const buttonText = this.state.visible ? "Login" : "Register"   
          if(this.state.exist === true)
          {
          return(
              <div>
                  <button onClick={()=>{
                           this.setState({ visible: !this.state.visible});
                       }} >{buttonText}</button> 
                            <button onClick={()=> this.setState({exist: false})}>Forgot</button>
                    {this.state.visible ? <Register /> : <Login/>}   
                    
              </div>
          )}
          else{
              return(
                  <div>
                      <LogedPage/>
                  </div>
              )
          }
      }


}

export default LoginPage;