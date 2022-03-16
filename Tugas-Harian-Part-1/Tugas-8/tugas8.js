/* Soal 1 */

let panjang= 12
let lebar= 4
let tinggi = 8

const luasPersegiPanjang = (p, l) => {
    return p * l;
}

const kelilingPersegiPanjang = (p, l) => {
    return 2 * (p + l);
}

const volumeBalok = (p, l, t) => {
    return p * l * t;
}
 
let HasilluasPersegiPanjang = luasPersegiPanjang(panjang, lebar)
let HasilkelilingPersegiPanjang = kelilingPersegiPanjang(panjang, lebar)
let HasilvolumeBalok = volumeBalok(panjang, lebar, tinggi)

console.log(HasilluasPersegiPanjang) 
console.log(HasilkelilingPersegiPanjang)
console.log(HasilvolumeBalok)

/* Soal 2 */

const introduce = (...rest) => {
    let [nama, umur, gender, job] = rest
    let s = "";
    if (gender == "Laki-Laki"){
        s = "Pak";
    } else if (gender == "Perempuan"){
        s = "Bu";
    }

    return `${s} ${nama} adalah seorang ${job} yang berusia ${umur} tahun`;
}

//kode di bawah ini jangan dirubah atau dihapus
const perkenalan = introduce("John", "30", "Laki-Laki", "penulis")
console.log(perkenalan) // Menampilkan "Pak John adalah seorang penulis yang berusia 30 tahun"

/* Soal 3 */

let arrayDaftarPeserta = ["John Doe", "laki-laki", "baca buku" , 1992]
let objDaftarPeserta = {
    nama : arrayDaftarPeserta[0],
    gender : arrayDaftarPeserta[1],
    hobi : arrayDaftarPeserta[2],
    tahunLahir : arrayDaftarPeserta[3]
}
console.log(objDaftarPeserta)

/* Soal 4 */

var buah = [
    {nama: "Nanas", warna: "Kuning", berbiji: false, harga: 9000},
    {nama: "Jeruk", warna: "Oranye", berbiji: true, harga: 8000},
    {nama: "Semangka", warna: "Hijau & Merah", berbiji: true, harga: 10000},
    {nama: "Pisang", warna: "Kuning", berbiji: false, harga: 5000}
]

let output = buah.filter((respon) => {
    return respon.berbiji == false
})

console.log(output)

/* Soal 5 */
let phone = {
    name: "Galaxy Note 20",
    brand: "Samsung",
    year: 2020,
    colors: ["Mystic Bronze", "Mystic White", "Mystic Black"]
 }
 // kode diatas ini jangan di rubah atau di hapus sama sekali
 
 let {brand : phoneBrand, name : phoneName, year, colors} = phone
 let [colorBronze, colorWhite, colorBlack] = colors

 // kode di bawah ini jangan dirubah atau dihapus
 console.log(phoneBrand, phoneName, year , colorBlack, colorBronze) 

 /* Soal 6 */
 let warna = ["biru", "merah", "kuning" , "hijau"]

let dataBukuTambahan= {
  penulis: "john doe",
  tahunTerbit: 2020 
}

let buku = {
  nama: "pemograman dasar",
  jumlahHalaman: 172,
  warnaSampul:["hitam"]
}
// kode diatas ini jangan di rubah atau di hapus sama sekali

/* Tulis kode jawabannya di sini */ 
buku = {
    ...buku,
    ...dataBukuTambahan,
    warnaSampul : [...buku.warnaSampul,
                   ...warna]
}

console.log(buku)

/* Soal 7 */
const tambahDataFilm = (nama, durasi, genre, tahun) => {
    let obj = { nama: nama, durasi : durasi, genre : genre, tahun : tahun}
    return dataFilm.push(obj)
}

let dataFilm = []

tambahDataFilm("LOTR", "2 jam", "action", "1999")
tambahDataFilm("avenger", "2 jam", "action", "2019")
tambahDataFilm("spiderman", "2 jam", "action", "2004")
tambahDataFilm("juon", "2 jam", "horror", "2004")
console.log(dataFilm)