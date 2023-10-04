import './App.css'
import { Route, Routes } from 'react-router-dom'
import HomesPage from './pages/HomesPage'
import PokedexPage from './pages/PokedexPage'
import PokedexIdPage from './pages/PokedexIdPage'
import ProtectedRoutes from './pages/ProtectedRoutes'

function App() {
  

  return (
    <div>
      <Routes>
        <Route path='/' element={<HomesPage/>}/>
        <Route element={<ProtectedRoutes/>}>
          <Route path='/pokedex' element={<PokedexPage/>}/>
          <Route path='/pokedex/:id' element={<PokedexIdPage/>}/>
        </Route>
      </Routes>
    </div>
  )
}

export default App
