import React, {useState} from 'react';
import PropTypes from 'prop-types';
import VideoPlayer from '../video-player/video-player';
import VideoCover from '../video-cover/video-cover';

const MovieCard = ({name, previewImage, previewVideoLink}) => {
  const [toggle, setToggle] = useState(true);

  const handleMouseEnter = () => {
    setToggle(false);
  };
  const handleMouseLeave = () => {
    setToggle(true);
  };

  return (
    <article className="small-movie-card catalog__movies-card" onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave}>
      {toggle ?
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
  previewVideoLink: PropTypes.string.isRequired
};

export default MovieCard;
