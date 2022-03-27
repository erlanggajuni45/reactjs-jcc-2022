import React, { useContext, useEffect } from "react";
import { Link } from "react-router-dom";
import ElementAlert from "../components/Alert";
//import ElementAlert from "../Component/Alert";
import { GlobalContext } from "../context/GlobalContext";

const GameList = (props) => {
    const {state, functionHandle} = useContext(GlobalContext)

    const {
        dataGame, show, setShow
    } = state

    const {
        handleEdit,
        handleHapus,   
        handlePlatform        
    } = functionHandle

     useEffect(() => {

         if (show) { 
           setTimeout(() => {
            setShow(false)
         } , 3000)
      
         }
        
       }, [show, setShow]);
    
    return(
        <>
        
        { dataGame !== null && 
        (<div>
            <h1>Mobile Apps List</h1>
            
            <Link to="/mobile-form"><button className="w-1/5  my-4 py-2 px-1 bg-stone-900 hover:bg-blue-700 focus:ring-blue-500 focus:ring-offset-blue-200 text-white w-full transition ease-in duration-200 text-center text-base font-semibold shadow-md focus:outline-none focus:ring-2 focus:ring-offset-2  rounded-full">
                Tambah Data Game Baru</button></Link>
            
<table className="table p-4 bg-white shadow rounded-lg">
    <thead>
        <tr>
            <th className="border-b-2 p-4 bg-zinc-50 dark:border-dark-5 whitespace-nowrap font-normal text-gray-900">
                No
            </th>
            <th className="border-b-2 p-4 bg-zinc-50 dark:border-dark-5 whitespace-nowrap font-normal text-gray-900">
                Name
            </th>
            <th className="border-b-2 p-4 bg-zinc-50 dark:border-dark-5 whitespace-nowrap font-normal text-gray-900">
                Category
            </th>
            <th className="border-b-2 p-4 bg-zinc-50 dark:border-dark-5 whitespace-nowrap font-normal text-gray-900">
                Description
            </th>
            <th className="border-b-2 p-4 bg-zinc-50 dark:border-dark-5 whitespace-nowrap font-normal text-gray-900">
                Release Year
            </th>
            <th className="border-b-2 p-4 bg-zinc-50 dark:border-dark-5 whitespace-nowrap font-normal text-gray-900">
                Size(MB)
            </th>
            <th className="border-b-2 p-4 bg-zinc-50 dark:border-dark-5 whitespace-nowrap font-normal text-gray-900">
                Price
            </th>
            <th className="border-b-2 p-4 bg-zinc-50 dark:border-dark-5 whitespace-nowrap font-normal text-gray-900">
                Rating
            </th>
            <th className="border-b-2 p-4 bg-zinc-50 dark:border-dark-5 whitespace-nowrap font-normal text-gray-900">
                Platform
            </th>
            <th className="border-b-2 p-4 bg-zinc-50 dark:border-dark-5 whitespace-nowrap font-normal text-gray-900">
                Action
            </th>
        </tr>
    </thead>
    <tbody>
    {
                        dataGame.map((item, index) => {
                            return(
                                <tr key={index} className="text-gray-700 hover:bg-slate-50 bg-white even:bg-white">
                                    <td className="border-b-2 p-4 dark:border-dark-5">{index+1}</td>
                                    <td className="border-b-2 p-4 dark:border-dark-5">{item.name}</td>
                                    <td className="border-b-2 p-4 dark:border-dark-5">{item.category}</td>
                                    <td className="border-b-2 p-4 dark:border-dark-5">{item.description}</td>
                                    <td className="border-b-2 p-4 dark:border-dark-5">{item.releaseYear}</td>
                                    <td className="border-b-2 p-4 dark:border-dark-5">{item.size}</td>
                                    <td className="border-b-2 p-4 dark:border-dark-5">{item.price}</td>
                                    <td className="border-b-2 p-4 dark:border-dark-5">{item.rating}</td>
                                    <td className="border-b-2 p-4 dark:border-dark-5">
                                        {handlePlatform(item.androidApp, item.iosApp)}
                                        </td>
                                    <td className="border-b-2 p-4 dark:border-dark-5 ">
                                     <button onClick={handleEdit} value={item.id} className="py-2 px-4 justify-center items-center hover:bg-red-700 hover:text-white focus:ring-red-500 focus:ring-offset-red-200 text-black w-full transition ease-in duration-200 text-center text-base font-semibold shadow-md focus:outline-none focus:ring-2 focus:ring-offset-2  rounded-lg ">
                                            Edit</button>
                                            &nbsp;
                                        <button onClick={handleHapus} value={item.id} className="py-2 px-4 justify-center items-center bg-red-600 hover:bg-white hover:text-red-600 focus:ring-red-500 focus:ring-offset-red-200 text-white w-full transition ease-in duration-200 text-center text-base font-semibold shadow-md focus:outline-none focus:ring-2 focus:ring-offset-2  rounded-lg ">
                                            Hapus</button> 
                                    </td>
                                </tr>
                            )
                        }
                        )
                    }
                </tbody>
    </table>
        </div>)

    }
   {show && <ElementAlert />} 
    </>
    )
}

export default GameList