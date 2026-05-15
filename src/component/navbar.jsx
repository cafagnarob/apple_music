import { Col, Nav, Navbar, Row } from "react-bootstrap"

import { TiArrowShuffle } from "react-icons/ti"
import { FaPlay } from "react-icons/fa"
import { IoMdSkipBackward, IoMdSkipForward } from "react-icons/io"
import { RxLoop } from "react-icons/rx"
import ButtonAppleMusic from "./buttonAppleMusic"
import { FaVolumeHigh } from "react-icons/fa6"
import { HiMenuAlt4 } from "react-icons/hi"

const NavbarApple = (props) => {
  return (
    <Navbar
      expand="lg"
      className="bg-dark "
      data-bs-theme="dark"
      style={{
        zIndex: 3,
      }}
    >
      <Row className="w-100">
        <Nav className="w-100 d-flex  flex-row align-items-center justify-content-between">
          <Col xs={2} lg={3}>
            <div className="d-flex flex-row text-secondary gap-3  align-items-center justify-content-center  d-lg-none">
              <HiMenuAlt4
                className="text-danger"
                onClick={() => props.setSidebarOpen((prev) => !prev)}
              />
            </div>
            <div className=" flex-row text-secondary gap-3  align-items-center justify-content-center d-none d-lg-flex">
              <TiArrowShuffle />
              <IoMdSkipBackward />
              <FaPlay className="fs-4" />
              <IoMdSkipForward />
              <RxLoop />
            </div>
          </Col>
          <Col xs={8} lg={5} className=" h-100">
            <Nav.Link
              href="#link"
              className="d-flex justify-content-center bg-secondary h-100 d-none d-lg-flex"
            >
              <img
                src="src\assets\assets\assets\logos\apple.svg"
                alt="logo"
                className="d-none d-lg-flex"
              />
            </Nav.Link>
            <Nav.Link
              href="#link"
              className="d-flex justify-content-center bg-trasprent  "
            >
              <img
                src="src\assets\assets\assets\logos\music.svg"
                alt="logo"
                className="d-lg-none"
                style={{ width: "20%" }}
              />
            </Nav.Link>
          </Col>

          <Col xs={0} lg={2} className="d-flex justify-content-center">
            <FaVolumeHigh className="text-light fs-5 d-none d-lg-flex " />
          </Col>
          <Col xs={2} className="d-flex justify-content-end h-75">
            <ButtonAppleMusic />
          </Col>
        </Nav>
      </Row>
    </Navbar>
  )
}
export default NavbarApple
