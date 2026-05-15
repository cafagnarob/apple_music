import { useDispatch } from "react-redux"
import { getSongAction } from "../redux/action.js/getSong"
import { useState } from "react"
import { Col, Container, Form, Row } from "react-bootstrap"

import { BiSearch } from "react-icons/bi"
import { HiOutlineSquares2X2 } from "react-icons/hi2"
import SidebarList from "./sidebarList"
import { GoHomeFill } from "react-icons/go"
import { IoRadioSharp } from "react-icons/io5"
import { setQueryAction } from "../redux/action.js/getQuery"

const Sidebar = ({ sidebarOpen }) => {
  const [localQuery, setLocalQuery] = useState("")
  const dispatch = useDispatch()

  const handleSearch = () => {
    if (!localQuery.trim()) return

    dispatch(getSongAction(localQuery))
    dispatch(setQueryAction(localQuery))
  }
  return (
    <>
      <Container
        fluid
        className={`
        position-fixed top-0 start-0
        bg-dark
        min-vh-100
        pt-5
        d-lg-block
        ${sidebarOpen ? "d-block" : "d-none "}
        
      `}
        style={{
          width: sidebarOpen ? "205px" : "250px",
          zIndex: 2,
        }}
      >
        <Row>
          <Col
            xs={12}
            className="bg-dark d-flex flex-column align-items-start min-vh-100 pt-5"
          >
            <img
              src="src\assets\assets\assets\logos\music.svg"
              alt="logo-music"
              className="w-50 d-none d-lg-block"
            />
            <img
              src="src\assets\assets\assets\logos\apple.svg"
              alt="logo-music"
              className="w-25 d-block d-lg-none"
            />

            <div
              className="bg-dark rounded-2 d-flex align-items-center my-5 w-100 border border-1 border-light"
              data-bs-theme="dark"
            >
              <BiSearch className="text-danger mx-2" onClick={handleSearch} />
              <Form.Control
                id="search-input"
                type="text"
                placeholder="cerca"
                className="bg-transparent border-0 text-white shadow-none p-0 search-input my-1 "
                value={localQuery}
                onChange={(e) => setLocalQuery(e.target.value)}
                onKeyDown={(e) => {
                  if (e.key === "Enter") {
                    handleSearch()
                  }
                }}
              />
            </div>
            <div>
              <SidebarList
                text="home"
                icon={<GoHomeFill className="text-danger me-3 fs-4 my-3" />}
              />
              <SidebarList
                text="novità"
                icon={
                  <HiOutlineSquares2X2 className="text-danger me-3 fs-4 my-3 " />
                }
              />
              <SidebarList
                text="radio"
                icon={<IoRadioSharp className="text-danger me-3 fs-4 my-3" />}
              />
            </div>
          </Col>
        </Row>
      </Container>
    </>
  )
}
export default Sidebar
