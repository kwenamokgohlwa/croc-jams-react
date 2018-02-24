import React from 'react';

const Landing = () => (
  <section className="landing">
    <section className="hero">
      <h1 className="hero-title">Turn the music up</h1>
    </section>
    <section className="selling-points">
      <div className="point mdl-card mdl-shadow--4dp">
        <div className="point-icon mdl-card__supporting-text">
          <i className="material-icons">music_note</i>
        </div>
        <div className="mdl-card__title">
          <h2 className="point-title mdl-card__title-text">Choose your music</h2>
        </div>
        <div className="mdl-card__supporting-text">
          <p className="point-description">The world is full of music, why should you have to listen to music that someone esle chose?</p>
        </div>
      </div>
      <div className="point mdl-card mdl-shadow--4dp">
        <div className="mdl-card__supporting-text">
          <i className="point-icon material-icons">settings_backup_restore</i>
        </div>
        <div className="mdl-card__title">
          <h2 className="point-title mdl-card__title-text">Unlimited, streaming, ad-free</h2>
        </div>
        <div className="mdl-card__supporting-text">
          <p className="point-description">No arbitrary limits. No distrctions.</p>
        </div>
      </div>
      <div className="point mdl-card mdl-shadow--4dp">
        <div className="mdl-card__supporting-text">
          <i className="point-icon material-icons">phonelink_ring</i>
        </div>
        <div className="mdl-card__title">
          <h2 className="point-title mdl-card__title-text">Mobile enabled</h2>
        </div>
        <div className="mdl-card__supporting-text">
          <p className="point-description">Listen to your music on the go. This streaming service is available on all mobile platforms.</p>
        </div>
      </div>
    </section>
  </section>
);

export default Landing;
