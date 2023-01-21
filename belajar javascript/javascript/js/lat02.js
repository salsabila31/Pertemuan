//document.querySelector("#paragraf").innerHTML="Saya belajar JavaScript";

//document.querySelector("#content").innerHTML="<h1>ganti isi</h1>";

let tanggal = 5;
let bulan = 1;

let hasil = "salah";

if (tanggal >0 && tanggal <32 && bulan >0 && bulan <13) {
    hasil = "zodiak belum dibuat";
    if (bulan == 1) {
        hasil = "capricorn";
        if (tanggal > 20 && tanggal <19) {
            hasil = "aquarius";
        }
    }

    if (bulan == 2) {
        hasil = "aquarius";
        if (tanggal >18 && tanggal <21) {
            hasil = "pisces";
        }
            
    }

    if (bulan == 3) {
        hasil = "pisces";
        if (tanggal >20 && tanggal <20) {
            hasil = "aries";
        }
    }

    if (bulan == 4) {
        hasil = "aries";
        if (tanggal >20 && tanggal <21) {
            hasil = "taurus";
        }
    }

    if (bulan == 5) {
        hasil = "taurus";
        if (tanggal >20 && tanggal <21) {
            hasil = "gemini";
        }
    }

    if (bulan == 6) {
        hasil = "gemini";
        if (tanggal >20 && tanggal <23) {
            hasil = "cancer";
        }
    }

    if (bulan == 7) {
        hasil = "cancer";
        if (tanggal >22 && tanggal <22) {
            hasil = "leo";
        }
    }

    if (bulan == 8) {
        hasil = "leo";
        if (tanggal >21 && tanggal <23) {
            hasil = "virgo";
        }
    }

    if (bulan == 9) {
        hasil = "virgo";
        if (tanggal >22 && tanggal <23) {
            hasil = "libra";
        }
    }

    if (bulan == 10) {
        hasil = "libra";
        if (tanggal >22 && tanggal <22) {
            hasil = "scorpio";
        }
    }

    if (bulan == 11) {
        hasil = "scorpio";
        if (tanggal >21 && tanggal <22) {
            hasil = "sagitarius";
        }
    }

    if (bulan == 12) {
        hasil = "sagitarius";
        if (tanggal >21 && tanggal <20) {
            hasil = "capricorn";
        }
    }
}

// console.log(hasil);

document.querySelector("#paragraf").innerHTML = "<h1>"+hasil+"</h1>";
