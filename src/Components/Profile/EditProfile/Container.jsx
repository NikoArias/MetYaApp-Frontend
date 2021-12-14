import { React, Component } from "react";

import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import EditProfileComponent from "./Component";


class EditProfilePage extends Component{
  constructor(props){
    super(props);

    this.state = {

    }
  }

  render(){
    return(
      <>
      <EditProfileComponent />
      </>
    )
  }
}


export default EditProfilePage;
