import React, {useState, createContext, useEffect } from 'react';
import axios from 'axios';
import { useHistory } from 'react-router-dom';

export const Tugas13Context = createContext();

export const Tugas13Provider = (props) => {
    const [dataMhs, setDataMhs] = useState([])
    const [input, setInput] = useState({
        nama: "",
        mataKuliah: "",
        nilai: 0
    });

    const [currentId, setCurrentId] = useState(null)

    let history = useHistory()

    useEffect(() => {
        const fetchData = async () => {
            const result = await axios.get(`https://backendexample.sanbercloud.com/api/student-scores`)
                
            setDataMhs(result.data.map(x => {return {id: x.id, name: x.name, course: x.course, score: x.score}}))
        }
        fetchData()
    }, [])

    const handleEdit = (event) => {
        let idMhs = event.target.value
        history.push(`/tugas14/edit/${idMhs}`)
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
                            history.push('/tugas14')
                        })
                    } else {
                        axios.put(`https://backendexample.sanbercloud.com/api/student-scores/${currentId}`, {name: nama, course: mataKuliah, score: nilai})
                        .then(() => {
                            let singleMhs = dataMhs.find(el => el.id === currentId)
                            singleMhs.name = nama
                            singleMhs.course = mataKuliah
                            singleMhs.score = nilai
                            setDataMhs([...dataMhs])
                            history.push('/tugas14')
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

        const state = {
            dataMhs, setDataMhs,
            input,setInput,
            currentId, setCurrentId
        }
        
        const functionHandle = {
            handleChange,
            handleSubmit,
            handleEdit,
            handleHapus,
            handleIndeks           
        }

    return(
        <Tugas13Context.Provider
            value={{
                state,
                functionHandle
            }}
        >
            {props.children}
            </Tugas13Context.Provider>
    )
}