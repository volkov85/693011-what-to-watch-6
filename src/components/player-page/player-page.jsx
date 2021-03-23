import React from 'react';
import PropTypes from "prop-types";
import {connect} from 'react-redux';
import {useParams} from 'react-router-dom';

const PlayerPage = ({films}) => {
  const {id} = useParams();
  const film = films.find((item) => item.id === parseInt(id, 10));

  return (
    <div className="player">
      <video src={film.video_link} className="player__video" poster="img/player-poster.jpg"/>

      <button type="button" className="player__exit">Exit</button>

      <div className="player__controls">
        <div className="player__controls-row">
          <div className="player__time">
            <progress className="player__progress" value="30" max="100"/>
            <div className="player__toggler" style={{left: `30%`}}>Toggler</div>
          </div>
          <div className="player__time-value">1:30:29</div>
        </div>

        <div className="player__controls-row">
          <button type="button" className="player__play">
            <svg viewBox="0 0 19 19" width="19" height="19">
              <use xlinkHref="#play-s"/>
            </svg>
            <span>Play</span>
          </button>
          <div className="player__name">{film.name}</div>

          <button type="button" className="player__full-screen">
            <svg viewBox="0 0 27 27" width="27" height="27">
              <use xlinkHref="#full-screen"/>
            </svg>
            <span>Full screen</span>
          </button>
        </div>
      </div>
    </div>
  );
};

PlayerPage.propTypes = {
  films: PropTypes.array.isRequired
};

const mapStateToProps = ({DATA}) => ({
  films: DATA.films
});

export {PlayerPage};
export default connect(mapStateToProps, null)(PlayerPage);
