import {Routes, Route} from "react-router-dom"
import Signup from "./pages/signup/Signup"
function App() {

  return (
    <div>
        <Routes>
          <Route path="/" element={<Signup/>} />
        </Routes>
    </div>
  )
}

export default App
