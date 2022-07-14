import './App.css';
import { Routes, Route } from "react-router-dom";
import Navbar from './Pages/Shared/Navbar';
import Home from './Pages/Home/Home';
import About from './Pages/About/About';
import RequireAuth from './Pages/Login/RequireAuth';
import Login from './Pages/Login/Login';
import SignUp from './Pages/Login/SignUp';
import DoctorProfile from './Pages/DoctorProfile/DoctorProfile';
import Contact from './Pages/Contacts/Contact';
import NotFound from './Pages/Shared/NotFound';
import Footer from './Pages/Shared/Footer';
import Dashboard from './Pages/Dashboard/Dashboard';
import Purchase from './Pages/Dashboard/Purchase';
import MyReview from './Pages/Dashboard/MyReview';


function App() {
  return (
    <div className="App">
      <Navbar></Navbar>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="doctor" element={<DoctorProfile />} />
        <Route path='contact' element={<Contact />} />
        <Route path="about" element={<About />} />
        <Route path="dashboard" element={<RequireAuth>
          <Dashboard/>
        </RequireAuth>}> 
        <Route index element={<Purchase/>}></Route>
        <Route path='review' element={<MyReview/>}></Route>
        </Route>
        <Route path="login" element={<Login />} />
        <Route path="signup" element={<SignUp />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
      <Footer></Footer>
    </div>
  );
}

export default App;
