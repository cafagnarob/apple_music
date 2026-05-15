import { Card } from "react-bootstrap"

const SingleCaroItems = (props) => {
  return (
    <>
      <Card style={{ width: "180px" }} className="w-50 pe-3 bg-transparent">
        <Card.Body>
          <Card.Title className="text-light m-0 p-0 fw-bold ">
            {props.text}
          </Card.Title>
          <Card.Text className="text-light fw-light text-truncate ">
            {props.subtext}
          </Card.Text>
        </Card.Body>
        <Card.Img variant="top" src={props.src} className="rounded-4 w-100" />
      </Card>
    </>
  )
}
export default SingleCaroItems
