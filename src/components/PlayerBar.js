import React, { Component } from 'react';
import Slider from 'material-ui/Slider';

class PlayerBar extends Component {


  render() {
    return(
      <section className="player-bar">
        <section id="buttons">
          <button id="previous" className="mdl-button mdl-js-button mdl-button--raised mdl-js-ripple-effect mdl-button--accent" onClick={this.props.handlePrevClick}>
            <i className="material-icons md-18">skip_previous</i>
          </button>
          <button id="play-pause" className="mdl-button mdl-js-button mdl-button--raised mdl-js-ripple-effect mdl-button--accent" onClick={this.props.handleSongClick} >
             {
               this.props.isPlaying ?
               <i className="material-icons md-18">play_arrow</i> :
               <i className="material-icons md-18">pause</i>
             }
          </button>
          <button id="next" className="mdl-button mdl-js-button mdl-button--raised mdl-js-ripple-effect mdl-button--accent" onClick={this.props.handleNextClick}>
            <i className="material-icons md-18">skip_next</i>
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
