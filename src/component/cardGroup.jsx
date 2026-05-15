import SingleCard from "./singleCard"

const CardGroup = (props) => {
  return (
    <>
      <h4 className="text-light">{props.text}</h4>
      <div className="d-flex gap-4">
        <SingleCard
          img="src\assets\assets\assets\images\2a.png"
          text="Prologo con Abuelo"
        />
        <SingleCard
          img="src\assets\assets\assets\images\2b.png"
          text="The Wander"
        />
        <SingleCard
          img="src\assets\assets\assets\images\2c.png"
          text="Michael Bublè & Carly Pearce"
        />
        <SingleCard
          img="src\assets\assets\assets\images\2d.png"
          text="Stephan Moccio: The Zane Lowe Interview "
        />
        <SingleCard
          img="src\assets\assets\assets\images\2e.png"
          text="Chart Spotlight: Julia Michaels"
        />
      </div>
    </>
  )
}
export default CardGroup
