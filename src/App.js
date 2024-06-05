import './App.css';
import Count from './pages/Count';
import Count1 from './pages/Count1';
import CountFunction from './pages/CountFunction';
import Effect from './pages/Effect';
import Lifecycle from './pages/Lifecycle';
import Mobile from './pages/Mobile';
import  Payment  from './pages/Payment';
import{BrowserRouter,Routes,Route, Link} from 'react-router-dom'
import { MdOutlineTextIncrease } from "react-icons/md";


const App = () =>{
  return (
    <>
    <BrowserRouter>
        <nav>
          <ul>
            <li><Link to="/">Home</Link></li>
            <li><Link to="/payment">Payment</Link></li>
            <li><Link to="/count"><MdOutlineTextIncrease />
Count</Link></li>
            <li><Link to="/effect">Effect</Link></li>
          </ul>
        </nav>
    <Routes>
      <Route path='/' element={<Mobile/>} />
      <Route path='/payment' element={<Payment/>} />
      <Route path='/count' element={<Count1/>} />
      <Route path='/effect' element={<Effect/>} />
    </Routes>
    </BrowserRouter>

    {/* <Effect/> */}
     {/* <Lifecycle/> */}
     {/* <CountFunction/> */}
     {/* <Count/> */}
     {/* <Mobile name="Iphone 15pro" spcs="128gb"/>
     <Payment price="25000rs" eta="2 days"/> */}
   
    </>
     
     
     
     
  )
}

export default App
