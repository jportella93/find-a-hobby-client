import React, { Component } from 'react';
import './HobbyMiniCard.css'

export default class HobbyMiniCard extends Component {
  constructor (props) {
    super(props);
    this.state = {
      money: this.props.hobby.tags[0].average,
      fit: this.props.hobby.tags[1].average,
      creative: this.props.hobby.tags[2].average
    }
  }

  render() {
    return (
      <a href={this.props.hobby.links[0].getStarted} target="_blank" >
        <div className="HobbyMiniCard">
          <div className='colorHolder'
            style={{'gridTemplateColumns': `${this.state.money}%
          ${this.state.fit}% ${this.state.creative}%`}}>
            <div className='color1 colorBar'></div>
            <div className='color2 colorBar'></div>
            <div className='color3 colorBar'></div>
          </div>
          <img src={this.props.hobby.pictures[0].big}
            alt={this.props.hobby.name}/>
          <h3>{this.props.hobby.name}</h3>
        </div>
      </a>
    );
  }
}
