import { Col, Container, Row } from "react-bootstrap"
import CardGroup from "./cardGroup"
import FirstCardCaro from "./firstCardCaro"
import { useDispatch, useSelector } from "react-redux"
import CardGroupFetch from "./cardGroupFetch"
import { useEffect } from "react"
import { getSongAction } from "../redux/action.js/getSong"
import LastCards from "./Lastcard"
import Footer from "./footer"

const Main = () => {
  const dispatch = useDispatch()

  useEffect(() => {
    dispatch(getSongAction("eminem"))
  }, [])

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
            <CardGroupFetch data={songs} />
          </div>
          <div>
            <LastCards />
          </div>
        </Row>
      </Container>
    </>
  )
}
export default Main
