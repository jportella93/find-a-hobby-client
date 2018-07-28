import React, { Component } from 'react';
import './List.css'
import HobbyMiniCard from '../../presentational/HobbyMiniCard'

export default class List extends Component {
  render() {
    return (
      <div className="List">
        {this.props.hobbies && this.props.hobbies.length > 0
          ? this.props.hobbies.map(hobby => {
            return <HobbyMiniCard key={'HobbyMiniCard'+hobby._id} hobby={hobby}/>
          })
          : <h2>Your liked hobbies<br /> will appear here </h2> }
      </div>
    );
  }
}
