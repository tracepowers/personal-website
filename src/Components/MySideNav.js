import React, { Component } from 'react';
import SideNav, { Toggle, Nav, NavItem, NavIcon, NavText } from '@trendmicro/react-sidenav';
import { FaInfoCircle, FaHome, FaUniversity, FaDesktop, FaFootballBall, FaGlobe } from 'react-icons/fa';
import { GiAbstract091 } from 'react-icons/gi';

class MySideNav extends React.Component {

  constructor(props) {
    super(props);
  }

  onToggle = (expanded) => {
      this.setState({ expanded: expanded });
  };

  render() {

    return (
        <SideNav onSelect={this.props.onSelect}>
          <SideNav.Toggle />
          <SideNav.Nav selected={this.props.selectedpane}>
              <NavItem eventKey="home">
                  <NavIcon>
                    <FaHome style={{ fontSize: '1.75em', verticalAlign: 'middle' }}/>
                  </NavIcon>
                  <NavText>
                      Home
                  </NavText>
              </NavItem>
              <NavItem eventKey="education">
                  <NavIcon>
                    <FaUniversity style={{ fontSize: '1.75em', verticalAlign: 'middle' }}/>
                  </NavIcon>
                  <NavText>
                      Education
                  </NavText>
              </NavItem>
              <NavItem eventKey="career">
                  <NavIcon>
                    <FaDesktop style={{ fontSize: '1.75em', verticalAlign: 'middle' }}/>
                  </NavIcon>
                  <NavText>
                      Career
                  </NavText>
              </NavItem>
              <NavItem eventKey="skateboarding">
                  <NavIcon>
                    <GiAbstract091 style={{ fontSize: '1.75em', verticalAlign: 'middle' }}/>
                  </NavIcon>
                  <NavText>
                      Skateboarding
                  </NavText>
              </NavItem>
              <NavItem eventKey="hobbies">
                  <NavIcon>
                    <FaFootballBall style={{ fontSize: '1.75em', verticalAlign: 'middle' }}/>
                  </NavIcon>
                  <NavText>
                      Hobbies
                  </NavText>
              </NavItem>
              <NavItem eventKey="world-travelled">
                  <NavIcon>
                    <FaGlobe style={{ fontSize: '1.75em', verticalAlign: 'middle' }}/>
                  </NavIcon>
                  <NavText>
                      My Travels
                  </NavText>
              </NavItem>
              <NavItem eventKey="about-website">
                  <NavIcon>
                    <FaInfoCircle style={{ fontSize: '1.75em', verticalAlign: 'middle' }}/>
                  </NavIcon>
                  <NavText>
                      About This Site
                  </NavText>
              </NavItem>
          </SideNav.Nav>
        </SideNav>
    );
  }
}

export default MySideNav;
