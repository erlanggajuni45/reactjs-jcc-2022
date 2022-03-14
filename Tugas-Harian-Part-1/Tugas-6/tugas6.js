/* Soal 1 */

console.log("Soal 1");

let nilaiJohn = 80;
let nilaiDoe = 50;
let indeksJohn = "";
let indeksDoe = "";

if (nilaiJohn >= 80) {
    indeksJohn = "A";
} else if (nilaiJohn < 80 && nilaiJohn >= 70){
    indeksJohn = "B";
} else if (nilaiJohn < 70 && nilaiJohn >= 60){
    indeksJohn = "C";
} else if (nilaiJohn < 60 && nilaiJohn >= 50){
    indeksJohn = "D";
} else if (nilaiJohn < 50) {
    indeksJohn = "E";
}

if (nilaiDoe >= 80) {
    indeksDoe = "A";
} else if (nilaiDoe < 80 && nilaiDoe >= 70){
    indeksDoe = "B";
} else if (nilaiDoe < 70 && nilaiDoe >= 60){
    indeksDoe = "C";
} else if (nilaiDoe < 60 && nilaiDoe >= 50){
    indeksDoe = "D";
} else if (nilaiDoe < 50) {
    indeksDoe = "E";
}

console.log("Indeks nilai John adalah " + indeksJohn);
console.log("Indeks nilai Doe adalah " + indeksDoe );

/* Soal 2 */

console.log('\nSoal 2')

let tanggal = 10;
let bulan = 6;
let tahun = 2000;

switch (bulan) {
    case 1  : console.log(`Tanggal Lahir saya adalah ${tanggal} Januari ${tahun}`); break;
    case 2  : console.log(`Tanggal Lahir saya adalah ${tanggal} Februari ${tahun}`); break;
    case 3  : console.log(`Tanggal Lahir saya adalah ${tanggal} Maret ${tahun}`); break;
    case 4  : console.log(`Tanggal Lahir saya adalah ${tanggal} April ${tahun}`); break;
    case 5  : console.log(`Tanggal Lahir saya adalah ${tanggal} Mei ${tahun}`); break;
    case 6  : console.log(`Tanggal Lahir saya adalah ${tanggal} Juni ${tahun}`); break;
    case 7  : console.log(`Tanggal Lahir saya adalah ${tanggal} Juli ${tahun}`); break;
    case 8  : console.log(`Tanggal Lahir saya adalah ${tanggal} Agustus ${tahun}`); break;
    case 9  : console.log(`Tanggal Lahir saya adalah ${tanggal} September ${tahun}`); break;
    case 10 : console.log(`Tanggal Lahir saya adalah ${tanggal} Oktober ${tahun}`); break;
    case 11 : console.log(`Tanggal Lahir saya adalah ${tanggal} November ${tahun}`); break;
    case 12 : console.log(`Tanggal Lahir saya adalah ${tanggal} Desember ${tahun}`); break;
    default: console.log("Masukkan angka untuk bulan dari 1 - 12!");
}

/* Soal 3 */

console.log('\nSoal 3');

let a = 2;
let b = 20;

console.log("LOOPING PERTAMA");
while (a <= 20) {
    console.log(`${a} - I love coding`);
    a+=2;
}

console.log("LOOPING KEDUA");
while (b >= 2) {
    console.log(`${b} - I will become a frontend developer`);
    b-=2;
}

/* Soal 4 */

console.log('\nSoal 4')

let output = "";
for(let c = 1; c <= 20; c++){
    if (c % 2 == 1 ) {
        if (c % 3 == 0) {
            output = "I Love Coding";
        } else {
        output = "Santai";
        }
    } else if (c % 2 == 0) {
        output = "Berkualitas";
    }
    
    console.log(`${c} - ${output}`);
}

/* Soal 5 */

console.log('\nSoal 5')
let tagar = 7;
let hasil = "";

for (let x = tagar; x > 0; x--){
    for(let y = tagar; y >= x; y--) {
        hasil += "#";
    }
   hasil += "\n";
}

console.log(hasil);
