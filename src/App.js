import React, { Component } from 'react';
import HomePage from './Components/HomePage.js';
import EducationPage from './Components/EducationPage.js';
import CareerPage from './Components/CareerPage.js';
import MySideNav from './Components/MySideNav.js';
import SkateboardPage from './Components/SkateboardPage.js';
import TravelsPage from './Components/TravelsPage.js';
import HobbiesPage from './Components/HobbiesPage.js';
import './App.css';
import "../node_modules/react-image-gallery/styles/css/image-gallery.css";
import {Helmet} from "react-helmet";

// Be sure to include styles at some point, probably during your bootstraping
import '@trendmicro/react-sidenav/dist/react-sidenav.css';

class App extends React.Component {

  state = {
      selected: 'home'
  };

  onSelect = (selected) => {
      this.setState({ selected: selected });
  };
  onToggle = (expanded) => {
      this.setState({ expanded: expanded });
  };

  displayMainPage(selected, onSelect) {
    if(selected=='home'){
      return <HomePage selectedpane={this.state.selected} onSelect={this.onSelect}/>;
    }else if(selected=='education'){
      return <EducationPage/>;
    }else if(selected=='career'){
      return <CareerPage/>;
    }else if(selected=='skateboarding'){
      return <SkateboardPage/>;
    }else if(selected=='world-travelled'){
      return <TravelsPage/>;
    }else if(selected=='hobbies'){
      return <HobbiesPage/>;
    }else{
      return <h1 className="page-header">Coming Soon</h1>;
    }
  }

  render() {
    const { selected } = this.state;
    return (
      <div className="App">
       <Helmet bodyAttributes={{style: 'background-color : #f2f2f8'}}>
         <meta charSet="utf-8" />
         <title>Trace Powers</title>
         <link rel="canonical" href="http://tracepowers.com" />
       </Helmet>
        <MySideNav selectedpane={this.state.selected} onSelect={this.onSelect} />
        {this.displayMainPage(this.state.selected, this.onSelect)}
        <link
          rel="stylesheet"
          href="https://maxcdn.bootstrapcdn.com/bootstrap/4.3.1/css/bootstrap.min.css"
          integrity="sha384-ggOyR0iXCbMQv3Xipma34MD+dH/1fQ784/j6cY/iJTQUOhcWr7x9JvoRxT2MZw1T"
          crossorigin="anonymous"
        />
      </div>
    );
  }
}

export default App;
