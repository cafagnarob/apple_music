import { Col, Container, Row } from "react-bootstrap"
import SingleCard from "./singleCard"

const CardGroup = (props) => {
  const cards = [
    {
      img: "src/assets/assets/assets/images/2a.png",
      text: "Prologo con Abuelo",
    },
    {
      img: "src/assets/assets/assets/images/2b.png",
      text: "The Wander",
    },
    {
      img: "src/assets/assets/assets/images/2c.png",
      text: "Michael Bublè & Carly Pearce",
    },
    {
      img: "src/assets/assets/assets/images/2d.png",
      text: "Stephan Moccio: The Zane Lowe Interview",
      hidden: true,
    },
    {
      img: "src/assets/assets/assets/images/2e.png",
      text: "Chart Spotlight: Julia Michaels",
      hidden: true,
    },
  ]

  return (
    <>
      <Container fluid>
        <h4 className="text-light mt-5">{props.text}</h4>
        <Row>
          <div className="d-flex gap-3 gap-lg-5">
            {cards.map((card, index) => (
              <Col xs={4} xl={2}>
                <SingleCard
                  key={index}
                  img={card.img}
                  text={card.text}
                  className=""
                />
              </Col>
            ))}
          </div>
        </Row>
      </Container>
    </>
  )
}

export default CardGroup
