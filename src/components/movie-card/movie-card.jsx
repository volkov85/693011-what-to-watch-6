import React, {useState, useEffect} from 'react';
import PropTypes from 'prop-types';
import VideoPlayer from '../video-player/video-player';
import VideoCover from '../video-cover/video-cover';

const MovieCard = ({id, name, previewImage, previewVideoLink, handleMouseEnterCard, showVideo}) => {
  const [toggle, setToggle] = useState(false);

  useEffect(() => {
    let timerId = null;

    if (showVideo) {
      timerId = setTimeout(() => (setToggle(true)), 1000);
    }

    return () => {
      if (timerId !== null) {
        clearTimeout(timerId);
      }
      setToggle(false);
    };
  }, [showVideo]);

  return (
    <article className="small-movie-card catalog__movies-card"
      onMouseEnter={() => handleMouseEnterCard(id)}
      onMouseLeave={() => handleMouseEnterCard(null)}
    >
      {!toggle ?
        <VideoCover
          previewImage={previewImage}
          name={name}
        /> :
        <VideoPlayer
          previewVideoLink={previewVideoLink}
          previewImage={previewImage}
          muted={true}
          auto={true}
        />}
    </article>
  );
};

MovieCard.propTypes = {
  id: PropTypes.number.isRequired,
  name: PropTypes.string.isRequired,
  previewImage: PropTypes.string.isRequired,
  previewVideoLink: PropTypes.string.isRequired,
  handleMouseEnterCard: PropTypes.func.isRequired,
  showVideo: PropTypes.bool.isRequired
};

export default MovieCard;
