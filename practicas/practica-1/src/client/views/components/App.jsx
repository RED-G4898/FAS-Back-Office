import '@coreui/coreui/dist/css/coreui.min.css'
import 'bootstrap/dist/css/bootstrap.min.css'

import { BrowserRouter, Routes, Route } from 'react-router-dom'

import Sidebar from './aside/Sidebar.jsx'
import Header from './header/Header.jsx'
import Products from './main/Products.jsx'

function App() {

  return (
    <div className='grid grid-cols-12 grid-rows-[10vh_3fr] h-screen'>
      <BrowserRouter>
      <aside className='row-start-1 row-span-2 col-start-1 col-span-2'>
        <Sidebar />
      </aside>
      <header className='row-start-1 row-span-1 col-start-3 col-span-10'>
        <Header />
      </header>
        <main className='col-start-3 col-span-10 row-start-2 row-span-1 p-10'>
          <Routes>
            <Route path="/products" element={<Products />} />
          </Routes>
        </main>
      </BrowserRouter>
    </div>
  )
}

export default App
