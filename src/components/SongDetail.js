import { connect } from "react-redux";

import React from "react";

const SongDetail = ({ song }) => {
  if (!song) {
    return <div>Select a song</div>;
  }
  return (
    <div className="ui">
      <h3>Details for:</h3>
      <p>
        Title: {song.title}
        <br />
        Duration: {song.duration}
      </p>
    </div>
  );
};
const mapSteteToProps = state => {
  return { song: state.selectedSong };
};
export default connect(mapSteteToProps)(SongDetail);
