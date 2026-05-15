import { GET_SONGS } from "../action.js/getSong"

const initialState = {
  song: [],
}

export const mainReducer = (state = initialState, action) => {
  switch (action.type) {
    case GET_SONGS:
      return {
        ...state,
        song: action.payload,
      }

    default:
      return state
  }
}
