// Soal 1
let word = 'JavaScript'; 
let second = 'is'; 
let third = 'awesome'; 
let fourth = 'and'; 
let fifth = 'I'; 
let sixth = 'love'; 
let seventh = 'it!';

console.log(`${word} ${second} ${third} ${fourth} ${fifth} ${sixth} ${seventh}`);

// Soal 2
let kataPertama = "saya"; 
let kataKedua = "senang"; 
let kataKetiga = "belajar"; 
let kataKeempat = "javascript";

let hurufBesar1 = kataKedua[0].toUpperCase();
let hurufBesar2 = kataKetiga[6].toUpperCase();

let secondWord = hurufBesar1.concat(kataKedua.substring(1, 6));
let thirdWord = kataKetiga.substring(0, 6).concat(hurufBesar2);
let fourthWord = kataKeempat.toUpperCase();

console.log(`${kataPertama} ${secondWord} ${thirdWord} ${fourthWord}`)


// Soal 3
let panjangPersegiPanjang = "8";
let lebarPersegiPanjang = "5";

let alasSegitiga= "6";
let tinggiSegitiga = "7";

let pPersegiPanjang = Number(panjangPersegiPanjang);
let lPersegiPanjang = Number(lebarPersegiPanjang);
let aSegitiga = Number(alasSegitiga);
let tSegitiga = Number(tinggiSegitiga);

let kelilingPersegiPanjang = 2 * (pPersegiPanjang + lPersegiPanjang);
let luasSegitiga = aSegitiga * tSegitiga / 2;

console.log(`Keliling Persegi Panjang dengan panjang = ${pPersegiPanjang} dan lebar = ${lPersegiPanjang} adalah ${kelilingPersegiPanjang}`);
console.log(`Luas Segitiga dengan alas = ${aSegitiga} dan tinggi = ${tSegitiga} adalah ${luasSegitiga}`);

// Soal 4

let sentences= 'wah javascript itu keren sekali'; 

let firstWord= sentences.substring(0, 3); 
let secondWord = sentences.substring(4, 14); // do your own! 
let thirdWord = sentences.substring(15, 18); // do your own! 
let fourthWord = sentences.substring(19, 24); // do your own! 
let fifthWord = sentences.substring(25, 31); // do your own! 

console.log('Kata Pertama: ' + firstWord); 
console.log('Kata Kedua: ' + secondWord); 
console.log('Kata Ketiga: ' + thirdWord); 
console.log('Kata Keempat: ' + fourthWord); 
console.log('Kata Kelima: ' + fifthWord);

// Soal 5

var sentence = "I am going to be React JS Developer"; 

var exampleFirstWord = sentence[0] ; 
var exampleSecondWord = sentence[2] + sentence[3]  ; 
var thirdWord = sentence[5] + sentence[6] + sentence[7] + sentence[8] + sentence[9];  
var fourthWord = sentence[11] + sentence[12]; 
var fifthWord = sentence[14] + sentence[15]; 
var sixthWord = sentence[17] + sentence[18] + sentence[19] + sentence[20] + sentence[21]; 
var seventhWord = sentence[23] + sentence[24]; 
var eighthWord = sentence[26] + sentence[27] + sentence[28] + sentence[29] + sentence[30]
                 + sentence[31] + sentence[32] + sentence[33] + sentence[34];

console.log('First Word: ' + exampleFirstWord); 
console.log('Second Word: ' + exampleSecondWord); 
console.log('Third Word: ' + thirdWord); 
console.log('Fourth Word: ' + fourthWord); 
console.log('Fifth Word: ' + fifthWord); 
console.log('Sixth Word: ' + sixthWord); 
console.log('Seventh Word: ' + seventhWord); 
console.log('Eighth Word: ' + eighthWord);

// Soal 6

let txt = "I can eat bananas all day";
let hasil = txt.slice(10, 17); //lakukan pengambilan kalimat di variable ini

console.log(hasil);