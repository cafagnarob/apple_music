import SingleCard from "./singleCard"

const CardGroupFetch = (props) => {
  return (
    <>
      <h4 className="text-light">{props.text}</h4>
      <div className="d-flex gap-4">
        <div className="d-flex gap-4 flex-wrap">
          {props.data?.slice(0, 10).map((song, index) => (
            <SingleCard
              key={index}
              img={song.album?.cover}
              text={song.title_short}
              subtext={song.artist.name}
            />
          ))}
        </div>
      </div>
    </>
  )
}
export default CardGroupFetch
