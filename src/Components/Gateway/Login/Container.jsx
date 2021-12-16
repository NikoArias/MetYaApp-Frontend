import { React, Component } from "react";

import { BrowserRouter as Router, Switch, Route, Link, Navigate} from "react-router-dom";
import LoginComponent from "./Component";


import { postLogin } from "../../../API/gateway";



class LoginContainer extends Component{
  constructor(props){
    super(props);

    this.state = {
      username:"",
      password:"",
      forceURL:"",
    }
    this.onPostLoginSuccess = this.onPostLoginSuccess.bind(this);
    this.onPostLoginError = this.onPostLoginError.bind(this);
    this.onPostLoginDone = this.onPostLoginDone.bind(this);


    this.onTextChange = this.onTextChange.bind(this);
    this.onLoginClick = this.onLoginClick.bind(this);

  }

  onPostLoginSuccess(response){
    const {token, first_name, last_name, email} = response.data
    console.log(response)
    console.log(token)
    localStorage.setItem("TOKEN", token)
    localStorage.setItem("FIRST_NAME", first_name)
    localStorage.setItem("LAST_NAME", last_name)
    localStorage.setItem("EMAIL", email)

    this.setState({
      forceURL:"/dashboard"
    })
  }

  onPostLoginError(err){

  }

  onPostLoginDone(){

  }

  onTextChange(e) {
    const name = e.target.name;
    const value = e.target.value;
    this.setState({
        [name]: value,
    });
}



onLoginClick(e) {
    const { username, password } = this.state;
    const data = {
        username: username,
        password: password,
    };
    postLogin(data, this.onPostLoginSuccess, this.onPostLoginError, this.onPostLoginDone);
}

  render(){
    const {username, password, forceURL} = this.state
    if (forceURL != ""){
      return <Navigate to={forceURL}/>
    }
    return(
      <>
      <LoginComponent
      username={username}
      password={password}
      onTextChange={this.onTextChange}
      onLoginClick={this.onLoginClick}
      />
      </>
    )
  }
}


export default LoginContainer;
