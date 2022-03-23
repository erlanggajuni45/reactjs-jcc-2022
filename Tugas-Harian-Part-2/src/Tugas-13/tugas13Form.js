import React, {useContext} from 'react'
import {Tugas13Context} from "./tugas13Context"

const Tugas13Form = () => {
    
    const {state, functionHandle} = useContext(Tugas13Context)

    const {
        input
    } = state

    const {
        handleChange,
        handleSubmit,           
    } = functionHandle

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

export default Tugas13Form