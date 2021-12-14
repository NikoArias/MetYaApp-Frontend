import "./App.css";
import { React, Component } from "react";

import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import LoginPage from "./Components/Gateway/LoginPage";
import IndexPage from "./Components/Gateway/IndexPage";
import PageNotFound from "./Components/Misc/404";
import RegisterPage from "./Components/Gateway/RegisterPage";
import ProfilePage from "./Components/Profile/Container";
import EditProfilePage from "./Components/Profile/EditProfile/Container";
import DashboardPage from "./Components/Dashboard/DashboardPage";
import EventDetailsPage from "./Components/Event/EventDetailsPage";
import EventListPage from "./Components/Event/EventListPage";
import EventAddPage from "./Components/Event/EventAddPage";
import SettingsPage from "./Components/Setting/SettingsPage";
import TabNav from "./Components/Misc/TabNav";
import MiscPage from "./Components/Misc/miscPage";


class App extends Component{
  constructor(props){
    super(props);

    this.state = {

    }
  }

  render(){
    return(
      <>
      <Router>
        <Routes>
            <Route exact path="/misc" element={<MiscPage/>} />
            <Route exact path="/settings" element={<SettingsPage/>} />
            <Route exact path="/event/:id" element={<EventDetailsPage/>} />
            <Route exact path="/events/create" element={<EventAddPage/>} />
            <Route exact path="/events" element={<EventListPage/>} />
            <Route exact path="/dashboard" element={<DashboardPage/>} />
            <Route exact path="/profile" element={<ProfilePage/>} />
            <Route exact path="/profile-edit" element={<EditProfilePage/>} />
            <Route exact path="/register" element={<RegisterPage/>} />
            <Route exact path="/login" element={<LoginPage/>} />
            <Route exact path="/" element={<IndexPage/>} />
            <Route exact path="*" element={<PageNotFound/>} />
         </Routes>
         <div>
         <TabNav />
         </div>
      </Router>
      </>
    )
  }
}


export default App;
