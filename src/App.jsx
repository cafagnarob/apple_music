import NavbarApple from "./component/navbar"
import "bootstrap/dist/css/bootstrap.min.css"
import Sidebar from "./component/sideBar"
import Main from "./component/main"
import { Col, Container, Row } from "react-bootstrap"
import { useState } from "react"
import Footer from "./component/footer"
function App() {
  const [sidebarOpen, setSidebarOpen] = useState(false)
  return (
    <>
      <Container fluid className="m-0 p-0">
        <Row>
          <Col xs={0} lg={2}>
            <Sidebar sidebarOpen={sidebarOpen} />
          </Col>
          <Col xs={12} lg={10} className="m-0 p-0">
            <NavbarApple setSidebarOpen={setSidebarOpen} />
            <Main />
            <Footer />
          </Col>
        </Row>
      </Container>
    </>
  )
}

export default App
