import React, { Component } from 'react';
import { Route, Link } from 'react-router-dom';
import './App.css';
import Landing from './components/Landing';
import Library from './components/Library';
import Album from './components/Album';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';


class App extends Component {
  render() {
    return (
      <MuiThemeProvider>
        <div className="App mdl-layout mdl-js-layout mdl-layout--fixed-header">
          <header className="mdl-layout__header">
            <div className="mdl-layout-icon"></div>
            <div className="mdl-layout__header-row">
              <span>Bloc Jams</span>
              <div className="mdl-layout-spacer"></div>
              <img id="logo" src='/assets/images/bloc_jams_logo.png' alt="bloc jams logo"/>
            </div>
          </header>
          <div className="mdl-layout__drawer">
            <nav className="mdl-navigation">
              <Link to='/' className="mdl-navigation__link">Home</Link>
              <Link to='/library' className="mdl-navigation__link">Library</Link>
            </nav>
          </div>
          <main className="mdl-layout__content">
          <Route exact path="/" component={Landing} />
          <Route path="/library" component={Library} />
          <Route path="/album/:slug" component={Album} />
          </main>
        </div>
      </MuiThemeProvider>
    );
  }
}

export default App;
