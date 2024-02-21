import { BrowserRouter,Routes, Route } from "react-router-dom";
import { Signup } from "../components/Signup";
export default function App() {
  return (
    <div className="">
      <BrowserRouter>

        <Routes>
          <Route path="/signup" element={<Signup />}></Route>
          {/* <Route path="/signin" element={<Signin />}></Route>
          <Route path="/dashboard" element={<Dashboard />}></Route>
          <Route path="/send" element={<SendMoney />}></Route> */}
        </Routes>
      </BrowserRouter>
    </div>
  )
} 