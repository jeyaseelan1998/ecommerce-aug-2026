import { Route, Routes } from 'react-router-dom'
import Home from './pages/Home.jsx'
import NotFound from './pages/NotFound.jsx'
import Guest from './layouts/Guest/index.jsx'

function App() {
  return (
    <>
      <main>
        <Routes>
          <Route path="/" element={<Guest />} >
            <Route index element={<Home />} />
          </Route>
          <Route path="*" element={<NotFound />} />
        </Routes>
      </main>
    </>
  )
}

export default App
