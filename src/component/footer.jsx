import { Col, Row } from "react-bootstrap"

const Footer = () => {
  return (
    <>
      <Row>
        <Col lg={2}></Col>
        <Col lg={12} className="bg-dark text-light">
          <div>
            <p className=" ps-4 ps-lg-3 fs-6 mt-4">
              <b>Italia</b> | English(UK)
            </p>
          </div>
          <div className=" ps-4 ps-lg-3">
            <p>
              Copyright &copy 2024 <b>Apple inc.</b> Tutti i diritti
              riservati.{" "}
            </p>
          </div>
          <div className="mb-4 ps-4 ps-lg-3 ">
            <p>
              <b>Condizioni dei servizi internet</b> |
              <b> Apple Music e privacy</b> |<b> Avviso sui coockie</b> |
              <b> Supporto</b> |<b> Feedback</b> |
            </p>
          </div>
        </Col>
      </Row>
    </>
  )
}
export default Footer
