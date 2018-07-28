import React, { Component } from 'react';
import { Page, Toolbar, ToolbarButton, Splitter, SplitterSide, SplitterContent,
ListItem, Icon } from 'react-onsenui';
import './App.css';
import Discover from './components/functional/Discover'
import List from './components/functional/List'
import PostHobby from './components/functional/PostHobby'
import Logo from './components/presentational/Logo'
import Presentation from './components/presentational/Presentation'
import Navbar from './components/presentational/Navbar'

class App extends Component {
  constructor (props) {
    super (props);
    this.state = {
      likedHobbies: [],
      dislikedHobbies: [],
      seenHobbies: [],
      currentView: 'Logo',
      newUser: true,
      sideMenuIsOpen: false
    }
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
    if (token) this.state = ({
      ...this.state,
      newUser: false
    });
  }

  changeViewAfterLogo = () => {
    this.state.newUser
    ? this.setState({currentView: 'Presentation'})
    : this.setState({currentView: 'Discover'})
  }

  handleSideMenuItemClick = () => {
    this.hide();
  }

  hide = () => {
    this.state = {...this.state, sideMenuIsOpen: false};
  }

  show = () => {
    this.state = {...this.state, sideMenuIsOpen: true};
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
          seenHobbies={this.state.seenHobbies}
               />
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
        {/* {this.state.currentView === 'Presentation' ||
          this.state.currentView === 'Logo'
            ? null
            : <Navbar changeView={this.changeView}
          currentView={this.state.currentView}/>
        } */}
        <Toolbar style={{background:'transparent',boxShadow:'none'}}>
          <div className='left'>
            <ToolbarButton style={{color:'white'}} onClick={this.show}>
            </ToolbarButton>
          </div>
        </Toolbar>

        <Splitter>
          <SplitterSide className='sideMenu'
            style={{
              boxShadow: '0 10px 20px rgba(0,0,0,0.19), 0 6px 6px rgba(0,0,0,0.23)'
            }}
            side='left'
            width={200}
            collapse={true}
            swipeable={true}
            sideMenuIsOpen={this.state.sideMenuIsOpen}
            onClose={this.hide}
            onOpen={this.show}
          >
            <Page>
              <ListItem>
                <i class="zmdi zmdi-edit"></i>
              Post a hobby</ListItem>
              <ListItem>
                <i class="zmdi zmdi-favorite-outline"></i>
              Your liked hobbies</ListItem>
            </Page>
          </SplitterSide>
          <SplitterContent>
            {view}
          </SplitterContent>
        </Splitter>
      </div>
    );
  }
}



// TODO: refractor css with @import '../main.css' to DRY

export default App;
