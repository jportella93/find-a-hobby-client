import React, { Component } from 'react';
import './Logo.css'

export default class Logo extends Component {
  render () {
    return (
      <div onClick={this.props.handleClick} className='Logo-wrapper'>
        <div className='LogoWrapper-colorHolder'>
          <div className='color1 LogoWrapper-colorBar'></div>
          <div className='color2 LogoWrapper-colorBar'></div>
          <div className='color3 LogoWrapper-colorBar'></div>
          <div className='Logo'>
            <h1>find a Hobby!</h1>
            <br />
            <div style={{ display: 'flex', justifyContent: 'space-evenly'}}>
              <i className="fas fa-dollar-sign"></i>
              <i className="fas fa-football-ball"></i>
              <i className="fab fa-fly"></i>
            </div>
          </div>
        </div>
      </div>
    )
  }
}

// TODO: add number of hobbies available in database under the logo.
