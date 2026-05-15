const SidebarList = (props) => {
  return (
    <div className="d-flex align-items-center">
      {props.icon}
      <h5 className="text-light p-0 m-0">{props.text}</h5>
    </div>
  )
}
export default SidebarList
