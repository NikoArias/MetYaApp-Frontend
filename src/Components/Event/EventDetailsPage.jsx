
import { React, Component } from "react";

import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";

import { getEventListCall } from "../../API/events"


class EventDetailsPage extends Component{
  constructor(props){
    super(props);

    this.state = {
      events: [],
      event_img: "",

    }
    this.onGetEventSucces = this.onGetEventSucces.bind(this);
    this.onGetEventError = this.onGetEventError.bind(this);
    this.onGetEventDone = this.onGetEventDone.bind(this);
  }

  componentDidMount(){
    getEventListCall(this.onGetEventSucces, this.onGetEventError, this.onGetEventDone)
  }

  onGetEventSucces(response){
    console.log(response)
    const { results }  = response.data

    this.setState({
      events:results,
    })
  }

  onGetEventError(err){
    alert("Something went wrong, please try again later.")

  }

  onGetEventDone(){

  }



  render(){
    const { events, event_img, event_name} = this.state;
    let elements = []
    for (let result of events){
      let elementJSX = (
        <>
        {result.event_img}
        <p>{result.event_host}</p>
        <p>{result.event_name}</p>
        <p>{result.event_address}</p>
        <p>{result.event_dt}</p>
        <p>{result.event_details}</p>
        <p>{result.event_lat}</p>
        <p>{result.event_long}</p>
        </>
      )
    }
    return(
      <>
          <img src= {this.event_img} style={{height:"100%", width:"100%"}}/>
          <div className="w3-container">
                 <div className="w3-white w3-container w3-round-xlarge">
                 <h4><strong>{event_name}</strong></h4>
                 <div className="w3-center">
                       <label className="w3-text-red"><strong>Starting time</strong></label>
                       <p>xx:xx</p>
                 </div>
                 </div>
          </div>
          <br />
          <div className="w3-container">
                 <div className="w3-white w3-container w3-round-xlarge">
                 <h4><strong>Host Rules</strong></h4>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam vitae interdum lacus, non consequat lacus. Vestibulum egestas dictum nibh, in euismod dolor scelerisque in. Proin ut suscipit sem. Duis ut ante laoreet, ultrices mi nec, cursus dolor. Suspendisse nec purus nunc. Aliquam nec eros nec nisi condimentum tristique. Etiam blandit lacus ut pulvinar scelerisque. In in elit non felis pharetra consectetur a at enim. Proin non nisl ante. In ut metus at risus condimentum efficitur. Vestibulum auctor et augue et lobortis. Phasellus vel blandit metus.</p>
                <hr />
                  <h4><strong>Event detail</strong></h4>
                  <p> Adress : XXXXXXXXX </p>
                  <p> Filters : null </p>
                  <p> Event : Public </p>
                 </div>
          </div>
          <br />  <br />  <br />
          <div className="w3-container">
                  <button className="w3-btn w3-black w3-block w3-margin-bottom">Assist Event</button>
                  <Link to="/profile" className="w3-btn w3-green w3-block">Host profile</Link>
          </div>
          <br /><br />  <br />
              {elements}
      </>
    )
  }
}


export default EventDetailsPage;
