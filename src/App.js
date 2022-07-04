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
import RequireAuth from './Pages/Login/RequireAuth';
import BookingModal from './Pages/DoctorProfile/BookingModal';

function App() {
  return (
    <div className="App">
      <Navbar></Navbar>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="doctor" element={<DoctorProfile />} />
        <Route path="appointment" element={
        <RequireAuth>
          <BookingModal></BookingModal>
        </RequireAuth>
        } />
        <Route path='contact' element={<Contact />} />
        <Route path="about" element={<About />} />
        <Route path="login" element={<Login />} />
        <Route path="signup" element={<SignUp />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </div>
  );
}

export default App;
