import React from 'react';
import Image from 'next/image';
import sd from '../components/SD.jpg';
import smp from '../components/SMP.jpg';
import smk from '../components/Harapan.jpg';



const Educations = () => {

    const techs = [
        {
            id: 1,
            src: sd,
            title: '3 Canggu Elementary School',
            alamat:'Jl.Raya Babakan No. 28 , Canggu, Kec. Kuta Utara, Kab. Badung Prov. Bali',
        },
        {
            id: 2,
            src: smp,
            title: '2 Kuta Utara Junior High School',
            alamat:'Jl. Made Bulet, Br. Tegeh, Desa Dalung, Kecamatan Kuta Utara',
        },
        {
            id: 3,
            src: smk,
            title: 'Wira Harapan vocational schools',
            alamat:'Jl.Raya Padang Luwih, Br Tegal Jaya, Dalung, Kuta Utara Badung, Bali',
        },
    ]

  return (
    <div id="Educations" className="tablet:my-10"> 
        <div className="max-w-screen-lg mx-auto p-4 flex flex-col
        justify-center text-white"> 
            <div>
                <p className="text-4xl font-bold border-b-4
            border-gray-500 p-2 inline">Education</p>
            </div>
            <div className="w-full grid grid-cols-2 sm:grid-cols-3
        gap-8 text-center py-8 px-12 sm:px-0">
                {
                    techs.map(({id, src, title, alamat}) => (
                        <div key={id} className={`hover:scale-105 duration-500 rounded-lg text-xl text-justify text-white`}>
                            <Image width={40} height={40} src={src} alt=""  className="w-80 mx-auto object-cover"/>
                            <p className="mt-4">{title}</p>
                            <p className="mt-2">{alamat}</p>
                        </div>
                    ))



                }
            </div>       
        </div>
    </div>
  )
}

export default Educations