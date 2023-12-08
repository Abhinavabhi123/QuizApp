import {Routes,Route} from "react-router-dom"
import UserLogin from "../Pages/User/UserLogin"
import Home from "../Pages/User/Home"

export default function UserRoutes() {
  return (
    <Routes>
      <Route path="/" element={<UserLogin/>}/>
      <Route path="/home" element={<Home/>}/>
    </Routes>
  )
}
