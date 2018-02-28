import React, { Component } from 'react';
import Slider from 'material-ui/Slider';

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
          <span className="current-time">{this.props.formatTime(this.props.currentTime)}</span>
          <span className="total-time">{this.props.formatTime(this.props.duration)}</span>
            <div className="seek-bar">
              <Slider
              value={(this.props.currentTime / this.props.duration) || 0}
              onChange={this.props.handleTimeChange}
              />
            </div>

        </section>
        <section id="volume-control">
            <i className="volume-label material-icons">volume_down</i>
            <i className="volume-label material-icons">volume_up</i>
            <div className="seek-bar">
              <Slider
                value={this.props.volume}
                onChange={this.props.handleVolumeChange}
              />
            </div>

        </section>
      </section>
    );
  }
}

export default PlayerBar;
