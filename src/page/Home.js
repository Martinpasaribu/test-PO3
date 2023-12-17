import { Helmet } from "react-helmet"
import React, {useState} from 'react';
import {AiOutlineClose, AiOutlineMenu} from 'react-icons/ai';
import logo from '../assets/Logo_main.png';
import { Routes,Route, Link, Outlet  } from 'react-router-dom';
import Hero from '../components/Hero';
import Kerja from '../components/Kerja';
import Pesan from '../components/Pesan';
import List from '../components/List';


export default function Home(){

    const [nav, setNav] = useState(false)

    const handleNav = () => {
      setNav(!nav)
    }

   
        return (
            <div>  
            <Hero />
            <Kerja />
            <Pesan />
            <List/>
            </div>

          
    )
  }