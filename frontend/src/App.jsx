import { BrowserRouter,Routes, Route } from "react-router-dom";
import { Signup } from "./components/pages/Signup";
import { Signin } from "./components/pages/Signin";
import Dashboard from "./components/pages/Dashboard";
import SendMoney from "./components/pages/SendMoney";
import './App.css' 
import Update from "./components/pages/Update";
export default function App() {
  return (
    <div className="">
      <BrowserRouter>
        <Routes>
          <Route path="/signup" element={<Signup />}></Route>
          <Route path="/signin" element={<Signin />}></Route>
          
          <Route path="/dashboard" element={<Dashboard />}></Route>
          <Route path="/send" element={<SendMoney />}></Route>
          <Route path="/update" element={<Update />}></Route>
        </Routes>
      </BrowserRouter>
    </div>
  )
} 