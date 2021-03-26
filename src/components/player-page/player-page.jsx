import React, {useEffect, useRef, useState} from 'react';
import PropTypes from "prop-types";
import {connect} from 'react-redux';
import {useParams, useHistory} from 'react-router-dom';
import {getFilms} from '../../store/data/selectors';

const PlayerPage = ({films}) => {
  const [isPlay, setIsPlay] = useState(false);
  const videoRef = useRef();
  const history = useHistory();
  const {id} = useParams();
  const film = films.find((item) => item.id === parseInt(id, 10));

  useEffect(() => {
    if (isPlay) {
      videoRef.current.play();
      return;
    }

    videoRef.current.pause();
  }, [isPlay]);

  const handlePlayButtonClick = () => {
    setIsPlay(!isPlay);
  };

  return (
    <div className="player">
      <video
        src={`${film.video_link}`}
        ref={videoRef}
        muted={false}
        poster={`${film.background_image}`}
        width={`100%`}
        height={`100%`}
        onClick={handlePlayButtonClick}
      />

      <button type="button" className="player__exit" onClick={() => history.goBack()} >Exit</button>

      <div className="player__controls">
        <div className="player__controls-row">
          <div className="player__time">
            <progress className="player__progress" value="30" max="100"/>
            <div className="player__toggler" style={{left: `30%`}}>Toggler</div>
          </div>
          <div className="player__time-value">1:30:29</div>
        </div>

        <div className="player__controls-row">
          {isPlay ?
            <button
              type="button"
              className="player__play"
              onClick={handlePlayButtonClick}>
              <svg viewBox="0 0 14 21" width="14" height="21">
                <use xlinkHref="#pause"/>
              </svg>
              <span>Pause</span>
            </button> :
            <button
              type="button"
              className="player__play"
              onClick={handlePlayButtonClick}>
              <svg viewBox="0 0 19 19" width="19" height="19">
                <use xlinkHref="#play-s"/>
              </svg>
              <span>Play</span>
            </button>
          }
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

const mapStateToProps = (state) => ({
  films: getFilms(state)
});

export {PlayerPage};
export default connect(mapStateToProps, null)(PlayerPage);
