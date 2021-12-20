import { React, Component } from "react";

import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import EditProfileComponent from "./Component";

import {postProfileCall} from "../../../API/profile";


class EditProfilePage extends Component{
  constructor(props){
    super(props);

    this.state = {
      user_f_name: "",
      user_l_name: "",
      user_descrip: "",
      f_link: "",
      t_link: "",
      i_link: "",
      s_link: "",
      profile: [],
    }

    this.onPostProfileDone = this.onPostProfileDone.bind(this)
    this.onPostProfileError = this.onPostProfileError.bind(this)
    this.onPostProfileDone = this.onPostProfileDone.bind(this)

    this.onSubmitClick = this.onSubmitClick.bind(this)
  }

  onPostProfileSucces(response){
    this.setState({
      profile : response.data["results"]
    })
  }

  onPostProfileError(err){
  }

  onPostProfileDone(){
  }

  onSubmitClick(e) {
    const { user_f_name, user_l_name,  user_descrip, f_link, t_link, i_link, s_link} = this.state;
    const data = {
        user_f_name: user_f_name,
        user_l_name: user_l_name,
        user_descrip: user_descrip,
        f_link: f_link,
        t_link: t_link,
        i_link: i_link,
        s_link: s_link,
    };
    postProfileCall(data, this.onPostProfileDone, this.onPostProfileError, this.onPostProfileDone);
}

onTextChange(e) {
    const value = e.target.value;
    const name = e.target.name;
    this.setState({
        [name]: value,
    });
}

  render(){
    const { user_f_name, user_l_name, user_descrip, f_link, t_link, i_link, s_link} = this.state
    return(
      <>
      <EditProfileComponent
      user_f_name={user_f_name}
      user_l_name={user_l_name}
      user_descrip={user_descrip}
      f_link={f_link}
      t_link={t_link}
      s_link={s_link}
      i_link={i_link}
      />
      </>
     );
  }
}


export default EditProfilePage;
