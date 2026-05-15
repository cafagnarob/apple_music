let audio = null

export const playAudio = (url) => {
  if (!url) return

  if (audio) {
    audio.pause()
  }

  audio = new Audio(url)
  audio.play()
}

export const pauseAudio = () => {
  if (audio) {
    audio.pause()
  }
}
