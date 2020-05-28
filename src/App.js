import React, { Component } from 'react';
import './index.css';
import queryString from 'query-string';

class App extends Component {
  constructor() {
    super();
    this.state = {
      name: '',
      recentlyPlayed: {
        albumArt: ''
      }
    }
  }

  componentDidMount() {
    let parsed = queryString.parse(window.location.search);
    let accessToken = parsed.access_token;
    if (!accessToken)
      return;
    fetch('https://api.spotify.com/v1/me', {
      headers: { 'Authorization': 'Bearer ' + accessToken }
    }).then(response => response.json())
      .then(data => this.setState({ name: data.display_name }))

    fetch('https://api.spotify.com/v1/me/player/recently-played?limit=50', {
      headers: { 'Authorization': 'Bearer ' + accessToken }
    }).then(response => response.json())
      .then(data => this.setState({
        recentlyPlayed: data.items.map(item => {
            return {
              albumArt: item.track.album.images[0].url,
            }
          })
        }))
  }

  getRecentlyPlayed() {
    return this.state.recentlyPlayed
  }



render() {
  console.log(this.state);
  return (
    <div className="App">
      <br />
      <div className="title">
        {`${this.state.name}'s Recently Played Mosaic`}
      </div>
      <br />
      <div className="Mosaic">
        <img src={this.state.recentlyPlayed[0].albumArt} style={{ height: 50 }} alt="album art" />
      </div>
      <div className="buttons">
        <button onClick={() => this.getRecentlyPlayed()} className="button">Check Spotify Mosaic</button>
        <button onClick={() => window.location = 'https://spotify-mosaic-backend.herokuapp.com/login'} className="button">Login to Spotify</button>
      </div>
    </div>
  );
}
}

export default App;
