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
        recentlyPlayed: data.items.map(item => {
          return {
            albumArt0: item[0].track.album.images[0].url,
            albumArt1: item[1].track.album.images[0].url,
            albumArt2: item[2].track.album.images[0].url,
            albumArt3: item[3].track.album.images[0].url,
            albumArt4: item[4].track.album.images[0].url,
            albumArt5: item[5].track.album.images[0].url,
            albumArt6: item[6].track.album.images[0].url,
            albumArt7: item[7].track.album.images[0].url,
            albumArt8: item[8].track.album.images[0].url,
            albumArt9: item[9].track.album.images[0].url,
            albumArt10: item[10].track.album.images[0].url,
            albumArt11: item[11].track.album.images[0].url,
            albumArt12: item[12].track.album.images[0].url,
            albumArt13: item[13].track.album.images[0].url,
            albumArt14: item[14].track.album.images[0].url,
            albumArt15: item[15].track.album.images[0].url,
            albumArt16: item[16].track.album.images[0].url,
            albumArt17: item[17].track.album.images[0].url,
            albumArt18: item[18].track.album.images[0].url,
            albumArt19: item[19].track.album.images[0].url,
            albumArt20: item[20].track.album.images[0].url,
            albumArt21: item[21].track.album.images[0].url,
            albumArt22: item[22].track.album.images[0].url,
            albumArt23: item[23].track.album.images[0].url,
            albumArt24: item[24].track.album.images[0].url,
            albumArt25: item[25].track.album.images[0].url,
            albumArt26: item[26].track.album.images[0].url,
            albumArt27: item[27].track.album.images[0].url,
            albumArt28: item[28].track.album.images[0].url,
            albumArt29: item[29].track.album.images[0].url,
            albumArt30: item[30].track.album.images[0].url,
            albumArt31: item[31].track.album.images[0].url,
            albumArt32: item[32].track.album.images[0].url,
            albumArt33: item[33].track.album.images[0].url,
            albumArt34: item[34].track.album.images[0].url,
            albumArt35: item[35].track.album.images[0].url,
            albumArt36: item[36].track.album.images[0].url,
            albumArt37: item[37].track.album.images[0].url,
            albumArt38: item[38].track.album.images[0].url,
            albumArt39: item[39].track.album.images[0].url,
            albumArt40: item[40].track.album.images[0].url,
            albumArt41: item[41].track.album.images[0].url,
            albumArt42: item[42].track.album.images[0].url,
            albumArt43: item[43].track.album.images[0].url,
            albumArt44: item[44].track.album.images[0].url,
            albumArt45: item[45].track.album.images[0].url,
            albumArt46: item[46].track.album.images[0].url,
            albumArt47: item[47].track.album.images[0].url,
            albumArt48: item[48].track.album.images[0].url,
            albumArt49: item[49].track.album.images[0].url,
          }
        })
      }))
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
          <button onClick={() => this.componentDidMount()} className="button">Check Spotify Mosaic</button>
          <button onClick={() => window.location = 'https://spotify-mosaic-backend.herokuapp.com/login'} className="button">Login to Spotify</button>
        </div>
      </div>
    );
  }
}

export default App;
