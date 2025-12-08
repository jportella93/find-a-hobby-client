import React, { Component } from 'react';
import FetchingHobbiesSpinner from '../../presentational/FetchingHobbiesSpinner';
import HobbyCard from '../../presentational/HobbyCard';
import SwipeButtons from '../../presentational/SwipeButtons';
import './Discover.css';

import discardSeenHobbies from '../../../functions/discardSeenHobbies';
import ApiClient from '../../../lib/apiClient';

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
    const updatedHobbies = [...randomHobbies, ...this.state.hobbies];
    this.setState({
      hobbies: updatedHobbies,
      loading: false
    });
    this.handleNoHobbies(updatedHobbies)
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
    this.handleNoHobbies(hobbies);
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
    this.handleNoHobbies(hobbies);
  }

  handleNoHobbies = (currentHobbies = this.state.hobbies) => {
    if (currentHobbies.length !== 0) {
      // Reset noHobbies to false if we have hobbies
      if (this.state.noHobbies) {
        this.setState({ noHobbies: false });
      }
      return;
    }
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
