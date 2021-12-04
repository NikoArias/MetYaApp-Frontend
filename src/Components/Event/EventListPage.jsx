import { React, Component } from "react";

import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";


class EventListPage extends Component{
  constructor(props){
    super(props);

    this.state = {

    }
  }

  render(){
    return(
      <>
      <div className="w3-row w3-black">
        <div className="w3-col s4 w3-container w3-padding">
        </div>
        <div className="w3-col s4 w3-container w3-center">
           <h4>Events</h4>
        </div>
        <div className="w3-col s4 w3-container w3-padding">
        </div>
      </div>
      </>
    )
  }
}


export default EventListPage;
