import NavbarApple from "./component/navbar"
import "bootstrap/dist/css/bootstrap.min.css"
import Sidebar from "./component/sideBar"
import Main from "./component/main"
import { Col, Container, Row } from "react-bootstrap"
function App() {
  return (
    <>
      <Container fluid className="m-0 p-0">
        <Row>
          <Col xs={2}>
            <Sidebar />
          </Col>
          <Col xs={10} className="m-0 p-0">
            <NavbarApple />
            <Main />
          </Col>
        </Row>
      </Container>
    </>
  )
}

export default App
