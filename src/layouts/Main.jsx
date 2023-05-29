import { Outlet } from "react-router-dom"
import Navbar from "../components/shared/Navbar/Navbar"
import Container from "../components/shared/Container"


const Main = () => {
  return (
    <div>
      <Navbar></Navbar>
      <div className="pt-28">
        <Container>
          <Outlet></Outlet>
        </Container>
      </div>
    </div>
  )
}

export default Main
