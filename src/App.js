import React, { Component } from "react";
import SpotifyContent from "./Spotify.js";
import { StylesProvider, ThemeProvider, createMuiTheme } from '@material-ui/core/styles';

import "./App.css";

const theme = createMuiTheme({
  palette: {
    type: 'dark',
    primary: {
      main: '#1DB954',
    },
  },
});


export const authEndpoint = 'https://accounts.spotify.com/authorize';
// Replace with your app's client ID, redirect URI and desired scopes
const clientId = "a0bd3685465a4548aceeb4be27de1550";
//const redirectUri = "https://lucca180.github.io/spotify-playlist-creator-ala/";
const redirectUri = "http://localhost:3000";

const scopes = [];
// Get the hash of the url
const hash = window.location.hash
  .substring(1)
  .split("&")
  .reduce(function(initial, item) {
    if (item) {
      var parts = item.split("=");
      initial[parts[0]] = decodeURIComponent(parts[1]);
    }
    return initial;
  }, {});
window.location.hash = "";

class App extends Component {
  constructor() {
    super();
    this.state = {
      token: null,
    }
  }
  componentDidMount() {
    // Set token
    let _token = hash.access_token;
    if (_token) {
      // Set token
      this.setState({
        token: _token
      });
      console.log(_token);
    }
  }

render() {
  return (
    <StylesProvider injectFirst>
      <ThemeProvider theme={theme}>
        <div className="App">
          <header className="App-header">
            <h1>PLAYLIST CREATOR</h1>
            <h3>Crie sua playlist que um computador irá analisar e te julgar :)</h3>
            <h3>Por Lucca Ricardo - <a href="https://colab.research.google.com/drive/12b1m7vedWXgqBkvALy55OXzGfQtRuZuS" target="_blank">Colab</a> / <a href="https://github.com/lucca180/spotify-playlist-creator-ala" target="_blank">Github</a></h3>
          {!this.state.token && (
            <a className="btn-login"
              href={`${authEndpoint}?client_id=${clientId}&redirect_uri=${redirectUri}&scope=${scopes.join("%20")}&response_type=token&show_dialog=true`}
            >
              Conectar ao Spotify
            </a>
          )}
          </header>
          {this.state.token && (
            <SpotifyContent token={this.state.token}/>
          )}
        </div>
      </ThemeProvider>
    </StylesProvider>
  );
  }
}
export default App;
