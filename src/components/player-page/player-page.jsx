import React, {useEffect, useRef, useState} from 'react';
import PropTypes from "prop-types";
import {connect} from 'react-redux';
import {useParams, useHistory} from 'react-router-dom';
import {getFilms} from '../../store/data/selectors';
import {getTimeLeft} from "../../utils/utils";
import {PLAYER_BACKGROUND_COLOR} from "../../const";

const PlayerPage = ({films}) => {
  const [isPlay, setIsPlay] = useState(false);
  const [progressBarValue, setProgressBarValue] = useState(0);
  const [timeLeft, setTimeLeft] = useState(` `);
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

  const handleFullScreenButtonClick = () => {
    videoRef.current.requestFullscreen();
  };

  const handleProgressBarUpdate = () => {
    setProgressBarValue((videoRef.current.currentTime / videoRef.current.duration) * 100);
    setTimeLeft(getTimeLeft(videoRef.current.duration - videoRef.current.currentTime));
  };

  return (
    <div className="player" style={{backgroundColor: PLAYER_BACKGROUND_COLOR}}>
      <video
        src={`${film.video_link}`}
        ref={videoRef}
        muted={false}
        poster={`${film.background_image}`}
        width={`100%`}
        height={`100%`}
        onClick={handlePlayButtonClick}
        onTimeUpdate={handleProgressBarUpdate}
      />

      <button type="button" className="player__exit" onClick={() => history.goBack()} >Exit</button>

      <div className="player__controls">
        <div className="player__controls-row">
          <div className="player__time">
            <progress className="player__progress" value={progressBarValue} max="100"/>
            <div className="player__toggler" style={{left: `${progressBarValue}%`}}>Toggler</div>
          </div>
          <div className="player__time-value">{timeLeft}</div>
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

          <button
            type="button"
            className="player__full-screen"
            onClick={handleFullScreenButtonClick}>
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
