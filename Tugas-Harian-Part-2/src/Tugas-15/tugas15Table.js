import React, { useContext, useEffect } from "react";
import { Link } from "react-router-dom";
import ElementAlert from "../Component/Alert";
import { Tugas15Context } from "../Tugas-15/tugas15Context";

const Tugas15Table = (props) => {
    const {state, functionHandle} = useContext(Tugas15Context)

    const {
        dataMhs, show, setShow
    } = state

    const {
        handleEdit,
        handleHapus,
        handleIndeks           
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
        
        { dataMhs !== null && 
        (<div>
            <h1>Data Nilai Mahasiswa</h1>
            <div class ="h-20 w-full">
            <Link to="/tugas15/create"><button class="w-1/2 absolute inset-x-1/4 my-4 py-2 px-1 bg-stone-900 hover:bg-blue-700 focus:ring-blue-500 focus:ring-offset-blue-200 text-white w-full transition ease-in duration-200 text-center text-base font-semibold shadow-md focus:outline-none focus:ring-2 focus:ring-offset-2  rounded-full">
                Buat Data Nilai Mahasiswa Baru</button></Link>
                </div>
<table class="w-3/5 table p-4 bg-white shadow rounded-lg">
    <thead>
        <tr>
            <th class="border-b-2 p-4 bg-zinc-50 dark:border-dark-5 whitespace-nowrap font-normal text-gray-900">
                No
            </th>
            <th class="border-b-2 p-4 bg-zinc-50 dark:border-dark-5 whitespace-nowrap font-normal text-gray-900">
                Nama
            </th>
            <th class="border-b-2 p-4 bg-zinc-50 dark:border-dark-5 whitespace-nowrap font-normal text-gray-900">
                Mata Kuliah
            </th>
            <th class="border-b-2 p-4 bg-zinc-50 dark:border-dark-5 whitespace-nowrap font-normal text-gray-900">
                Nilai
            </th>
            <th class="border-b-2 p-4 bg-zinc-50 dark:border-dark-5 whitespace-nowrap font-normal text-gray-900">
                Indeks Nilai
            </th>
            <th class="border-b-2 p-4 bg-zinc-50 dark:border-dark-5 whitespace-nowrap font-normal text-gray-900">
                Action
            </th>
        </tr>
    </thead>
    <tbody>
    {
                        dataMhs.map((item, index) => {
                            return(
                                <tr key={index} class="text-gray-700 hover:bg-slate-50 bg-white even:bg-white">
                                    <td class="border-b-2 p-4 dark:border-dark-5">{index+1}</td>
                                    <td class="border-b-2 p-4 dark:border-dark-5">{item.name}</td>
                                    <td class="border-b-2 p-4 dark:border-dark-5">{item.course}</td>
                                    <td class="border-b-2 p-4 dark:border-dark-5">{item.score}</td>
                                    <td class="border-b-2 p-4 dark:border-dark-5">{handleIndeks(item.score)}
                                    </td>
                                    <td class="border-b-2 p-4 dark:border-dark-5 flex items-center">
                                    <button onClick={handleEdit} value={item.id} class="py-2 px-4 justify-center items-center  bg-white hover:bg-red-700 hover:text-white focus:ring-red-500 focus:ring-offset-red-200 text-black w-full transition ease-in duration-200 text-center text-base font-semibold shadow-md focus:outline-none focus:ring-2 focus:ring-offset-2  rounded-lg ">
                                            Edit</button>
                                        &nbsp;
                                        <button onClick={handleHapus} value={item.id} class="py-2 px-4 justify-center items-center bg-red-600 hover:bg-white hover:text-red-600 focus:ring-red-500 focus:ring-offset-red-200 text-white w-full transition ease-in duration-200 text-center text-base font-semibold shadow-md focus:outline-none focus:ring-2 focus:ring-offset-2  rounded-lg ">
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

export default Tugas15Table