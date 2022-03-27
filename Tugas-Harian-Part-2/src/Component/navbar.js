import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { SwitchColorContext } from "../context/SwitchColor";
import image from '../Tugas-10/logo.png'
import BtnSwitchColor from "./BtnSwitchColor";

const Navbar = () => {
    
    let {value, setValue} = useContext(SwitchColorContext)

    return(
        <>
        
<div>
    <nav class={`${value} dark:bg-gray-800 shadow`}>
        <div class="max-w-7xl mx-auto px-8">
            <div class="flex items-center justify-between h-16">
                <div class=" flex items-center">
                    <a class="flex-shrink-0" href="/">
                        <img class="h-12 w-45" src={image} alt="Workflow"/>
                    </a>
                    <div class="hidden md:block">
                        <div class="ml-10 flex items-baseline space-x-4">
                            <Link to="/" class="text-gray-300  hover:text-gray-800 dark:hover:text-white px-3 py-2 rounded-md text-sm font-medium">
                                Tugas 10
                            </Link>
                            <Link to="/tugas11" class="text-gray-300  hover:text-gray-800 dark:hover:text-white px-3 py-2 rounded-md text-sm font-medium">
                                Tugas 11
                            </Link>
                            <Link to="/tugas12" class="text-gray-300  hover:text-gray-800 dark:hover:text-white px-3 py-2 rounded-md text-sm font-medium">
                                Tugas 12
                            </Link>
                            <Link to="/tugas13" class="text-gray-300  hover:text-gray-800 dark:hover:text-white px-3 py-2 rounded-md text-sm font-medium">
                                Tugas 13
                            </Link>
                            <Link to="/tugas14" class="text-gray-300  hover:text-gray-800 dark:hover:text-white px-3 py-2 rounded-md text-sm font-medium">
                                Tugas 14
                            </Link>
                            <Link to="/tugas15" class="text-gray-300  hover:text-gray-800 dark:hover:text-white px-3 py-2 rounded-md text-sm font-medium">
                                Tugas 15
                            </Link>
                            
                        </div>
                    </div>
                </div>
                <div class="block">
                    <div class="ml-4 flex items-center md:ml-6">
                        <BtnSwitchColor 
                        class="py-2 px-4  bg-indigo-600 hover:bg-indigo-700 focus:ring-indigo-500 focus:ring-offset-indigo-200 text-white w-full transition ease-in duration-200 text-center text-base font-semibold shadow-md focus:outline-none focus:ring-2 focus:ring-offset-2  rounded-lg" />
                    </div>
                </div>

            </div>
        </div>
    </nav>
</div>


        </>
    )
}

export default Navbar