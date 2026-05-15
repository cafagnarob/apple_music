import { Col, Container, Row } from "react-bootstrap"
import CardGroup from "./cardGroup"
import FirstCardCaro from "./firstCardCaro"
import { useSelector } from "react-redux"
import CardGroupFetch from "./cardGroupFetch"

const Main = () => {
  const songs = useSelector((state) => state.song)
  return (
    <>
      <Container fluid className="p-5 bg-black">
        <Row>
          <Col className="text-light">
            <h5 className="fw-bold fs-3">Novità</h5>
          </Col>
          <hr />
          <FirstCardCaro />
          <div>
            <CardGroup text={"Nuovi episodi radio"} />
          </div>
          <div>
            <CardGroupFetch text={"Nuove uscite"} data={songs} />
          </div>
        </Row>
      </Container>
    </>
  )
}
export default Main
