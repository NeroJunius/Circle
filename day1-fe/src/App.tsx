import { BrowserRouter, Routes, Route} from "react-router-dom"
import { Home } from "./pages/Home"
import { ThreadDetail } from './components/ThreadDetail'

function App() {
  return (
    <BrowserRouter>
    <Routes>
      <Route path='/' element={<Home/>}/>
      <Route path='/:id' element={<ThreadDetail/>}/>
    </Routes>
    </BrowserRouter>
  )
}

export default App
