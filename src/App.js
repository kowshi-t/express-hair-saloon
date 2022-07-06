import './App.css';
import Home from './component/Home/Home';
import 'bootstrap/dist/css/bootstrap.min.css';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import {Routes, Route} from "react-router-dom";
import Booking from './component/Booking/Booking'
import Services from './component/Services/Services';

function App() {
  return (
    <>
      {/* <Home />  */}
      <Routes>
        <Route path='' element={<Home />}></Route>
        <Route path='/home' element={<Home />}></Route>
        <Route path='/booking' element={<Booking />}></Route>
        <Route path='/services' element={<Services />}></Route>
      </Routes>
    </>
  );
}

export default App;
