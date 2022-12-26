import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

// importing all the themes
import HomeSection from "../HomeSection/HomeSection";
import ContactCompleted from "../components/CompletedSection/ContactCompleted";

import EventSubscribe from "../components/EventsSection/EventSubscribe";
import ErrorPage from "../components/ErrorPage/404";
import ContactPage from "../components/ContactSection/ContactPage";
import AsesoriaFormPage from "../components/AsesoriaFormSection/AsesoriaFormPage";
import BlogFormPage from "../components/BlogFormSection/BlogFormPage";
import PhotoFormPage from "../components/PhotoFormSection/PhotoFormPage";

import PhotosIndex from "../components/Filesystem/PhotoIndex";
import PhotoProfile from "../components/Filesystem/PhotoProfile";

import BlogsIndex from "../components/Filesystem/BlogsIndex";
import BlogsProfile from "../components/Filesystem/BlogsProfile";

class MyRouts extends React.Component {

  render() {
    return (
      <div>
        <Router>
          <Switch>
            <Route exact path="/" component={HomeSection} />
            <Route path="/error-page" component={ErrorPage} />
            <Route path="/contact" component={ContactPage} />

            <Route path="/asesoria" component={AsesoriaFormPage} />
            <Route path="/blog-form" component={BlogFormPage} />
            <Route path="/photo-form" component={PhotoFormPage} />

            <Route path="/mensaje-enviado" component={ContactCompleted} />
            <Route path="/es" component={EventSubscribe} />
            
            <Route exact path="/photos" component={PhotosIndex}/> 
            <Route path="/photos/:photoPath" component={PhotoProfile}/> 
            
            <Route exact path="/blogs" component={BlogsIndex}/> 
            <Route path="/blogs/:blogPath" component={BlogsProfile}/> 

          </Switch>
        </Router>
      </div>
    );
  }
}
export default MyRouts;