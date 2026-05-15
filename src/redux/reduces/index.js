import { SET_QUERY } from "../action.js/getQuery"
import { GET_SONGS } from "../action.js/getSong"

const initialState = {
  song: [],
  query: "",
  queryHistory: [],
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

    default:
      return state
  }
}
