export const GET_SONGS = "GET_SONGS"

export const getSongAction = (query) => {
  return (dispatch) => {
    fetch("https://striveschool-api.herokuapp.com/api/deezer/search?q=" + query)
      .then((res) => {
        if (res.ok) {
          return res.json()
        } else {
          throw new Error("errore nella fetch")
        }
      })
      .then((data) => {
        console.log(data)
        dispatch({
          type: GET_SONGS,
          payload: data.data,
        })
      })

      .catch((err) => {
        console.log("errore", err)
      })
  }
}
