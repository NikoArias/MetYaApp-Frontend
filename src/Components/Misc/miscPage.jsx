import { React, Component } from "react";

import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import { getVersion } from "../../API/misc"
import { postHello } from "../../API/misc"

class MiscPage extends Component{
  constructor(props){
    super(props);

    this.state = {
      version: "",
      msg: "",
    }
    this.onSucces = this.onSucces.bind(this)
    this.onError = this.onError.bind(this)
    this.onDone = this.onDone.bind(this)

    this.onPostHelloSucces = this.onPostHelloSucces.bind(this)
    this.onPostHelloError = this.onPostHelloError.bind(this)
    this.onPostHelloDone = this.onPostHelloDone.bind(this)
  }

  componentDidMount(){
    getVersion(this.onSucces, this.onError, this.onDone)
    const data = { name:"Sebastian"}
      postHello(data, this.onPostHelloSucces, this.onPostHelloError, this.onPostHelloDone)
  }


   onPostHelloSucces(response){
   }

   onPostHelloError(err){
   }

   onPostHelloDone(){

   }

   onSucces(response){
   }

   onError(err){
   }

   onDone(){

   }


  render(){
    return(
      <>
      <h1>Misc Page</h1>
      </>
    )
  }
}


export default MiscPage;
