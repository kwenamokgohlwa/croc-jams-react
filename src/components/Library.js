import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import albumData from './../data/albums';

class Library extends Component {
  constructor(prop) {
    super(prop);
    this.state = { albums: albumData }
  }

  bgStyle(bg) {
    return {background: 'url("' + bg + '") bottom' };
  }

  render() {
    return (
      <section className='library'>
        {
          this.state.albums.map( (album, index) =>
            <Link to={`/album/${album.slug}`} key={index} >
              <div className="library-album mdl-card mdl-shadow--4dp">
                <div className="mdl-card__title mdl-card--expand" style={this.bgStyle(album.albumCover)} >
                  <h2 className="mdl-card__title-text">{album.title}</h2>
                </div>
                <div className="artist mdl-card__supporting-text">
                  {album.artist}
                </div>
                <div className="album-info mdl-card__supporting-text">
                  {album.songs.length} songs
                </div>
              </div>
            </Link>
          )
        }
      </section>
    );
  }
}

export default Library;
