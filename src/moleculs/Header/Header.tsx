import HeaderElement from "../../atoms/HeaderElement/HeaderElement"
import ModalWindow from "../../atoms/ModalWindow/ModalWindow";
import '../../App.css'

const Header = () => {

  return (
    <>
      <header>
          <nav>
            <HeaderElement headerName="Home"/>
            <HeaderElement headerName="About"/>
            <HeaderElement headerName="Services"/>
            <ModalWindow/>
          </nav>
      </header>
    </>
  )
}

export default Header