import React, { Component } from 'react';
import { Page, Splitter, SplitterSide, SplitterContent} from 'react-onsenui';
import './App.css';
import Discover from './components/functional/Discover'
import List from './components/functional/List'
import PostHobby from './components/functional/PostHobby'
import Logo from './components/presentational/Logo'
import Presentation from './components/presentational/Presentation'
import BigScreenMenu from './components/presentational/BigScreenMenu'

class App extends Component {
  constructor (props) {
    super (props);
    this.state = {
      likedHobbies: [],
      dislikedHobbies: [],
      seenHobbies: [],
      currentView: 'Logo',
      newUser: true,
    }
  }

  componentDidMount(){
    this.watchForNewUser();
  }

  setHobbyAsSeen = (hobby) => {
    this.setState({seenHobbies: [...this.state.seenHobbies, hobby]})
  }

  passLikedHobby = (hobby) => {
    this.setState({likedHobbies: [...this.state.likedHobbies, hobby]})
    this.setHobbyAsSeen(hobby);
  }

  passDislikedHobby = (hobby) => {
    this.setState({dislikedHobbies: [...this.state.dislikedHobbies, hobby]})
    this.setHobbyAsSeen(hobby);
  }

  changeView = (currentView) => {
    this.setState({currentView})
  }

  watchForNewUser = () => {
    const token = window.localStorage.token;
    if (token) this.setState({
      newUser: false
    });
  }

  changeViewAfterLogo = () => {
    this.state.newUser
    ? this.setState({currentView: 'Presentation'})
    : this.setState({currentView: 'Discover'})
  }

  renderBigScreenMenu = () => {
    const { currentView } = this.state
    return window.innerWidth >= 1025 && currentView !== 'Logo' && currentView !== 'Presentation'
    ? < BigScreenMenu changeView = {this.changeView}/>
    : null
  }

  renderSideMenu = () => {
    return window.innerWidth < 1025 ?
      <SplitterSide className = 'sideMenu'
      side = 'left'
      width = {'20%'}
      collapse = {true}
      swipeable = {true}
      sideMenuIsOpen = {this.state.sideMenuIsOpen}
      onClose = {this.hide}
      onOpen = {this.show}
      animation = {'push'}>
        <Page>
          <div className = "SideMenu__items-list">
            <div className = "SideMenu__items-list-mask">
              <i onClick = {() => this.changeView('PostHobby')} className = "zmdi zmdi-edit" > </i>
              <i onClick = {() => this.changeView('Discover')} className = "zmdi zmdi-eye" > </i>
              <i onClick = {() => this.changeView('List')} className = "zmdi zmdi-favorite-outline" > </i> { /* TODO: add this menus for user and settings, icons are already here */ } {
                /* <i onClick={() => this.changeView('Profile')} class="zmdi zmdi-face"></i>
                                <i onClick={() => this.changeView('Settings')} class="zmdi zmdi-settings"></i> */
              }
            </div>
          </div>
        </Page>
      </SplitterSide>
    : null
  }

  render() {
    let view;
    switch (this.state.currentView) {
      case 'Logo':
      view = <Logo handleClick={this.changeViewAfterLogo} />
      break;
      case 'Presentation':
        view = <Presentation handleClick={() => this.changeView('Discover')}/>
        break;
      case 'Discover':
        view = <Discover passLikedHobby={this.passLikedHobby}
          passDislikedHobby={this.passDislikedHobby}
          seenHobbies={this.state.seenHobbies}/>
        break;
      case 'List':
        view = <List hobbies={this.state.likedHobbies}/>
        break;
      case 'PostHobby':
        view = <PostHobby />
        break;
      default:
      view = <h1>Oops something went wrong!</h1>
    }

    return (
      <div className="App">
        < Splitter style = {{overflow: 'scroll'}} >
          {this.renderSideMenu()}
          <SplitterContent>
            {view}
            {this.renderBigScreenMenu()}
          </SplitterContent>
        </Splitter>
      </div>
    );
  }
}

export default App;
