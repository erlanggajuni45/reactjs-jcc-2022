import React, { useState } from "react";
import './tugas11.css';

const Tugas11 = () => {
  const [buah, setBuah] = useState([
    { nama: "Nanas", hargaTotal: 100000, beratTotal: 4000 },
    { nama: "Manggis", hargaTotal: 350000, beratTotal: 10000 },
    { nama: "Nangka", hargaTotal: 90000, beratTotal: 2000 },
    { nama: "Durian", hargaTotal: 400000, beratTotal: 5000 },
    { nama: "Strawberry", hargaTotal: 120000, beratTotal: 6000 }
  ]);

  const [input, setInput] = useState({
    nama: "",
    hargaTotal: 0,
    beratTotal: 0
  });

  const [currentIndex, setCurrentIndex] = useState(-1);

  const dataHapus = (event) => {
    let index = parseInt(event.target.value);
    let deletedBuah = buah[index];

    let newData = buah.filter((val) => {
      return val !== deletedBuah;
    });
    setBuah(newData);
  };

  const handleInput = (event) => {
    let {name, value} = event.target;

    setInput({ ...input, [name] : value });
  };

  const updateData = (event) => {
    let index = parseInt(event.target.value);
    let editValue = buah[index];
    setInput(editValue);
    setCurrentIndex(event.target.value);
  };

  const submitData = (event) => {
    event.preventDefault();
    let {nama, hargaTotal, beratTotal} = input
    let data = buah

    if(currentIndex === -1) {
      data = [...data, {nama, hargaTotal, beratTotal} ]
    } else {
      data[currentIndex] = input
    }
    if(nama !== ""){
        if(hargaTotal > 0){
            if(beratTotal >= 2000) {
                setBuah([...data])
                setInput({
                    nama: "",
                    hargaTotal: 0,
                    beratTotal: 0
                    })
                    setCurrentIndex(-1)
            }
        }
    }

  };

  return (
    <>
      <h1>Daftar Harga Buah</h1>
      <table>
        <thead>
          <th>No</th>
          <th>Nama</th>
          <th>Harga Total</th>
          <th>Berat Total</th>
          <th>Harga per kg</th>
          <th>Action</th>
        </thead>
        <tbody>
          {buah.map((val, index) => {
            return (
              <tr>
                <td>{index + 1}</td>
                <td>{val.nama}</td>
                <td>{val.hargaTotal}</td>
                <td>{val.beratTotal / 1000} Kg</td>
                <td>{val.hargaTotal / (val.beratTotal / 1000)} </td>
                <td align="center">
                  <button onClick={updateData} value={index}>
                    Edit
                  </button>
                  <button onClick={dataHapus} value={index}>
                    Delete
                  </button>
                </td>
              </tr>
            );
          })}
        </tbody>
      </table>

      <h1>Form Daftar Harga Buah</h1>
        <form onSubmit={submitData}>
          <label>Nama:</label>
          <input
            onChange={handleInput}
            type="text"
            value={input.nama}
            name="nama"
          />
          <br />
          <label>Harga Total:</label>
          <input
            onChange={handleInput}
            type="number"
            value={input.hargaTotal}
            name="hargaTotal"
          />
          <br />
          <label>Berat Total(dalam gram):</label>
          <input
            onChange={handleInput}
            type="number"
            value={input.beratTotal}
            name="beratTotal"
          />
          <br />
          <input type="submit" />
        </form>
    </>
  );
};

export default Tugas11;
