import React, {useState, useEffect} from 'react';
import axios from 'axios';
import './tugas12.css';

const Tugas12 = () => {
    const [dataMhs, setDataMhs] = useState([])
    const [input, setInput] = useState({
        nama: "",
        mataKuliah: "",
        nilai: 0
    });
    const [currentId, setCurrentId] = useState(null)

    useEffect(() => {
    const fetchData = async () => {
        const result = await axios.get(`https://backendexample.sanbercloud.com/api/student-scores`)

            setDataMhs(result.data.map(x => {return {id: x.id, name: x.name, course: x.course, score: x.score}}))

    }
    fetchData()
    }, [])

    const handleEdit = (event) => {
        let idMhs = event.target.value
            axios.get(`https://backendexample.sanbercloud.com/api/student-scores/${idMhs}`)
            .then(res => {
                let data = res.data
                setInput({
                    nama: data.name,
                    mataKuliah: data.course,
                    nilai: data.score
                })
                setCurrentId(data.id)
            })
        }

    const handleHapus = (event) => {
        let idMhs = parseInt(event.target.value)
        axios.delete(`https://backendexample.sanbercloud.com/api/student-scores/${idMhs}`)
        .then(() => {
            let newDataMhs = dataMhs.filter(el => {return el.id !== idMhs})
            setDataMhs(newDataMhs)
        })
    }

    const handleChange = (event) => {
        let {name, value} = event.target

        setInput({ ...input, [name] : value})
    }

    const handleSubmit = (event) => {
        event.preventDefault()
        let {nama, mataKuliah, nilai} = input

        if(nama !== "") {
            if(mataKuliah !== ""){
                if(nilai <= 100 && nilai >= 1){
                    if (currentId === null) {
                        axios.post(`https://backendexample.sanbercloud.com/api/student-scores`, {name: nama, course: mataKuliah, score: nilai})
                        .then(res => {
                            let data = res.data
                            setDataMhs([...dataMhs, {id: data.id, name: data.name, course: data.course, score: data.score}])
                        })
                    } else {
                        axios.put(`https://backendexample.sanbercloud.com/api/student-scores/${currentId}`, {name: nama, course: mataKuliah, score: nilai})
                        .then(() => {
                            let singleMhs = dataMhs.find(el => el.id === currentId)
                            singleMhs.name = nama
                            singleMhs.course = mataKuliah
                            singleMhs.score = nilai
                            setDataMhs([...dataMhs])
                        })
                    }
            
                    setInput({
                        nama: "",
                        mataKuliah: "",
                        nilai: 0
                    })
                    setCurrentId(null)
                }
            }
        }
        
    }

    const handleIndeks = (params) => {
    if (params >= 80) {
        return "A"
    } else if (params < 80 && params >= 70){
        return "B"
    } else if (params < 70 && params >= 60){
        return "C"
    } else if (params < 60 && params >= 50){
        return "D"
    } else if (params < 50){
        return"E"
    }
    }

return(
    <>
    { dataMhs !== null &&
    (<div>
        <h1>Data Nilai Mahasiswa</h1>
        <table>
            <thead>
                <tr>
                    <th>No</th>
                    <th>Nama</th>
                    <th>Mata Kuliah</th>
                    <th>Nilai</th>
                    <th>Indeks Nilai</th>
                    <th>Action</th>
                </tr>
            </thead>
            <tbody>
                {
                    dataMhs.map((item, index) => {
                        return(
                            <tr key={index}>
                                <td>{index+1}</td>
                                <td>{item.name}</td>
                                <td>{item.course}</td>
                                <td>{item.score}</td>
                                <td>{handleIndeks(item.score)}
                                </td>
                                <td>
                                    <button onClick={handleEdit} value={item.id}>Edit</button>
                                    &nbsp;
                                    <button onClick={handleHapus} value={item.id}>Hapus</button>
                                </td>
                            </tr>
                        )
                    })
                }
            </tbody>
        </table>

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
    </div>)
    }
    </>
    )
}




export default Tugas12;