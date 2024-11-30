import Header_Section from "../../interfaces"
import '../../App.css'

const HeaderElement = ({headerName}: Header_Section) => {
  return (
    <div className="headerName">{headerName}</div>
  )
}

export default HeaderElement