import React, { useContext } from "react";
import { Link } from "react-router-dom";
import BtnSwitchColor from "../Component/BtnSwitchColor";
import { Tugas13Context } from "../Tugas-13/tugas13Context";

const Tugas14Table = (props) => {
    const {state, functionHandle} = useContext(Tugas13Context)

    const {
        dataMhs
    } = state

    const {
        handleEdit,
        handleHapus,
        handleIndeks           
    } = functionHandle

    return(
        <>
        <BtnSwitchColor />
        { dataMhs !== null && 
        (<div>
            <h1>Data Nilai Mahasiswa</h1>
            <Link to="/tugas14/create"><button className="btn-create">Buat Data Nilai Mahasiswa Baru</button></Link>
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
                        }
                        )
                    }
                </tbody>
            </table>    
        </div>)

        
    
    }
    </>
    )
}

export default Tugas14Table