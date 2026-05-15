export const SET_CURRENT_SONG = "SET_CURRENT_SONG"
export const PLAY = "PLAY"
export const PAUSE = "PAUSE"

export const setCurrentSong = (song) => ({
  type: SET_CURRENT_SONG,
  payload: song,
})

export const playSong = () => ({
  type: PLAY,
})

export const pauseSong = () => ({
  type: PAUSE,
})
