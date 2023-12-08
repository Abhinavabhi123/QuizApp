import {Routes,Route} from "react-router-dom"
import AdminLogin from "../Pages/Admin/AdminLogin"


export default function AdminRoutes() {
  return (
    <Routes>
        <Route path="/" element={<AdminLogin/>}/>
       

    </Routes>
  )
}
