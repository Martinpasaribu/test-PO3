
import React from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Kerja from './components/Kerja';
import Pesan from './components/Pesan';
import List from './components/List';
import Footer from './components/Footer';
// import Api from './components/Api'
import { Routes,Route, Link, Outlet  } from 'react-router-dom';
import Home from './page/Home';
import Api from './page/Api';
import Data from './page/Data';
import PageNotFound from './page/NotFound';

function App() {
  return (
    <div >
    <Navbar/>
      <Routes>
        <Route path="/" element={<Layout/>}> 
          <Route index path="/" element={<Home/>} />
          <Route path="/api" element={<Api/>} />
          <Route path="/data" element={<Data/>} />
          <Route path="*" element={<PageNotFound />} />
        </Route>
      </Routes>
      <Footer/>
    </div>



  );
}
    // <Navbar/>
    // <Hero />
    // <Kerja />
    // <Pesan />
    // <List/>
    // <Footer/>

function Layout() {
  return (
    <>
      <header>
        <Link to='/'> </Link>
        <Link to='/Api'>  </Link>
        <Link to='/data'>  </Link>
      </header>

      <Outlet />
    </>
  );
}

export default App;
