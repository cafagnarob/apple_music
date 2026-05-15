import { Col, Nav, Navbar, Row } from "react-bootstrap"

import { TiArrowShuffle } from "react-icons/ti"
import { FaPlay } from "react-icons/fa"
import { IoMdSkipBackward, IoMdSkipForward } from "react-icons/io"
import { RxLoop } from "react-icons/rx"
import ButtonAppleMusic from "./buttonAppleMusic"
import { FaVolumeHigh } from "react-icons/fa6"

const NavbarApple = () => {
  return (
    <Navbar expand="lg" className="bg-dark" data-bs-theme="dark">
      <Row className="w-100">
        <Nav className="w-100 d-flex align-items-center justify-content-between">
          <Col xs={3}>
            <div className="d-flex flex-row text-secondary gap-3  align-items-center justify-content-center">
              <TiArrowShuffle />
              <IoMdSkipBackward />
              <FaPlay className="fs-4" />
              <IoMdSkipForward />
              <RxLoop />
            </div>
          </Col>
          <Col xs={5} className="bg-secondary h-100">
            <Nav.Link href="#link" className="d-flex justify-content-center">
              <img
                src="src\assets\assets\assets\logos\apple.svg"
                alt="logo"
                className=""
              />
            </Nav.Link>
          </Col>

          <Col xs={2} className="d-flex justify-content-center">
            <FaVolumeHigh className="text-light fs-5  " />
          </Col>
          <Col xs={2} className="d-flex justify-content-end">
            <ButtonAppleMusic />
          </Col>
        </Nav>
      </Row>
    </Navbar>
  )
}
export default NavbarApple
