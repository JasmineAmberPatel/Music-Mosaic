import React, { Component } from 'react';
import './App.css';

import SpotifyWebApi from 'spotify-web-api-js';
const spotifyApi = new SpotifyWebApi();


class App extends Component {
  constructor() {
    super();
    const params = this.getHashParams();
    const token = params.access_token;
    if (token) {
      spotifyApi.setAccessToken(token);
    }
    this.state = {
      loggedIn: token ? true : false,
      nowPlaying: { name: '', artist: '', albumArt: '' }
    }
  }
  getHashParams() {
    var hashParams = {};
    var e, r = /([^&;=]+)=?([^&;]*)/g,
      q = window.location.hash.substring(1);
    e = r.exec(q)
    while (e) {
      hashParams[e[1]] = decodeURIComponent(e[2]);
      e = r.exec(q);
    }
    return hashParams;
  }

  getNowPlaying() {
    spotifyApi.getMyCurrentPlaybackState()
      .then((response) => {
        this.setState({
          nowPlaying: {
            name: response.item.name,
            artist: response.item.artists[0].name,
            albumArt: response.item.album.images[0].url
          }
        });
      })
      .catch(error => alert('cannot retrieve spotify information right'));
  }

  render() {
    console.log(this.state);
    return (
      <div className="App">
        <div className='login'>
          <a href='http://localhost:8888'> Login to Spotify </a>
        </div>
        <div className="Paragraph">
          {this.state.nowPlaying.name}
        </div>
        <div>
          <img src={this.state.nowPlaying.albumArt} style={{ height: 150 }} alt="album art" />
        </div>
        <div className="Paragraph">
          {this.state.nowPlaying.artist}
        </div>
        {this.state.loggedIn &&
          <button onClick={() => this.getNowPlaying()} className="btn btn-dark">Check Spotify Now Playing</button>
        }
      </div>
    );
  }
}


export default App;
