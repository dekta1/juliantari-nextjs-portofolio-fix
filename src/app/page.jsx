'use client'
import React, { useState } from 'react';
import { FaBars, FaTimes } from "react-icons/fa";
import {Link} from "react-scroll/modules";
import Home from '../../components/Home';
import About from '../../components/About';
import Educations from '../../components/Educations';
import Experience from '../../components/Experience';
import Contact from '../../components/Contact';
import '../../style/globals.css'

// interface linkItem{
//     id: number;
//     link: string;
// }

const NavBar = () => {

    const[nav, setNav] = useState (false);

    const links = [ 
        {
            id:1,   
            link: 'Home'
        },
        {
            id:2,   
            link: 'About'
        },
        {
            id:3,   
            link: 'Experience'
        },
        {
            id:4,   
            link: 'Educations'
        },
        {
            id:5,   
            link: 'Contact'
        },
    ];

  return (
    <div>
    <div className="flex justify-between items-center w-full
    px-4 text-sky-50 bg-gray-900 fixed py-2">
        <div>
            <h1 className="text-2xl font-light ml-3 text-yellow-500">Project CV</h1>
        </div>

        <ul className="hidden md:flex">
            {links.map(({id, link}) => 
            (<li
             key={id} 
             className="px-5 cursor-pointer capitalize text-xl text-yellow-300 hover:bg-gray-500 duration-200">
                <Link to={link} smooth duration={500}>{link}</Link>
                </li>

            ))}
 
        </ul>
        <div onClick={() => setNav(!nav) }  className="cursor-pointer pr-4 z-10 text-white md:hidden">
        
        {nav ? <FaTimes size={30} /> : <FaBars size={30}  />}
        </div>
        {nav && (
           
           <ul className="flex flex-col justify-center items-center
        absolute top-0 left-0 w-full h-screen bg-gradient-to-b
        from-gray-950 to-gray-800 text-gray-500">

        {links.map(({id, link}) => 
            (<li
                key={id} 
                className="px-4 cursor-pointer capitalize py-6 text-3xl hover:bg-gray-500 text-white">
                   <Link onClick={() => setNav (!nav) }
                   to={link} smooth duration={500}>
                    {link}
                    </Link>
                   
            </li>
   
            ))}   
            </ul>
        )}
    </div>
    <Home></Home>
    <About></About>
    <Educations></Educations>
    <Experience></Experience>
    <Contact></Contact>
    </div>
    
  )
}

export default NavBar;