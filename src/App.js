import React, { Component } from 'react';
import './index.css';

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
      recentlyPlayed: {
        albumArt0: '',
        albumArt1: '',
        albumArt2: '',
        albumArt3: '',
        albumArt4: '',
        albumArt5: '',
        albumArt6: '',
        albumArt7: '',
        albumArt8: '',
        albumArt9: '',
        albumArt10: '',
        albumArt11: '',
        albumArt12: '',
        albumArt13: '',
        albumArt14: '',
        albumArt15: '',
        albumArt16: '',
        albumArt17: '',
        albumArt18: '',
        albumArt19: '',
      }
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

  getRecentlyPlayed() {
    spotifyApi.getMyRecentlyPlayedTracks()
      .then((response) => {
        this.setState({
          recentlyPlayed: {
            //name: response.item.name,
            //artist: response.item.artists[0].name,
            albumArt0: response.items[0].track.album.images[0].url,
            albumArt1: response.items[1].track.album.images[0].url,
            albumArt2: response.items[2].track.album.images[0].url,
            albumArt3: response.items[3].track.album.images[0].url,
            albumArt4: response.items[4].track.album.images[0].url,
            albumArt5: response.items[5].track.album.images[0].url,
            albumArt6: response.items[6].track.album.images[0].url,
            albumArt7: response.items[7].track.album.images[0].url,
            albumArt8: response.items[8].track.album.images[0].url,
            albumArt9: response.items[9].track.album.images[0].url,
            albumArt10: response.items[10].track.album.images[0].url,
            albumArt11: response.items[11].track.album.images[0].url,
            albumArt12: response.items[12].track.album.images[0].url,
            albumArt13: response.items[13].track.album.images[0].url,
            albumArt14: response.items[14].track.album.images[0].url,
            albumArt15: response.items[15].track.album.images[0].url,
            albumArt16: response.items[16].track.album.images[0].url,
            albumArt17: response.items[17].track.album.images[0].url,
            albumArt18: response.items[18].track.album.images[0].url,
            albumArt19: response.items[19].track.album.images[0].url
          }
        });
      })
      .catch(error => alert('cannot retrieve spotify information right'));
  }

  render() {
    console.log(this.state);
    return (
      <div className="App">
        <br />
        <div className="title">
          Jasmine's Recently Played Mosaic
        </div>
        <br />
        <div className="Mosaic">
          <img src={this.state.recentlyPlayed.albumArt0} style={{ height: 150 }} alt="album art" onerror="this.style.display='none'" />
          <img src={this.state.recentlyPlayed.albumArt1} style={{ height: 150 }} alt="album art" onerror="this.style.display='none'" />
          <img src={this.state.recentlyPlayed.albumArt2} style={{ height: 150 }} alt="album art" onerror="this.style.display='none'" />
          <img src={this.state.recentlyPlayed.albumArt3} style={{ height: 150 }} alt="album art" onerror="this.style.display='none'" />
          <img src={this.state.recentlyPlayed.albumArt4} style={{ height: 150 }} alt="album art" onerror="this.style.display='none'" />
          <img src={this.state.recentlyPlayed.albumArt5} style={{ height: 150 }} alt="album art" onerror="this.style.display='none'" />
          <img src={this.state.recentlyPlayed.albumArt6} style={{ height: 150 }} alt="album art" onerror="this.style.display='none'" />
          <img src={this.state.recentlyPlayed.albumArt7} style={{ height: 150 }} alt="album art" onerror="this.style.display='none'" />
          <img src={this.state.recentlyPlayed.albumArt8} style={{ height: 150 }} alt="album art" onerror="this.style.display='none'" />
          <img src={this.state.recentlyPlayed.albumArt9} style={{ height: 150 }} alt="album art" onerror="this.style.display='none'" />
          <img src={this.state.recentlyPlayed.albumArt10} style={{ height: 150 }} alt="album art" onerror="this.style.display='none'" />
          <img src={this.state.recentlyPlayed.albumArt11} style={{ height: 150 }} alt="album art" onerror="this.style.display='none'" />
          <img src={this.state.recentlyPlayed.albumArt12} style={{ height: 150 }} alt="album art" onerror="this.style.display='none'" />
          <img src={this.state.recentlyPlayed.albumArt13} style={{ height: 150 }} alt="album art" onerror="this.style.display='none'" />
          <img src={this.state.recentlyPlayed.albumArt14} style={{ height: 150 }} alt="album art" onerror="this.style.display='none'" />
          <img src={this.state.recentlyPlayed.albumArt15} style={{ height: 150 }} alt="album art" onerror="this.style.display='none'" />
          <img src={this.state.recentlyPlayed.albumArt16} style={{ height: 150 }} alt="album art" onerror="this.style.display='none'" />
          <img src={this.state.recentlyPlayed.albumArt17} style={{ height: 150 }} alt="album art" onerror="this.style.display='none'" />
          <img src={this.state.recentlyPlayed.albumArt18} style={{ height: 150 }} alt="album art" onerror="this.style.display='none'" />
          <img src={this.state.recentlyPlayed.albumArt19} style={{ height: 150 }} alt="album art" onerror="this.style.display='none'" />
        </div>
        <br />
        {this.state.loggedIn &&
          <button onClick={() => this.getRecentlyPlayed()} className="button">Check Spotify Mosaic</button>
        }
        <br />
        <div className='button'>
          <a href='http://localhost:8888'> Login to Spotify </a>
        </div>
      </div>
    );
  }
}


export default App;
