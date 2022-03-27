import React, {useContext, useEffect, useState} from 'react'
import axios from 'axios'
import { useParams } from 'react-router-dom'
import { GlobalContext } from '../context/GlobalContext'

const GameForm = () => {
    let {Id} = useParams()
    const {state, functionHandle} = useContext(GlobalContext)

    const {
        input, setInput,
        setCurrentId
    } = state

    const {
        handleChange,
        handleSubmit           
    } = functionHandle

     useEffect(() => { 
         if (Id !== undefined){
             axios.get(`https://backendexample.sanbercloud.com/api/mobile-apps/${Id}`)
             .then(res => {

                 let data = res.data
                 setInput({
                        name: data.name,
                        category: data.category,
                        description: data.description,
                        releaseYear: data.release_year,
                        size: data.size,
                        price: data.price,
                        rating: data.rating,
                        imageUrl: data.image_url,
                        androidApp: data.is_android_app,
                        iosApp: data.is_ios_app
                 })
                 setCurrentId(data.id)
             })
         }

         return () => {
             setInput({
                name: "",
                category: "",
                description: "",
                releaseYear: 2007,
                size: 0,
                price: 0,
                rating: 0,
                imageUrl: "",
                androidApp: true,
                iosApp: true
            
             })
             setCurrentId(null)
         }
     }, [])

    return(
        <>
        <h1>Form Data Game Mobile</h1>
        <form onSubmit={handleSubmit}>
            <label>Nama:</label>
            <input onChange={handleChange} type="text" value={input.name} name="name" 
            className=" rounded-lg border-transparent flex-1 appearance-none border border-gray-300 w-full py-2 px-4 bg-white text-gray-700 placeholder-gray-400 shadow-sm text-base focus:outline-none focus:ring-2 focus:ring-purple-600 focus:border-transparent" />
            <br />

            <label>Category:</label>
            <input onChange={handleChange} type="text" value={input.category} name="category" 
            className=" rounded-lg border-transparent flex-1 appearance-none border border-gray-300 w-full py-2 px-4 bg-white text-gray-700 placeholder-gray-400 shadow-sm text-base focus:outline-none focus:ring-2 focus:ring-purple-600 focus:border-transparent" />
            <br />

            <label>Description:</label>
            <textarea onChange={handleChange} value={input.description} name="description" 
            className=" rounded-lg border-transparent flex-1 appearance-none border border-gray-300 w-full py-2 px-4 bg-white text-gray-700 placeholder-gray-400 shadow-sm text-base focus:outline-none focus:ring-2 focus:ring-purple-600 focus:border-transparent" >     
            </textarea>
            <br />
            
            <label>Release Year:</label>
            <input onChange={handleChange} type="number" value={input.releaseYear} name="releaseYear" 
            className=" rounded-lg border-transparent flex-1 appearance-none border border-gray-300 w-full py-2 px-4 bg-white text-gray-700 placeholder-gray-400 shadow-sm text-base focus:outline-none focus:ring-2 focus:ring-purple-600 focus:border-transparent" />
            <br />
            
            <label>Size(MB):</label>
            <input onChange={handleChange} type="number" value={input.size} name="size" 
            className=" rounded-lg border-transparent flex-1 appearance-none border border-gray-300 w-full py-2 px-4 bg-white text-gray-700 placeholder-gray-400 shadow-sm text-base focus:outline-none focus:ring-2 focus:ring-purple-600 focus:border-transparent" />
            <br />
            
            <label>Price(Rp):</label>
            <input onChange={handleChange} type="number" value={input.price} name="price" 
            className=" rounded-lg border-transparent flex-1 appearance-none border border-gray-300 w-full py-2 px-4 bg-white text-gray-700 placeholder-gray-400 shadow-sm text-base focus:outline-none focus:ring-2 focus:ring-purple-600 focus:border-transparent" />
            <br />
            
            <label>Rating:</label>
            <input onChange={handleChange} type="number" value={input.rating} name="rating" 
            className=" rounded-lg border-transparent flex-1 appearance-none border border-gray-300 w-full py-2 px-4 bg-white text-gray-700 placeholder-gray-400 shadow-sm text-base focus:outline-none focus:ring-2 focus:ring-purple-600 focus:border-transparent" />
            <br />

            <label>Image Url:</label>
            <input onChange={handleChange} type="text" value={input.imageUrl} name="imageUrl" 
            className=" rounded-lg border-transparent flex-1 appearance-none border border-gray-300 w-full py-2 px-4 bg-white text-gray-700 placeholder-gray-400 shadow-sm text-base focus:outline-none focus:ring-2 focus:ring-purple-600 focus:border-transparent" />
            <br />

            <label>Android:</label>
            <input onChange={handleChange} type="checkbox" value={input.androidApp} name="androidApp" checked={input.androidApp} />
            <br />

            <label>iOS:</label>
            <input onChange={handleChange} type="checkbox" value={input.iosApp} name="iosApp" checked={input.iosApp} /> 
            <br />
            <input type="submit" />
        </form>
        </>
    )
}

export default GameForm