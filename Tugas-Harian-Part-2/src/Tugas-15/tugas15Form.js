import React, {useContext, useEffect} from 'react'
import axios from 'axios'
import { useParams } from 'react-router-dom'
import { Tugas15Context } from '../Tugas-15/tugas15Context'

const Tugas15Form = () => {
    
    let {slug} = useParams()
    const {state, functionHandle} = useContext(Tugas15Context)

    const {
        input, setInput,
        setCurrentId
    } = state

    const {
        handleChange,
        handleSubmit,           
    } = functionHandle

    useEffect(() => { 
        if (slug !== undefined){
            axios.get(`https://backendexample.sanbercloud.com/api/student-scores/${slug}`)
            .then(res => {
                console.log(res)
                let data = res.data
                setInput({
                    nama: data.name,
                    mataKuliah: data.course,
                    nilai: data.score
                })
                setCurrentId(data.id)
            })
        }

        return () => {
            setInput({
                nama: "",
                mataKuliah: "",
                nilai: 0
            })
            setCurrentId(null)
        }
    }, [])

    return(
        <>
        <h1>Form Nilai Mahasiswa</h1>
        <form onSubmit={handleSubmit}>
            <label>Nama:</label>
            <input onChange={handleChange} type="text" value={input.nama} name="nama" 
            class=" rounded-lg border-transparent flex-1 appearance-none border border-gray-300 w-full py-2 px-4 bg-white text-gray-700 placeholder-gray-400 shadow-sm text-base focus:outline-none focus:ring-2 focus:ring-purple-600 focus:border-transparent" />
            <br />
            <label>Mata Kuliah:</label>
            <input onChange={handleChange} type="text" value={input.mataKuliah} name="mataKuliah" />
            <br />
            <label>Nilai:</label>
            <input onChange={handleChange} type="number" value={input.nilai} name="nilai" />
            <br />

            <input type="submit" />
        </form>
        </>
    )
}

export default Tugas15Form