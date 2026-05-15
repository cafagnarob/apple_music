import { Alert } from "react-bootstrap"
import { IoIosArrowForward } from "react-icons/io"

const SingleLastCard = () => {
  return (
    <>
      {[
        "Esplora per genere",
        "Decenni",
        `ttività e stati d'animo`,
        "Worldwide",
        "Classifiche",
        "Audio spaziale",
        "Video musicali",
        "Nuovi artisti",
        "Hit del passato",
      ].map((text) => (
        <Alert
          key={text}
          variant="dark"
          className="text-danger bg-dark border-0 rounded-2 d-flex justify-content-between "
        >
          {text} <IoIosArrowForward />
        </Alert>
      ))}
    </>
  )
}
export default SingleLastCard
