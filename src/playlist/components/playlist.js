import React from 'react';
// import Media from './media.js';
import './playlist.css';
import MediaContainer from '../container/media';

function Playlist(props) {
  return (
    <div className="Playlist">
      {
        props.playlist.map(mediaId => {
          return <MediaContainer
          openModal={props.handleOpenModal}
          id={mediaId}
          key={mediaId} />
        })
      }
    </div>
  )
}

export default Playlist;
