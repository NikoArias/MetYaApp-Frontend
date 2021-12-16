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

            <br />

          <div className="w3-panel">
            <div className="w3-card-4">
                <header className="w3-container w3-light-grey">
                  <h4><strong>Event of Jane Doe</strong></h4>
                </header>
              <div className="w3-container w3-white">
                  <img src="/img/Logo1Test.png" alt="Avatar" className="w3-left w3-margin-right" style={{height:"35%", width:"35%"}} />
                  <p>CEO at Mighty Schools. Marketing and Advertising. Seeking a new job and new opportunities.</p><br />
              </div>
              <footer>
              <Link to="/event/1" className="w3-button w3-white w3-black w3-block w3-round">Assist</Link>
              </footer>
            </div>
          </div>

        {/*  <br />
            <hr className="w3-grey"/>
          <br />

          <br />

        <div className="w3-panel">
          <div className="w3-card-4">
              <header className="w3-container w3-light-grey">
                <h4><strong>Event of Joe Doe</strong></h4>
              </header>
            <div className="w3-container w3-white">
                <img src="/img/Logo1Test.png" alt="Avatar" className="w3-left w3-margin-right" style={{height:"35%", width:"35%"}} />
                <p>CEO at Mighty Schools. Marketing and Advertising. Seeking a new job and new opportunities.</p><br />
            </div>
            <footer>
            <Link to="/event/2"className="w3-button w3-white w3-black w3-block w3-round">Assist</Link>
            </footer>
          </div>
        </div>

        <br />
          <hr className="w3-grey"/>
        <br />

        <br />

      <div className="w3-panel">
        <div className="w3-card-4">
            <header className="w3-container w3-light-grey">
              <h4><strong>Event of Jhon Doe</strong></h4>
            </header>
          <div className="w3-container w3-white">
              <img src="/img/Logo1Test.png" alt="Avatar" className="w3-left w3-margin-right" style={{height:"35%", width:"35%"}} />
              <p>CEO at Mighty Schools. Marketing and Advertising. Seeking a new job and new opportunities.</p><br />
          </div>
          <footer>
          <Link to="/event/3" className="w3-button w3-white w3-black w3-block w3-round">Assist</Link>
          </footer>
        </div>
      </div>

      <br />
        <hr className="w3-grey"/>
      <br /> */}
      </>
    )
  }
}


export default EventListPage;
