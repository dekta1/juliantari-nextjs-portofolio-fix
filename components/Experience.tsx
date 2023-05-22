import React from 'react';
import Image from 'next/image';
import html  from '../components/html.png';
import css from '../components/css.png';
import php from '../components/php.png';
import java from '../components/java.png';
import javaScript from '../components/javaScript.png'
    import { javascript } from 'webpack';
// import '/globals.css'

const Experience = () => {

    const techs = [
        {
            id: 1,
            src: html,
            title: 'Html',
            style: 'shadow-orange-500',
        },
        {
            id: 2,
            src: css,
            title: 'Css',
            style: 'shadow-blue-500',
        },
        {
            id: 3,
            src: php,
            title: 'Php',
            style: 'shadow-gray-500',
        },
        {
            id: 4,
            src: javaScript,
            title: 'javasrcipt',
            style: 'shadow-yellow-500',
        },
        {
            id: 5,
            src: java,
            title: 'Java',
            style: 'shadow-sky-50',
        },
    ]



    

  return <div id ="Experience" className="">
    <div className="max-w-screen-lg mx-auto p-4 flex flex-col
    justify-center text-white">
        <div>
            <p className="text-4xl font-bold border-b-4
            border-gray-500 p-2 inline">Experience</p>

            <p className="py-6 text-2xl">These are the technology I've worked with</p>
        </div>

        <div className="w-full grid grid-cols-2 sm:grid-cols-3
        gap-8 text-center py-8 px-12 sm:px-0">
            
            {
                techs.map(({id, src, title, style}) => (
                    <div key={id} 
                    className={`shadow hover:shadow-2xl hover:scale-105 duration-500
                    py-2 rounded-lg ${style}`}
                    >
                        <Image width={48} height={48} src={src} alt=""  className="w-20 mx-auto"/>
                        <p className="mt-4 text-xl">{title}</p>
            </div>
                ))
            }

        </div>
    </div>
  </div>;
};

export default Experience;