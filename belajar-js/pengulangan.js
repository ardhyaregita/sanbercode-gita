console.log("Pengulangan Sederhana");

const prompt = require('prompt-sync')({sigint: true});

const pw1 = prompt('Enter a password: ');


const validPassword = 'password'

 

if(pw1===validPassword){

    console.log("Selamat datang bos!")

}

else {

    console.log("Password Salah, coba lagi!")

}

console.log("Terimakasih sudah menggunakan aplikasi kami")