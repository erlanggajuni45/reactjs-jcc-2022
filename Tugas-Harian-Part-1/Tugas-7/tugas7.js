/* Soal 1 */
let dataPeserta = ["john", "laki-laki", "programmer", "30"];
const [nama, gender, job, old] = dataPeserta;

let output = `Halo, nama saya ${nama}. Saya ${gender} berumur ${old} bekerja sebagai seorang ${job}`;
console.log(output);

/* Soal 2 */
let array1 = ["selamat", "anda", "melakukan", "perulangan", "array", "dengan", "for"];

for (let a = 0; a < array1.length; a++){
    console.log(array1[a]);
}

/* Soal 3 */
let array2 = [1, 2, 3, 4, 5, 6,7, 8, 9, 10];

for (let b = 0; b < array2.length; b++){
    if(b%2 == 1){
    console.log(array2[b]);
    }
}

/* Soal 4 */

let kalimat= ["aku", "saya", "sangat", "sangat", "senang", "belajar", "javascript"]

kalimat.shift()
kalimat.splice(1,1)
let hasil4 = kalimat.join(" ")
console.log(hasil4)

/* Soal 5 */

var sayuran = [];
sayuran.push("Kangkung", "Bayam", "Buncis", "Kubis", "Timun", "Seledri", "Tauge");
sayuran.sort();
let l;

for (let c = 0; c < sayuran.length; c++){
    l = c + 1
    console.log(l + ". " + sayuran[c])    
}


