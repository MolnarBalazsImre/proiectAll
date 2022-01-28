import React, { Component } from 'react';
import AddBook from './AddBooks';
import RentedBook from './RentedBooks';
import Books from './Books';
import LoginPage from './LoginPage';

class LogedPage extends Component{
     state = {
         visible: true,
         isLogin: true,
     }
    render(){
        const buttonText = this.state.visible ? "RentedBooks" : "AllBooks" 
        if(this.state.isLogin === true)
        {
        return(
            <div>Loged Page   
            <AddBook/>
            <button onClick={()=>{
                           this.setState({ visible: !this.state.visible});
                       }} >{buttonText}</button>  
            {this.state.visible ? <Books /> : <RentedBook/>}   
            <button onClick={()=>{this.setState({isLogin: false})}}>Exit</button>                     
            </div>
        )}
        else{
            return(
                <div>
                    <LoginPage/>
                </div>
            )
        }
    }
}

export default LogedPage;