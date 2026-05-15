import { useEffect } from "react"
import { pauseAudio, playAudio } from "../js/audioManager"
import { useSelector } from "react-redux"

const GlobalPlayer = () => {
  const { currentSong, isPlaying } = useSelector((state) => state)

  useEffect(() => {
    if (currentSong && isPlaying) {
      playAudio(currentSong.preview)
    }

    if (!isPlaying) {
      pauseAudio()
    }
  }, [currentSong, isPlaying])

  return null
}
export default GlobalPlayer
