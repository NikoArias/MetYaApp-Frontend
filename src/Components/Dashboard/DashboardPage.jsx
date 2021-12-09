import { React, Component } from "react";

import { Icon } from "leaflet";

import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet';
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";


class DashboardPage extends Component{
  constructor(props){
    super(props);

    this.state = {

    }
  }

  render(){
    return(
      <>
            <div className="w3-row">
              <MapContainer center={[45.4, -75.7]} zoom={12}scrollWheelZoom={false}>
                <TileLayer
              url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
              attribution='&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
                />
                <Marker position={[45.4, -75.7]}>
                  <Popup>
                  <div className="w3-container">
                   <div className="w3-light-grey w3-container">
                     <img src="https://media.istockphoto.com/photos/chalkboard-and-colored-balloons-on-a-wooden-background-picture-id1263908025?b=1&k=20&m=1263908025&s=170667a&w=0&h=DDeDvtWSu99Z5yKrbx0X3M26uHGP1SCBV_-zXKS-FSQ=" style={{width:"100%", height:"100%"}}></img>
                   </div>
                   <br />
                   <hr className="w3-grey"/>
                   <h4><strong>Event 1</strong></h4>
                   <label>by jhon doe</label>
                   <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.</p>
                   <Link to="/events" className="w3-blue w3-button w3-block">More Info</Link>
                  </div>
                  </Popup>
                </Marker>
                <Marker position={[53.4, -70.7]}>
                <Popup>
                <div className="w3-container">
                <img src=""></img>
                 <div className="w3-light-grey w3-container w3-round-xlarge">
                 <br />
                 </div>
                </div>
                </Popup>
                </Marker>
              </MapContainer>
            </div>

      </>
    )
  }
}


export default DashboardPage;
