import React, { Component } from 'react';
import './index.css';
import queryString from 'query-string';

let parsed = queryString.parse(window.location.search);
let accessToken = parsed.access_token;

class App extends Component {
  constructor() {
    super();
    this.state = {
      loggedIn: accessToken ? true : false,
      name: '',
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
        albumArt20: '',
        albumArt21: '',
        albumArt22: '',
        albumArt23: '',
        albumArt24: '',
        albumArt25: '',
        albumArt26: '',
        albumArt27: '',
        albumArt28: '',
        albumArt29: '',
        albumArt30: '',
        albumArt31: '',
        albumArt32: '',
        albumArt33: '',
        albumArt34: '',
        albumArt35: '',
        albumArt36: '',
        albumArt37: '',
        albumArt38: '',
        albumArt39: '',
        albumArt40: '',
        albumArt41: '',
        albumArt42: '',
        albumArt43: '',
        albumArt44: '',
        albumArt45: '',
        albumArt46: '',
        albumArt47: '',
        albumArt48: '',
        albumArt49: '',
      }
    }
  }

  componentDidMount() {
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
        recentlyPlayed: {
            albumArt0: data.items[0].track.album.images[0].url,
            albumArt1: data.items[1].track.album.images[0].url,
            albumArt2: data.items[2].track.album.images[0].url,
            albumArt3: data.items[3].track.album.images[0].url,
            albumArt4: data.items[4].track.album.images[0].url,
            albumArt5: data.items[5].track.album.images[0].url,
            albumArt6: data.items[6].track.album.images[0].url,
            albumArt7: data.items[7].track.album.images[0].url,
            albumArt8: data.items[8].track.album.images[0].url,
            albumArt9: data.items[9].track.album.images[0].url,
            albumArt10: data.items[10].track.album.images[0].url,
            albumArt11: data.items[11].track.album.images[0].url,
            albumArt12: data.items[12].track.album.images[0].url,
            albumArt13: data.items[13].track.album.images[0].url,
            albumArt14: data.items[14].track.album.images[0].url,
            albumArt15: data.items[15].track.album.images[0].url,
            albumArt16: data.items[16].track.album.images[0].url,
            albumArt17: data.items[17].track.album.images[0].url,
            albumArt18: data.items[18].track.album.images[0].url,
            albumArt19: data.items[19].track.album.images[0].url,
            albumArt20: data.items[20].track.album.images[0].url,
            albumArt21: data.items[21].track.album.images[0].url,
            albumArt22: data.items[22].track.album.images[0].url,
            albumArt23: data.items[23].track.album.images[0].url,
            albumArt24: data.items[24].track.album.images[0].url,
            albumArt25: data.items[25].track.album.images[0].url,
            albumArt26: data.items[26].track.album.images[0].url,
            albumArt27: data.items[27].track.album.images[0].url,
            albumArt28: data.items[28].track.album.images[0].url,
            albumArt29: data.items[29].track.album.images[0].url,
            albumArt30: data.items[30].track.album.images[0].url,
            albumArt31: data.items[31].track.album.images[0].url,
            albumArt32: data.items[32].track.album.images[0].url,
            albumArt33: data.items[33].track.album.images[0].url,
            albumArt34: data.items[34].track.album.images[0].url,
            albumArt35: data.items[35].track.album.images[0].url,
            albumArt36: data.items[36].track.album.images[0].url,
            albumArt37: data.items[37].track.album.images[0].url,
            albumArt38: data.items[38].track.album.images[0].url,
            albumArt39: data.items[39].track.album.images[0].url,
            albumArt40: data.items[40].track.album.images[0].url,
            albumArt41: data.items[41].track.album.images[0].url,
            albumArt42: data.items[42].track.album.images[0].url,
            albumArt43: data.items[43].track.album.images[0].url,
            albumArt44: data.items[44].track.album.images[0].url,
            albumArt45: data.items[45].track.album.images[0].url,
            albumArt46: data.items[46].track.album.images[0].url,
            albumArt47: data.items[47].track.album.images[0].url,
            albumArt48: data.items[48].track.album.images[0].url,
            albumArt49: data.items[49].track.album.images[0].url,
          }
        })
      )
      .catch(error => alert('cannot retrieve spotify information right'));
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
          <img src={this.state.recentlyPlayed.albumArt0} style={{ height: 150 }} alt="album art"/>
          <img src={this.state.recentlyPlayed.albumArt1} style={{ height: 150 }} alt="album art"/>
          <img src={this.state.recentlyPlayed.albumArt2} style={{ height: 150 }} alt="album art"/>
          <img src={this.state.recentlyPlayed.albumArt3} style={{ height: 150 }} alt="album art"/>
          <img src={this.state.recentlyPlayed.albumArt4} style={{ height: 150 }} alt="album art"/>
          <img src={this.state.recentlyPlayed.albumArt5} style={{ height: 150 }} alt="album art"/>
          <img src={this.state.recentlyPlayed.albumArt6} style={{ height: 150 }} alt="album art"/>
          <img src={this.state.recentlyPlayed.albumArt7} style={{ height: 150 }} alt="album art"/>
          <img src={this.state.recentlyPlayed.albumArt8} style={{ height: 150 }} alt="album art"/>
          <img src={this.state.recentlyPlayed.albumArt9} style={{ height: 150 }} alt="album art"/>
          <img src={this.state.recentlyPlayed.albumArt10} style={{ height: 150 }} alt="album art"/>
          <img src={this.state.recentlyPlayed.albumArt11} style={{ height: 150 }} alt="album art"/>
          <img src={this.state.recentlyPlayed.albumArt12} style={{ height: 150 }} alt="album art"/>
          <img src={this.state.recentlyPlayed.albumArt13} style={{ height: 150 }} alt="album art"/>
          <img src={this.state.recentlyPlayed.albumArt14} style={{ height: 150 }} alt="album art"/>
          <img src={this.state.recentlyPlayed.albumArt15} style={{ height: 150 }} alt="album art"/>
          <img src={this.state.recentlyPlayed.albumArt16} style={{ height: 150 }} alt="album art"/>
          <img src={this.state.recentlyPlayed.albumArt17} style={{ height: 150 }} alt="album art"/>
          <img src={this.state.recentlyPlayed.albumArt18} style={{ height: 150 }} alt="album art"/>
          <img src={this.state.recentlyPlayed.albumArt19} style={{ height: 150 }} alt="album art"/>
          <img src={this.state.recentlyPlayed.albumArt20} style={{ height: 150 }} alt="album art"/>
          <img src={this.state.recentlyPlayed.albumArt21} style={{ height: 150 }} alt="album art"/>
          <img src={this.state.recentlyPlayed.albumArt22} style={{ height: 150 }} alt="album art"/>
          <img src={this.state.recentlyPlayed.albumArt23} style={{ height: 150 }} alt="album art"/>
          <img src={this.state.recentlyPlayed.albumArt24} style={{ height: 150 }} alt="album art"/>
          <img src={this.state.recentlyPlayed.albumArt25} style={{ height: 150 }} alt="album art"/>
          <img src={this.state.recentlyPlayed.albumArt26} style={{ height: 150 }} alt="album art"/>
          <img src={this.state.recentlyPlayed.albumArt27} style={{ height: 150 }} alt="album art"/>
          <img src={this.state.recentlyPlayed.albumArt28} style={{ height: 150 }} alt="album art"/>
          <img src={this.state.recentlyPlayed.albumArt29} style={{ height: 150 }} alt="album art"/>
          <img src={this.state.recentlyPlayed.albumArt30} style={{ height: 150 }} alt="album art"/>
          <img src={this.state.recentlyPlayed.albumArt31} style={{ height: 150 }} alt="album art"/>
          <img src={this.state.recentlyPlayed.albumArt32} style={{ height: 150 }} alt="album art"/>
          <img src={this.state.recentlyPlayed.albumArt33} style={{ height: 150 }} alt="album art"/>
          <img src={this.state.recentlyPlayed.albumArt34} style={{ height: 150 }} alt="album art"/>
          <img src={this.state.recentlyPlayed.albumArt35} style={{ height: 150 }} alt="album art"/>
          <img src={this.state.recentlyPlayed.albumArt36} style={{ height: 150 }} alt="album art"/>
          <img src={this.state.recentlyPlayed.albumArt37} style={{ height: 150 }} alt="album art"/>
          <img src={this.state.recentlyPlayed.albumArt38} style={{ height: 150 }} alt="album art"/>
          <img src={this.state.recentlyPlayed.albumArt39} style={{ height: 150 }} alt="album art"/>
          <img src={this.state.recentlyPlayed.albumArt40} style={{ height: 150 }} alt="album art"/>
          <img src={this.state.recentlyPlayed.albumArt41} style={{ height: 150 }} alt="album art"/>
          <img src={this.state.recentlyPlayed.albumArt42} style={{ height: 150 }} alt="album art"/>
          <img src={this.state.recentlyPlayed.albumArt43} style={{ height: 150 }} alt="album art"/>
          <img src={this.state.recentlyPlayed.albumArt44} style={{ height: 150 }} alt="album art"/>
          <img src={this.state.recentlyPlayed.albumArt45} style={{ height: 150 }} alt="album art"/>
          <img src={this.state.recentlyPlayed.albumArt46} style={{ height: 150 }} alt="album art"/>
          <img src={this.state.recentlyPlayed.albumArt47} style={{ height: 150 }} alt="album art"/>
          <img src={this.state.recentlyPlayed.albumArt48} style={{ height: 150 }} alt="album art"/>
          <img src={this.state.recentlyPlayed.albumArt49} style={{ height: 150 }} alt="album art"/>
        </div>
        <div className="buttons">
        {this.state.loggedIn &&
          <button onClick={() => this.componentDidMount()} className="button">Check Spotify Mosaic</button>
        }
          <button onClick={() => window.location = 'https://spotify-mosaic-backend.herokuapp.com/login'} className="button">Login to Spotify</button>
        </div>
      </div>
    );
  }
}

export default App;
