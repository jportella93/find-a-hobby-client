import React, { Component } from 'react';
import './BigScreenMenu.css'

export default class BigScreenMenu extends Component {
  render(){
    return (
      <div className="BigScreenMenu">
        <div className="BigScreenMenu__box">
          <i onClick={() => this.props.changeView('PostHobby')} className="zmdi zmdi-edit"></i>
        </div>
        <div className="BigScreenMenu__box">
          <i onClick={() => this.props.changeView('Discover')} className="zmdi zmdi-eye"></i>
        </div>
        <div className="BigScreenMenu__box">
          <i onClick={() => this.props.changeView('List')} className="zmdi zmdi-favorite-outline"></i>
        </div>
      </div>
    )
  }
}