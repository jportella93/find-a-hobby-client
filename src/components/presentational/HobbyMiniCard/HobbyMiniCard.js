import React, { Component } from 'react';
import './HobbyMiniCard.css';

export default class HobbyMiniCard extends Component {
  constructor (props) {
    super(props);
    this.state = {
      money: this.props.hobby.tags[0].average,
      fit: this.props.hobby.tags[1].average,
      creative: this.props.hobby.tags[2].average
    }
  }

  getImageUrl() {
    const pictures = this.props.hobby.pictures;
    if (!pictures || pictures.length === 0) return '';

    const firstPicture = pictures[0];

    // Check for url first (actual API property)
    if (firstPicture.url) return firstPicture.url;

    // Fallback to big and thumbnail for backward compatibility
    if (firstPicture.big) return firstPicture.big;
    if (firstPicture.thumbnail) return firstPicture.thumbnail;

    return '';
  }

  render() {
    return (
      <a href={this.props.hobby.links[0].getStarted} target="_blank" >
        <div className="HobbyMiniCard">
          < div className = "HobbyMiniCard__colorHolder"
            style={{'gridTemplateColumns': `${this.state.money}%
          ${this.state.fit}% ${this.state.creative}%`}}>
            <div className='color1 colorBar'></div>
            <div className='color2 colorBar'></div>
            <div className='color3 colorBar'></div>
          </div>
          <img src={this.getImageUrl()}
            alt={this.props.hobby.name}/>
          <h3>{this.props.hobby.name}</h3>
        </div>
      </a>
    );
  }
}
