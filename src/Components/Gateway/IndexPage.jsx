import { React, Component } from "react";

import { Link } from "react-router-dom";


class IndexPage extends Component{
  constructor(props){
    super(props);

    this.state = {

    }
  }

  render(){
    return(
      <>
      <div>
        <img src="/img/Logo1Test.png" style={{width:"100%"}}/>
        <div className="w3-center">
          <h1>MetYaApp</h1>
          <h5 className="w3-text-grey">V 1.0.1</h5>
        </div>
        <div className="w3-padding w3-margin-top">
         <Link to="/login" className="w3-button w3-block w3-black w3-padding-16">Login</Link>
        </div>
        <div className="w3-padding w3-margin-top">
         <Link to="/register" className="w3-button w3-block w3-black w3-padding-16">Register</Link>
        </div>
      </div>
      <span className="w3-bottom w3-text-grey w3-center">Copyright 2021 <i className="fa fa-copyright" aria-hidden="true"></i> Nicolas Arias</span>
      </>
    )
  }
}


export default IndexPage;
