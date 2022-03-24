import React, {useContext, useEffect} from 'react'
import axios from 'axios'
import { useParams } from 'react-router-dom'
import { Tugas13Context } from '../Tugas-13/tugas13Context'

const Tugas14Form = () => {
    
    let {slug} = useParams()
    const {state, functionHandle} = useContext(Tugas13Context)

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
            <input onChange={handleChange} type="text" value={input.nama} name="nama" />
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

export default Tugas14Form