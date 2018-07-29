import React, { Component } from 'react';
import './BigScreenMenu.css'

export default class BigScreenMenu extends Component {
  render(){
    return (
      <div className="BigScreenMenu">
        <div onClick={() => this.props.changeView('PostHobby')} className="BigScreenMenu__box">
          <i className="zmdi zmdi-edit"></i>
        </div>
        <div onClick={() => this.props.changeView('Discover')} className="BigScreenMenu__box">
          <i className="zmdi zmdi-eye"></i>
        </div>
        <div onClick={() => this.props.changeView('List')} className="BigScreenMenu__box">
          <i className="zmdi zmdi-favorite-outline"></i>
        </div>
      </div>
    )
  }
}