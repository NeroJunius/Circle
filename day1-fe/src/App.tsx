
import { BrowserRouter, Routes, Route} from "react-router-dom"
import { Home } from './pages/home'
// import ThreadDetail from './components/ThreadDetail'

function App() {
  return (
    <BrowserRouter>
    <Routes>
      <Route path='/' element={<Home/>}>
        {/* <Route path='/:id' element={<ThreadDetail/>}/> */}
      </Route>
    </Routes>
    </BrowserRouter>
  )
}

export default App
