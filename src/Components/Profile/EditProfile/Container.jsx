import { React, Component } from "react";

import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import EditProfileComponent from "./Component";


class EditProfilePage extends Component{
  constructor(props){
    super(props);

    this.state = {
      pictures:[],
    }
    this.onDrop = this.onDrop.bind(this);
  }

  onDrop(picture) {
        this.setState({
            pictures: this.state.pictures.concat(picture),
        });
    }

  render(){
    const { pictures } = this.state
    return(
      <>
      <EditProfileComponent pictures={pictures} onDrop={ this.onDrop} />
      </>
     );
  }
}


export default EditProfilePage;
