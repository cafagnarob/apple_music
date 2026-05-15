import { Carousel } from "react-bootstrap"
import SingleCaroItems from "./SingleCaroItems"

const FirstCardCaro = () => {
  return (
    <>
      <Carousel>
        <Carousel.Item>
          <div className="d-flex flex-row">
            <SingleCaroItems
              text="NUOVA STAZIONE RADIO"
              subtext="Rilassati, al resto pensiamo noi. Ascolta Apple Music Chill"
              src="src\assets\assets\assets\images\1a.png"
            />
            <SingleCaroItems
              text="NUOVA STAZIONE RADIO"
              subtext="Ecco la nuova casa della musica latina"
              src="src\assets\assets\assets\images\1b.png"
            />
          </div>
        </Carousel.Item>
        <Carousel.Item>
          <div className="d-flex flex-row">
            <SingleCaroItems
              text="NUOVA STAZIONE RADIO"
              subtext="Rilassati, al resto pensiamo noi. Ascolta Apple Music Chill"
              src="src\assets\assets\assets\images\1c.png"
            />
            <SingleCaroItems
              text="NUOVA STAZIONE RADIO"
              subtext="Rilassati, al resto pensiamo noi. Ascolta Apple Music Chill"
              src="src\assets\assets\assets\images\1a.png"
            />
          </div>
        </Carousel.Item>
      </Carousel>
    </>
  )
}
export default FirstCardCaro
