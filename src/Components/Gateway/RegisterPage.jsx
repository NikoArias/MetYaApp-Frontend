import { React, Component } from "react";

import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";


class RegisterPage extends Component{
  constructor(props){
    super(props);

    this.state = {

    }
  }

  render(){
    return(
      <>
      <div className="w3-container w3-margin-bottom w3-center">
        <br />
         <h2>MetYaApp</h2>
      </div>
      <br />
      <div className="w3-container">
       <div className="w3-white w3-container w3-round-xlarge">
       <h1><strong>Register</strong></h1>
       <hr className="w3-black"/>
       <p>The fields with the (*) are required.</p>
       <br />
       <p>
         <label> Full Name (*)</label>
         <input className="w3-input" type="text" name="username"/>
       </p>
       <p>
         <label> Username (*)</label>
         <input className="w3-input" type="text" name="username"/>
       </p>
        <p>
          <label> Email (*)</label>
          <input className="w3-input" type="text" name="username"/>
        </p>
        <p>
          <label> Password (*)</label>
          <input className="w3-input" type="password" name="username"/>
        </p>
        <p>
          <button className="w3-btn w3-green w3-block w3-margin-bottom">Register</button>
          <Link to="/login" className="w3-btn w3-light-grey w3-block">Log in</Link>
        </p>
       </div>
      </div>

      <span className="w3-bottom w3-text-grey w3-center"><hr className="w3-black"/>V 1.0.1</span>

      </>
    )
  }
}


export default RegisterPage;
