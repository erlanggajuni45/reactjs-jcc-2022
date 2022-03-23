import React from 'react';
import {Tugas13Provider} from "./tugas13Context"
import Tugas13Form from "./tugas13Form"
import Tugas13Table from "./tugas13Table"
import "./tugas13.css";

const Tugas13 = () => {
    return(
        <Tugas13Provider>
        <Tugas13Table />
        <Tugas13Form />
        </Tugas13Provider>
    )
}

export default Tugas13