import { useState } from "react"
import { useDispatch } from "react-redux"
import { getSongAction } from "../redux/action.js/getSong"
import {
  Button,
  Container,
  Form,
  Nav,
  Navbar,
  NavDropdown,
} from "react-bootstrap"
import { IoArrowDownCircleOutline, IoPeopleOutline } from "react-icons/io5"
import { CiBellOn } from "react-icons/ci"
import { BiCollection, BiSearch } from "react-icons/bi"
import { GoHomeFill } from "react-icons/go"
import { FaSpotify } from "react-icons/fa"

const NavbarApple = () => {
  const [localQuery, setLocalQuery] = useState("")
  const dispatch = useDispatch()

  const handleSearch = () => {
    if (!localQuery.trim()) return

    dispatch(getSongAction(localQuery))
  }

  return (
    <Navbar className="bg-black">
      <Container fluid={true}>
        <div className="d-flex align-items-center">
          <NavDropdown
            title="R"
            id="basic-nav-dropdown"
            className="bg-danger rounded-circle fw-bold p-2"
          >
            <NavDropdown.Item href="#action/3.1">
              <Nav.Link href="#link">
                <div
                  className="bg-dark rounded-pill d-flex align-items-center px-3 py-1 w-100"
                  data-bs-theme="dark"
                >
                  <Form.Control
                    id="search-input"
                    type="text"
                    placeholder="Che canzone vuoi ascoltare ?"
                    className="bg-transparent border-0 text-white shadow-none p-0 search-input"
                    value={localQuery}
                    onChange={(e) => setLocalQuery(e.target.value)}
                    onKeyDown={(e) => {
                      if (e.key === "Enter") {
                        handleSearch()
                      }
                    }}
                  />
                </div>
              </Nav.Link>
            </NavDropdown.Item>
          </NavDropdown>
          <Navbar.Brand href="#home">
            <img
              src="src/assets/assets (3)/assets/logos/music.svg"
              alt=""
              className="text-light"
            />
          </Navbar.Brand>
        </div>
        <div className="d-flex align-items-center "></div>
        <div className="d-flex">
          <div className="d-none d-xl-flex me-3">
            {/* <SpotifyBotton
              text="Esplora Premium"
              className="rounded-pill bg-light text-black fw-bold border-0"
            /> */}
            <Button className="rounded-pill bg-black text-light fw-bold border-light ms-3 ">
              <IoArrowDownCircleOutline className="me-2" />
              Installa app
            </Button>
          </div>
          <div className="d-flex justify-content-end ">
            <Nav.Link href="#home">
              <CiBellOn className="fs-1  text-light  p-1 me-3 d-none d-md-flex" />
            </Nav.Link>
            <Nav.Link href="#home">
              <IoPeopleOutline className="fs-1 text-light  p-1 me-3 d-none d-md-flex " />
            </Nav.Link>
          </div>
        </div>
      </Container>
    </Navbar>
  )
}
export default NavbarApple
