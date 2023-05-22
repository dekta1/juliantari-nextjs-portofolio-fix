import React from 'react';
import Hero from "../assets/img1/laptop.jpg";


const About = () => {
  return (
    <div id="About">

    
  <div  className="text-white mt-24 h-[100vh] mb-6">

    <div className ="max-w-screen-lg p-4 mx-auto flex flex-col
    justify-center">

        <div className="pb-8">
            <p className="text-4xl font-bold inline border-b-4
            border-gray-500">About</p>
        </div>
        <p className="py-6 text-2xl">
            Hi, I'm Putri Juli Antari,
            but my friends call me Juli or Dekta.
            I am a student from Wira Harapan Vocational Schools. 
            I studied programming for 2 years, 
            I started programming since 2021. 
            The only languages ​​I learned were Html, 
            JavaScript Css, Java, Php and C++. 
            and now I'm learning a new language that is
            Nextjs, React, TypeScript and tailwind.
        </p>
    </div>
  </div>
  </div>
  );  
};

export default About
