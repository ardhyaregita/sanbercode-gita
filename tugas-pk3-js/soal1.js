console.log("Soal 1 - Program Akar Pangkat 2");

const prompt = require('prompt-sync')({sigint: true});

const angka = prompt('Masukan bilangan Genap: ');

const validAngka = angka

if(validAngka<0){
    console.log("Tidak bisa input bilangan negatif")
} else if(validAngka%2!=0){
    console.log("Tidak bisa input bilangan ganjil")
} else{
    hasil = Math.sqrt(validAngka)
    console.log("Hasil akar pangkat 2 dari " +validAngka+ " adalah " + hasil)
    
}
