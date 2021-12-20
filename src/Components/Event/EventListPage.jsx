import { React, Component } from "react";

import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";

import { getEventListCall } from "../../API/events"


class EventListPage extends Component{
  constructor(props){
    super(props);

    this.state = {
      events: [],
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

  }

  onGetEventDone(){

  }

  onAssistEventClick(e){
    alert("you have been listed for this event.")
  }

  render(){
    const { events } = this.state
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

            <br />

            {this.state.events.map((event) => (
              <>
                <div className="w3-panel">
                      <div className="w3-card-4">
                          <header className="w3-container w3-light-grey">
                            <h4><strong>{event.event_name}</strong></h4>
                          </header>
                          <div className="w3-container w3-white">
                              <label>Hosted by {event.event_host}</label>
                              <p>{event.event_details}</p><br />
                              <img src={event.event_img} alt="Avatar" className="w3-center w3-left w3-margin-right" style={{height:"100%", width:"100%"}} />
                              <br /><br />
                          </div>
                      </div>
                    <div>
                    <button onClick={this.onAssistEventClick} className="w3-padding w3-button w3-white w3-black w3-block w3-round">Assist</button>
                   </div>
                  </div>
              </>
            ))}


  <br /><br />  <br /><br />  <br /><br />
      </>
    )
  }
}


export default EventListPage;
