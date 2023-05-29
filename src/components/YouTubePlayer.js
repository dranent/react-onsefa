import React from 'react';
import YouTube from 'react-youtube';
import { useMediaQuery } from 'react-responsive';

const YouTubePlayer = () => {
  const videoId = '4GCNluldT-Y';

  const isMobile = useMediaQuery({
    query: '(max-width: 768px)',
  });

  const playerWidth = isMobile ? '100%' : '720px';
  const playerHeight = isMobile ? '280px' : '405px';

  const opts = {
    height: playerHeight,
    width: playerWidth,
    playerVars: {
      autoplay: 1,
    },
  };

  return <center><YouTube videoId={videoId} opts={opts} /></center>;
};

export default YouTubePlayer;
