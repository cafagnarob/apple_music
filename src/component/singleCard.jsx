import { Card } from "react-bootstrap"

const SingleCard = (props) => {
  return (
    <>
      <Card className=" border-0 bg-transparent" style={{ width: "18%" }}>
        <Card.Img variant="top" src={props.img} className="m-0 p-0" />
        <Card.Body className="m-0 pt-1 p-0">
          <Card.Title className="fw-light fs-6 text-light m-0 p-0">
            {props.text}
          </Card.Title>
          <Card.Text className="text-secondary m-0 p-0">
            {props.subtext}
          </Card.Text>
        </Card.Body>
      </Card>
    </>
  )
}
export default SingleCard
