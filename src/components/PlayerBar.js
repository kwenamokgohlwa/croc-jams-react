import React, { Component } from 'react';

class PlayerBar extends Component {
  render() {
    return(
      <section className="player-bar">
        <section id="buttons">
          <button id="previous" className="mdl-button mdl-js-button mdl-button--fab mdl-button--colored" onClick={this.props.handlePrevClick}>
            <i className="material-icons">skip_previous</i>
          </button>
          <button id="play-pause" className="mdl-button mdl-js-button mdl-button--fab mdl-button--colored" onClick={this.props.handleSongClick} >
             <i className={this.props.isPlaying ? 'ion-pause' : 'ion-play'}></i>
          </button>
          <button id="next" className="mdl-button mdl-js-button mdl-button--fab mdl-button--colored" onClick={this.props.handleNextClick}>
            <i className="material-icons">skip_next</i>
          </button>
        </section>
        <section id="time-control">
          <div className="current-time">{this.props.formatTime(this.props.currentTime)}</div>
            <input
            type="range"
            className="mdl-slider mdl-js-slider seek-bar"
            value={(this.props.currentTime / this.props.duration) || 0}
            max="1"
            min="0"
            step="0.01"
            onChange={this.props.handleTimeChange}
            />
          <div className="total-time">{this.props.formatTime(this.props.duration)}</div>
        </section>
        <section id="volume-control">
            <i className="material-icons">volume_up</i>
            <input
            type="range"
            className="mdl-slider mdl-js-slider seek-bar"
            value={this.props.volume}
            max="1"
            min="0"
            step="0.01"
            onChange={this.props.handleVolumeChange}
            />
            <i className="material-icons">volume_down</i>
        </section>
      </section>
    );
  }
}

export default PlayerBar;
