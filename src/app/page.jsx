'use client'
import React, { useState } from 'react';
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