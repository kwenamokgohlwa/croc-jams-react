import React, { Component } from 'react';
import albumData from './../data/albums';
import PlayerBar from './PlayerBar'

class Album extends Component {
  constructor(props) {
    super(props);
    const album = albumData.find( album => {
      return album.slug === this.props.match.params.slug
    });

    this.state = {
      album: album,
      currentSong: album.songs[0],
      currentTime: 0,
      duration: album.songs[0].duration,
      volume: 1,
      isPlaying: false,
      hover: false
    };

    this.audioElement = document.createElement('audio');
    this.audioElement.src = album.songs[0].audioSrc;
  }

  play() {
    this.audioElement.play();
    this.setState({ isPlaying: true });
  }

  pause() {
    this.audioElement.pause();
    this.setState({ isPlaying: false });
  }

  componentDidMount() {
    this.eventListeners = {
      timeupdate: e => {
        this.setState({ currentTime: this.audioElement.currentTime });
      },
      durationchange: e => {
        this.setState({ duration: this.audioElement.duration })
      },
      volumechange: e => {
        this.setState({ volume: this.audioElement.volume })
      }
    };
    this.audioElement.addEventListener('timeupdate', this.eventListeners.timeupdate);
    this.audioElement.addEventListener('durationchange', this.eventListeners.durationchange);
    this.audioElement.addEventListener('volumechange', this.eventListeners.volumechange);
  }

  componentWillUnmount() {
    this.audioElement.src = null;
    this.audioElement.removeEventListener('timeupdate', this.eventListeners.timeupdate);
    this.audioElement.removeEventListener('durationchange', this.eventListeners.durationchange);
    this.audioElement.removeEventListener('volumechange', this.eventListeners.volumechange);
  }

  setSong(song) {
    this.audioElement.src = song.audioSrc;
    this.setState({ currentSong:song });
  }

  handleSongClick(song) {
    const isSameSong = this.state.currentSong === song;
    if (this.state.isPlaying && isSameSong) {
      this.pause();
    }else {
      if (!isSameSong) { this.setSong(song); }
      this.play();
    }

  }

  handlePrevClick() {
    const currentIndex = this.state.album.songs.findIndex(song => this.state.currentSong === song);
    const newIndex = Math.max(0, currentIndex -1);
    const newSong = this.state.album.songs[newIndex];
    this.setSong(newSong);
    this.play(newSong);
  }

  handleNextClick() {
    const currentIndex = this.state.album.songs.findIndex(song => this.state.currentSong === song);
    const newIndex = Math.min(this.state.album.songs.length-1, currentIndex + 1);
    const newSong = this.state.album.songs[newIndex];
    this.setSong(newSong);
    this.play(newSong);
  }

  handleTimeChange(e) {
    const newTime = this.audioElement.duration * e.target.value;
    this.audioElement.currentTime = newTime;
    this.setState({ currentTime: newTime });
  }

  handleVolumeChange(e) {
    const newVolume = e.target.value;
    this.audioElement.volume = newVolume;
    this.setState({ volume : newVolume });
  }

  formatTime(time) {
    var mins = Math.trunc(time / 60);
    var secs = Math.round(time % 60) < 10 ? '0' + Math.round(time % 60) : Math.round(time % 60);
    return isNaN(time) ? "-:--" : mins + ":" + secs;
  }

  bgStyle(bg) {
    return {background: 'url(' + bg + ')' };
  }

  hoverOn() {
    this.setState({ hover : true });
  }

  hoverOff() {
    this.setState({ hover : false });
  }

  buttonStyle() {
  }

  render() {
    return(
      <section className="album">
        <section id="album-card" className="mdl-card mdl-shadow--4dp">
          <div className="mdl-card__title mdl-card--expand" style={this.bgStyle(this.state.album.albumCover)} >
            <h2 className="mdl-card__title-text">{this.state.album.title}</h2>
          </div>
          <div className="artist mdl-card__supporting-text">
            {this.state.album.artist}
          </div>
          <div className="album-info mdl-card__supporting-text">
            {this.state.album.releaseInfo}
          </div>
          <div className="album-songs">
            <table id="song-list">
              <colgroup>
                <col id="song-number-column" />
                <col id="song-title-column" />
                <col id="song-duration-column" />
              </colgroup>
              <tbody>
                {
                  this.state.album.songs.map( (song, index) =>
                    <tr className="song" key={index} onMouseEnter={() => this.hoverOn()} onMouseLeave={() => this.hoverOff()} onClick={() => this.handleSongClick(song)} >
                      <td className="song-actions mdl-data-table__cell--non-numeric">
                        <button className="mdl-button mdl-js-button mdl-button--raised mdl-js-ripple-effect mdl-button--accent" >
                          <span className="song-number" style={{display: this.state.hover || this.state.isPlaying ? "none" : ""}}>{index+1}</span>
                          <span className={this.state.isPlaying ? "ion-pause" : "ion-play"} style={{display: this.state.hover || this.state.isPlaying ? "" : "none"}}></span>
                        </button>
                      </td>
                      <td>{song.title}</td>
                      <td>{this.formatTime(song.duration)}</td>
                    </tr>
                  )
                }
              </tbody>
            </table>
          </div>
        </section>

        <PlayerBar
        isPlaying={this.state.isPlaying}
        currentSong={this.state.currentSong}
        currentTime={this.audioElement.currentTime}
        duration={this.audioElement.duration}
        volume={this.audioElement.volume}
        handleSongClick={() => this.handleSongClick(this.state.currentSong)}
        handlePrevClick={() => this.handlePrevClick()}
        handleNextClick={() => this.handleNextClick()}
        handleTimeChange={(e) => this.handleTimeChange(e)}
        handleVolumeChange={(e) => this.handleVolumeChange(e)}
        formatTime={(time) => this.formatTime(time)}
        />
      </section>
    );
  }
}

export default Album;
