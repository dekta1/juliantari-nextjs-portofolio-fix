import React from 'react';

const contact = ()   => {
  return (
    <div id="Contact" className="p-4 text-white">
        <div className="flex flex-col p-4 justify-center max-w-screen-lg
        mx-auto ">
            <div className="pb-8">
                <p className="text-4xl font-bold inline
                border-b-4 border-gray-500">Contact</p>
                <p className="py-6 text-2xl">Submit thr from below to get in touch with me </p>
            </div>

            <div className="flex justify-center items-center">
                <form action="https://getform.io/f/ebed955a-fd0c-40ee-96c9-aeae29cf726d"
                method="POST" className="flex flex-col w-full md:w-1/2">
                    <input type="text" name="name" 
                    placeholder="Enter your name"
                    className="p-2 bg-transparent border-2 rounded-md
                    text-white text-lg focus:outline-none" />

                    <input type="text" name="name"  
                    placeholder="Enter your email"
                    className="my-4 p-2 bg-transparent border-2 rounded-md
                    text-white text-lg focus:outline-none" />

                    <textarea name="message"
                    placeholder="Enter your massage"
                    className="p-2 bg-transparent border-2 rounded-md
                    text-white text-lg focus:outline-none h-12"></textarea>

                    <button className=" text-white font-semibold bg-gradient-to-b
                    from-cyan-500 to-blue-600 px-6 py-3 my-8
                    mx-auto flex items-center rounded-md hover:scale-110
                    duration-300"> Let's Talk</button>
                </form>
            </div>
        </div>
    </div>
  )
}

export default contact