import React from 'react';
import { Route, Routes } from 'react-router-dom';
import Home from './pages/Home';
import Appointment from './pages/Appointment';
import LogIn from './pages/LogIn';
import News from './pages/News';
import ContactUs from './pages/ContactUs';
import MyProfile from './pages/MyProfile';
import SignUp from './pages/SignUp';
import BookNow from './pages/BookNow';
import Navbar from './components/navbar';
import Footer from './components/footer';

const App = () => {
  return (
    <div className='mx-4 sm:mx-[10%]'>
      {/* Navbar is placed at the top */}
      <Navbar />

      {/* Main content with routes */}
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/appointment' element={<Appointment />} />
        <Route path='/login' element={<LogIn />} />
        <Route path='/news' element={<News />} />
        <Route path='/contact' element={<ContactUs />} />
        <Route path='/myprofile' element={<MyProfile />} />
        <Route path='/signup' element={<SignUp />} />
        <Route path='/booknow' element={<BookNow />} />
      </Routes>

      {/* Footer is placed at the bottom */}
      <Footer />
    </div>
  );
}

export default App;
