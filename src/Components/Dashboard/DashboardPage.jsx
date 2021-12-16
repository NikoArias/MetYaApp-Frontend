import { React, Component } from "react";

import { Icon } from "leaflet";

import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet';
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";

import { getEventListCall } from "../../API/events"


class DashboardPage extends Component{
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


  render(){
    const { events } = this.state
    return(
      <>
            <div className="w3-row">
              <MapContainer center={[42.9675, -81.2326]} zoom={16}scrollWheelZoom={true}>
                <TileLayer
              url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
              attribution='&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
                />

                {this.state.events.map((event) => (
                    <>
                      <Marker position={[event.event_lat, event.event_long]}>
                        <Popup>
                        <div className="w3-container">
                         <div className="w3-light-grey w3-container">
                           <img src={event.event_img} style={{width:"100%", height:"100%"}}></img>
                         </div>
                         <br />
                         <hr className="w3-grey"/>
                         <h4><strong>{event.event_name}</strong></h4>
                         <label>by {event.event_host}</label>
                         <p>{event.event_details}</p>
                         <Link to="/event/1" className="w3-blue w3-button w3-block">More Info</Link>
                        </div>
                        </Popup>
                      </Marker>
                    </>
                ))}
              </MapContainer>
            </div>

      </>
    )
  }
}


export default DashboardPage;
