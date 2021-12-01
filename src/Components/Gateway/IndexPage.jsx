import { React, Component } from "react";

import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";


class IndexPage extends Component{
  constructor(props){
    super(props);

    this.state = {

    }
  }

  render(){
    return(
      <>
        <h1> Home Page :)</h1>
      </>
    )
  }
}


export default IndexPage;
