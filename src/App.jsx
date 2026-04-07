
import { Suspense, useState } from 'react'
import './App.css'
import Banner from './Components/Banner'
import Footer from './Components/Footer'
import Navbar from './Components/Navbar'
import Pricing from './Components/Pricing'
import Rating from './Components/Rating'
import Steps from './Components/Steps'
import Premium from './Components/Premium'
import { ToastContainer } from 'react-toastify'

const fetchData = async () =>{
  const res = await fetch('/data.json');
  return res.json();

}

function App() {
  const premiumData= fetchData()
  const [card, setCard] = useState([]);


  return (
    <>
    <Navbar card={card}></Navbar>
    <Banner></Banner>
    <Rating></Rating>
    <Suspense fallback={<span className="loading loading-spinner loading-lg"></span>}>
      <Premium card={card} setCard={setCard} premiumData={premiumData}></Premium>
    </Suspense>

    <Steps></Steps>
    <Pricing></Pricing>
    <Footer></Footer>
    <ToastContainer></ToastContainer>




    </>
  )
}

export default App



