import { useState } from 'react'
import './App.css'
import Header from './pages/header/Header'
import Section from './pages/section/Section'
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import CartPage from './components/CartPage';

function App() {

  const [cardDetails, setCartDetails] = useState([]);

  const setCartDetailsHandler = (cartDetail) => {
    setCartDetails(prev => [...prev, cartDetail])
  }

  return (
    <>
      <div>


        <main>
          <header className="hunger-box-container">
            <Header cardDetails={cardDetails} />
          </header>
          {/* <section>
            <Section setCartDetails={setCartDetailsHandler}/>
          </section> */}
          <Router>
            <Routes>
              <Route path="/" element={<>   <section>
                <Section setCartDetails={setCartDetailsHandler} />
              </section></>} />
              <Route path="/cart" element={<><CartPage cardDetails={cardDetails} /></>} />
            </Routes>
          </Router>
        </main>
      </div>
    </>
  )
}

export default App
