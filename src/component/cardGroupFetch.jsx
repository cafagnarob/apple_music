import { Col, Container, Row } from "react-bootstrap"
import SingleCard from "./singleCard"

const CardGroupFetch = (props) => {
  return (
    <>
      <Container fluid>
        <h4 className="text-light mt-5">{props.text}</h4>
        <Row>
          <div className="d-flex gap-3 gap-lg-5 ">
            {props.data?.slice(0, 10).map((song, index) => (
              <Col xs={4} xl={2}>
                <SingleCard
                  key={index}
                  img={song.album?.cover}
                  text={song.title_short}
                  subtext={song.artist.name}
                />
              </Col>
            ))}
          </div>
        </Row>
      </Container>
    </>
  )
}
export default CardGroupFetch
