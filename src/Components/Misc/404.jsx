import { React, Component } from "react";

import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";


class PageNotFound extends Component{
  constructor(props){
    super(props);

    this.state = {

    }
  }

  render(){
    return(
      <>
      <h1>404</h1>
      </>
    )
  }
}


export default PageNotFound;
