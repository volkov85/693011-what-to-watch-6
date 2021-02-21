import React from 'react';
import PropTypes from 'prop-types';

const VideoPlayer = ({previewVideoLink, previewImage, muted, auto}) => {
  return (
    <video
      height="175px"
      width="280px"
      autoPlay={auto}
      muted={muted}
      controls
      poster={previewImage}>
      <source
        src={previewVideoLink}
        type="video/mp4"
      />
    </video>
  );
};

VideoPlayer.propTypes = {
  previewVideoLink: PropTypes.string.isRequired,
  previewImage: PropTypes.string.isRequired,
  muted: PropTypes.bool.isRequired,
  auto: PropTypes.bool.isRequired
};

export default VideoPlayer;
