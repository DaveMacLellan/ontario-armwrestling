import React from 'react';
import PropTypes from 'prop-types';
import './YoutubeEmbed.css';

const YoutubeEmbed = ({ embedId }) => (
    <div className='video-responsive'>
        <iframe
            width='853'
            height='480'
            src={`https://www.youtube.com/embed/${embedId}/embed`}
            frameborder="0"
            title="Embedded youtube"
        />        
    </div>
);

YoutubeEmbed.propTypes = {
    embedId: PropTypes.string.isRequired
  };
  
export default YoutubeEmbed;