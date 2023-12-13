// eslint-disable-next-line no-unused-vars
import React from "react";

import Portofolio from "../../../assets/portofolio.png";
import Instagram from "../../../assets/instagaram.png"
import Linkedin from "../../../assets/linkedin.png"
import Github from "../../../assets/github.png"

const about = () => {
    return (
        <div className="grid grid-cols-3 gap-4 justify-center content-start max-sm:grid-cols-1 max-sm:gap-0 max-md:grid-cols-2 lg:grid-cols-3">
            {/* kiri */}
            <div className="self-start col-span-2 bg-[#E7B5B5] rounded-3xl mt-5 ml-4 max-sm:m-4 max-sm:mt-[20px] hover:shadow-lg transform hover:scale-105 transition-all duration-300">
                <div className="flex ">
                    <img
                        loading="lazy"
                        srcSet={Portofolio}
                        className="w-full items-start p-3 grow rounded-3xl max-w-[120px] max-h-[130px] max-md:mt-5"
                    />
                    <div className="grid grid-cols-4 gap-2 grid-rows-2 p-3 max-sm:inline-block">
                        <h1 className="col-span-4 font-bold text-xl">My Portfolio</h1>
                        <a href="https://github.com/dzikryalfian14/MentalKu" className="border border-solid rounded-3xl my-2 border-black px-2 text-center max-sm:inline-block max-h-[30px] hover:shadow-lg transform hover:scale-105 transition-all duration-300 cursor-pointer">Mentalku</a>
                        <a href="https://github.com/inogndslvs/Aplikasi-Perkiraan-cuaca" className="border border-solid rounded-3xl my-2 border-black px-2 text-center max-sm:inline-block max-h-[30px] hover:shadow-lg transform hover:scale-105 transition-all duration-300 cursor-pointer">Peerkiraan-cuaca</a>
                        <a href="https://github.com/inogndslvs/RestaurantTrip" className="border border-solid rounded-3xl my-2 border-black px-2 text-center max-sm:inline-block max-h-[30px] hover:shadow-lg transform hover:scale-105 transition-all duration-300 cursor-pointer">RestaurantTrip</a>
                        <a href="https://github.com/inogndslvs/Bookshelf-app/tree/master" className="border border-solid rounded-3xl my-2 border-black px-2 text-center max-sm:inline-block max-h-[30px] hover:shadow-lg transform hover:scale-105 transition-all duration-300 cursor-pointer">BookShelf</a>
                    </div>
                </div>
            </div>
            {/* kanan */}
            <div className="bg-white rounded-3xl mt-5 mr-4 p-2 text-center max-sm:ml-4 max-sm:my-[7px] hover:shadow-lg transform hover:scale-105 transition-all duration-300 ">
                <h1 className="col-span-4 font-bold text-xl py-2">About Me</h1>
                <button className="border border-solid rounded-3xl border-black px-2 max-w-fit max-h-[30px] hover:shadow-lg transform hover:scale-105 transition-all duration-300">click to see more about me ⬇ </button>
                <div className="flex justify-around p-[5px]">
                <a href="https://www.instagram.com/ino.gndslvs/" target="_blank" rel="noopener noreferrer">
                    <img 
                    loading="lazy"
                    srcSet={Instagram}
                    className="max-w-md max-h-4  bg-orange-50 rounded-md hover:shadow-xl transform hover:scale-105 hover:bg-orange-300 hover:w-lg transition-all ease-in-out duration-300 cursor-pointer"
                    />
                </a>

                <a href="https://www.linkedin.com/in/inosensius-g-atok-0ab616225/" target="_blank" rel="noopener noreferrer">
                    <img 
                    loading="lazy"
                    srcSet={Linkedin}
                    className="max-w-md max-h-4  bg-orange-50 rounded-[5px] hover:shadow-xl transform hover:scale-105 hover:bg-orange-300 hover:w-lg transition-all duration-300 cursor-pointer"
                    />
                </a>

                <a href="https://github.com/inogndslvs" target="_blank" rel="noopener noreferrer">
                    <img 
                    loading="lazy"
                    srcSet={Github}
                    className="max-w-md max-h-4 bg-orange-50 rounded-md hover:shadow-xl transform hover:scale-105 hover:bg-orange-300 hover:w-lg transition-all duration-300 cursor-pointer"
                    />
                </a>

                </div>
            </div>
        </div>
    );
} 

export default about