import { React, Component } from "react";

import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import RegisterComponent from "./Component";

import { postRegister } from "../../../API/gateway";


class RegisterContainer extends Component{
  constructor(props){
    super(props);

    this.state = {
      first_name: "",
      last_name: "",
      username: "",
      email: "",
      password: "",
    }

    this.onPostRegisterSucces = this.onPostRegisterSucces.bind(this);
    this.onPostRegisterError = this.onPostRegisterError.bind(this);
    this.onPostRegisterDone = this.onPostRegisterDone.bind(this);

    this.onSubmitClick = this.onSubmitClick.bind(this);
    this.onTextChange = this.onTextChange.bind(this);

  }

  onPostRegisterSucces(response){
    alert("Succesfully registered")
  }

  onPostRegisterError(err){

  }

  onPostRegisterDone(){

  }

  onSubmitClick(e) {
    const { first_name, last_name,  username, email, password } = this.state;
    const data = {
        first_name: first_name,
        last_name: last_name,
        username: username,
        email: email,
        password: password,
    };
    postRegister(data, this.onPostRegisterSucces, this.onPostRegisterError, this.onPostRegisterDone);
}

onTextChange(e) {
    const value = e.target.value;
    const name = e.target.name;
    this.setState({
        [name]: value,
    });
}

  render(){
    const {first_name, last_name, username, email, password, onTextChange, onSubmitClick} = this.state;
    return(
      <>
      <RegisterComponent
      first_name={first_name}
      last_name={last_name}
      username={username}
      email={email}
      password={password}
      onTextChange={this.onTextChange}
      onSubmitClick={this.onSubmitClick}/>
      </>
    )
  }
}


export default RegisterContainer;
