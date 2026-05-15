import { SET_QUERY } from "../action/getQuery"
import { GET_SONGS } from "../action/getSong"
import { PAUSE, PLAY, SET_CURRENT_SONG } from "../action/player"

const initialState = {
  song: [],
  query: "",
  queryHistory: [],

  currentSong: null,
  isPlaying: false,
}

export const mainReducer = (state = initialState, action) => {
  switch (action.type) {
    case GET_SONGS:
      return {
        ...state,
        song: action.payload,
      }
    case SET_QUERY:
      return {
        ...state,
        query: action.payload,
        queryHistory: [...state.queryHistory, action.payload],
      }
    case SET_CURRENT_SONG:
      return {
        ...state,
        currentSong: action.payload,
        isPlaying: true,
      }

    case PLAY:
      return {
        ...state,
        isPlaying: true,
      }

    case PAUSE:
      return {
        ...state,
        isPlaying: false,
      }

    default:
      return state
  }
}
