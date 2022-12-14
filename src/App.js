import './App.css';
import { Routes, Route } from "react-router-dom";
import Navbar from './Pages/Shared/Navbar';
import Home from './Pages/Home/Home';
import About from './Pages/About/About';
import Login from './Pages/Login/Login';
import SignUp from './Pages/Login/SignUp';
import DoctorProfile from './Pages/DoctorProfile/DoctorProfile';
import Contact from './Pages/Contacts/Contact';
import NotFound from './Pages/Shared/NotFound';
import Footer from './Pages/Shared/Footer';
import Shop from './Pages/Shop/Shop';
import Checkout from './Pages/Shop/Checkout';
import Success from './Components/Succss/Success';
import RequireAuth from './Components/RequireAuth';
import Hospitals from './Pages/Hospitals/Hospitals';

function App() {
  return (
    <div className="App">
      <Navbar></Navbar>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="doctor/:id" element={<RequireAuth><DoctorProfile /></RequireAuth>} />
        <Route path='contact' element={<Contact />} />
        <Route path='hospitals' element={<Hospitals />} />
        <Route path='shop' element={<Shop />} />
        <Route path='shop/:productId' element={<RequireAuth><Checkout /></RequireAuth>} />
        <Route path="/ssl-payment-success/:id" element={<RequireAuth><Success/></RequireAuth>} />
        <Route path="about" element={<About />} />
        <Route path="login" element={<Login />} />
        <Route path="signup" element={<SignUp />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
      <Footer></Footer>
    </div>
  );
}

export default App;
