import { Outlet } from "react-router-dom"
import Burger from "../Burger/Burger"
import CallButton from "../CallButton/CallButton"
import CoverLogo from "../CoverLogo/CoverLogo"
import Footer from "../Footer/Footer"
import Header from "../Header/Header"
import ModalForm from "../ModalForm/ModalForm"
import './AppRouter.css'

const AppRouter = () => {
 

  return (
    <div className="global__container">
      <Header /> 
      <CoverLogo />
      <main className="main">
      <Outlet />
    </main>
    <Footer />
    <Burger />
    <CallButton />
    <ModalForm />
    </div>
  )
}

export default AppRouter