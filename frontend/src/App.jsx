import {Routes, Route} from "react-router-dom"
import Signup from "./pages/signup/Signup"
import Signin from "./pages/signin/Signin"
import Send from "./pages/send/Send"
import Dashboard from "./pages/dashboard/Dashboard"
function App() {

  return (
    <div className="h-screen">
        <Routes>
          <Route path="/signup" element={<Signup/>} />
          <Route path="/signin" element={<Signin/>} />
          <Route path="/send" element={<Send/>} />
          <Route path="/dashboard" element={<Dashboard/>} />

        </Routes>
    </div>
  )
}

export default App
