import { Col } from "react-bootstrap"

const SingleCaroItems = (props) => {
  return (
    <>
      <Col xs={6} className="w-50 pe-3">
        <p className="text-light m-0 p-0 fw-bold">{props.text}</p>
        <p className="text-light fw-light">{props.subtext}</p>
        <img src={props.src} alt="1a" className="rounded-4 w-100" />
      </Col>
    </>
  )
}
export default SingleCaroItems
