const songsReducer = () => {
  return [
    { title: "Smells like teen spririt", duration: "4:32" },
    { title: "Hey macarena", duration: "2:42" },
    { title: "Wonder boy", duration: "1:33" },
    { title: "How we met on halloween", duration: "7:26" },
    { title: "Fear of the dark", duration: "4:52" }
  ];
};

const SelectedSongReducer = (selectedSong = null, action) => {
  if (action.type === "SONG_SELECTED") {
    return action.payload;
  }

  return selectedSong;
};
