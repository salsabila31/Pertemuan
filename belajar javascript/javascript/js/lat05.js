function perkalian(a,b) {
    return a * b;
}

console.log(perkalian(3,5));

let kali = (a,b) => a*b;
console.log(kali(4,4));

let zodiak = (bln,tgl) => {
    hasil = "zodiak salah";
    if (bln >0 && bln <13 && tgl >0 && tgl >32) {
        if (bln == 1) {
            hasil = "capricorn";
        }
    }
    return hasil;
}
console.log(zodiak(4,5));

let lulus = (nilai) => {
    if (nilai >0 && nilai <=100) {
        if (nilai >75) {
            result = "anda tidak lulus"
        }
        if (nilai <75) {
            result = "anda lulus"
        }
    }
    return result;
}
console.log(lulus(80));