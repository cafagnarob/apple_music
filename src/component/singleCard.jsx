import { Card } from "react-bootstrap"
import { useDispatch, useSelector } from "react-redux"
import { pauseSong, playSong, setCurrentSong } from "../redux/action/player"

const SingleCard = (props) => {
  const isPlaying = useSelector((state) => state.isPlaying)
  const dispatch = useDispatch()
  return (
    <>
      <Card
        className=" border-0 bg-transparent "
        onClick={() => {
          if (isPlaying) {
            dispatch(pauseSong())
          } else {
            dispatch(
              setCurrentSong({
                title: props.text,
                preview: props.preview,
              }),
            )
            dispatch(playSong())
          }
        }}
      >
        <Card.Img variant="top" src={props.img} className="m-0 p-0" />
        <Card.Body className="m-0 pt-1 p-0">
          <Card.Title className="fw-light fs-6 text-light m-0 p-0 text-truncate">
            {props.text}
          </Card.Title>
          <Card.Text className="text-secondary m-0 p-0 text-truncate">
            {props.subtext}
          </Card.Text>
        </Card.Body>
      </Card>
    </>
  )
}
export default SingleCard
