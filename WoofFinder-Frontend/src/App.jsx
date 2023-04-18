import { Route, Routes } from 'react-router'
import './assets/styles/App.css'
import Adopt from './pages/Adopt/Adopt'
import Home from './pages/Home/Home'



function App() {

  return (
    <div className="App">
      <Routes>
        <Route path='/'>
          <Route index element={<Home/>} />
          <Route path='adopt' element={<Adopt/>}/>
        </Route>
      </Routes>
    </div>
  )
}

export default App
