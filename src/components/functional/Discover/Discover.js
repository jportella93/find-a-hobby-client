import React, { Component } from 'react';
import './Discover.css';
import HobbyCard from '../../presentational/HobbyCard'
import SwipeButtons from '../../presentational/SwipeButtons'
import FetchingHobbiesSpinner from '../../presentational/FetchingHobbiesSpinner'

import ApiClient from '../../../lib/apiClient';
import discardSeenHobbies from '../../../functions/discardSeenHobbies';
import filterHobby from '../../../functions/filterHobby';
import getRandHobbyFilteredRec from '../../../functions/getRandHobbyFilteredRec';

const numberOfCards = 3;
const neededCardsLeftToRefresh = 2;
const neededCardsPriorRec = 1;

export default class Discover extends Component {
  constructor (props) {
    super(props);
    this.state = {
      hobbies : [],
      noHobbies: false,
      loading: true,
    }
    this.setHobbies();
  }

  setHobbies = async () => {
    const hobbiesLGTH = this.state.hobbies.length
    if (hobbiesLGTH > neededCardsLeftToRefresh) return;

    let randomHobbies;
    this.props.seenHobbies.length > neededCardsPriorRec
    ? randomHobbies = await ApiClient.getRecommendedHobbies()
    : randomHobbies = await ApiClient.getRandomHobbies();

    randomHobbies = randomHobbies.slice(0, numberOfCards)

    const seenHobbies = [...this.props.seenHobbies, ...this.state.hobbies];

    randomHobbies = discardSeenHobbies(randomHobbies, seenHobbies);

    if (randomHobbies.length === 0) {
      randomHobbies = await ApiClient.getRandomHobbies();
      randomHobbies = discardSeenHobbies(randomHobbies, seenHobbies);
    }

    // console.log('setting new hobbies:',randomHobbies);
    this.setState({
      hobbies: [...randomHobbies, ...this.state.hobbies],
      loading: false
    });
    this.handleNoHobbies()
  }

  handleOnLike = () => {
    // console.log(this.state.hobbies);
    let hobbies = this.state.hobbies;
    if (hobbies.length < 1) return;
    const hobby = hobbies[hobbies.length-1];
    ApiClient.likeHobbie(hobby._id)
    this.props.passLikedHobby(hobby)
    hobbies.pop();
    this.setState({hobbies});
    this.setHobbies();
    this.handleNoHobbies();
  }

  handleOnDislike = () => {
    let hobbies = this.state.hobbies;
    if (hobbies.length < 1) return;
    const hobby = hobbies[hobbies.length-1]
    ApiClient.dislikeHobbie(hobby._id)
    this.props.passDislikedHobby(hobby)
    hobbies.pop();
    this.setState({hobbies});
    this.setHobbies();
    this.handleNoHobbies();
  }

  handleNoHobbies = () => {
    if (this.state.hobbies.length !== 0) return;
    this.setState({
      noHobbies: true,
      loading:true
    })
  }

  render() {
    return (
      <div className="Discover">
        {this.state.hobbies.map(hobby => {
          return <HobbyCard key={hobby._id} hobby={hobby}/>
        })}
        {this.state.loading
          ? <FetchingHobbiesSpinner noHobbies={this.state.noHobbies} />
          : <SwipeButtons onLike={this.handleOnLike}
            onDislike={this.handleOnDislike}/>}
      </div>
    );
  }
}
