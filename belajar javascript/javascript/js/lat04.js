function coba(a) {
    console.log("eventlistener");
}

klik.addEventListener("click",coba);
klik.onclick = function (a) {
    alert(6)
};

// zodiak(20,7);

// function hasil(a) {
//     let a = document.querySelector("#tanggal").ariaValueMax;
//     tampil.innerHTML = a;
// }

let tampil = document.querySelector("#belajar");

function zodiak() {
    bulan = document.getElementById("bulan").value;
    tanggal = document.getElementById("tanggal").value;

    let hasil = "salah";
    if (bulan >0 && bulan <13 && tgl >0 && tgl <32) {
        hasil = "zodiak belum dibuat";
        if (bulan == 1) {
            hasil = "capricorn";
            if (tgl >19 ) {
                hasil = "aquarius";
            }
        }
        
        if (bulan == 2) {
            hasil = "aquarius";
            if (tgl >18 && tgl <20) {
                hasil = "pisces";
            }
        }
        if (bulan == 3) {
            hasil = "pisces";
            if (tgl >20 && tgl <19) {
                hasil = "aries";
            }
        }
        if (bulan == 4) {
            hasil = "aries";
            if (tgl >19 && tgl <20) {
                hasil = "taurus";
            }
        }
        if (bulan == 5) {
            hasil = "taurus";
            if (tgl >20 && tgl <20) {
                hasil = "gemini";
            }
        }
        if (bulan == 6) {
            hasil = "gemini";
            if (tgl >20 && tgl <22) {
                hasil = "cancer";
            }
        }
        if (bulan == 7) {
            hasil = "cancer";
            if (tgl >22 && tgl <22) {
                hasil = "leo";
            }
        }if (bulan == 8) {
            hasil = "leo";
            if (tgl >22 && tgl <22) {
                hasil = "virgo";
            }
        }
        if (bulan == 9) {
            hasil = "virgo";
            if (tgl >22 && tgl <22) {
                hasil = "libra";
            }
        }
        if (bulan == 10) {
            hasil = "libra";
            if (tgl >22 && tgl <21) {
                hasil = "scorpio";
            }
        }
        if (bulan == 11) {
            hasil = "scorpio";
            if (tgl >21 && tgl <21) {
                hasil = "sagittarius";
            }
        }
        if (bulan == 12) {
            hasil = "sagittarius";
            if (tgl >21 && tgl <19) {
                hasil = "capricorn";
            }
        }
    }
    console.log(hasil);
    tampil.innerHTML = hasil;
}

// lulus(75);
function lulus(angka) {
    nilai = document.getElementById("nilai").value;
    let hasil = "Nilai tidak valid";
    if (angka >0 && angka <=100) {
        
    }
    if (angka >=75 ) {
        hasil = "Anda lulus";
    }
    else {
        hasil = "Anda tidak lulus"
    }
    console.log(hasil);
    tampil.innerHTML = hasil;
}

// console.log(terbilang(587600));
function terbilang(angka) {
    angka = document.getElementById("angka").value;
    var huruf = [" ", "Satu", "Dua", "Tiga", "Empat", "Lima", "Enam", "Tujuh", "Delapan", "Sembilan", "Sepuluh", "Sebelas"];

    if (angka < 12) {
        return huruf[angka];
    } 
    else if (angka <20) {
        return terbilang(angka-10)+" belas ";
    }
    else if (angka <100) {
        return terbilang(Math.floor((angka)/10))+" puluh "+terbilang((angka)%10);
    }
    else if (angka <200) {
        return "seratus"+terbilang((angka)-100);
    }
    else if (angka <1000) {
        return terbilang(Math.floor((angka)/100))+" ratus "+terbilang((angka)%100);
    }
    else if (angka <2000) {
        return "seribu"+terbilang((angka)-1000);
    }
    else if (angka <10000) {
        return terbilang(Math.floor((angka)/1000))+" ribu "+terbilang((angka)%1000);
    }
    else if (angka <1000000) {
        return terbilang(Math.floor((angka)/10000))+" juta "+terbilang((angka)%10000);
    }
    else if (angka <1000000000) {
        return terbilang(Math.floor((angka)/100000))+" milyar "+terbilang((angka)%1000000);
    }
    else if (angka <1000000000000) {
        return terbilang(Math.floor((angka)/1000000))+" triliun "+terbilang((angka)%1000000000);
    }
}

// console.log(prima(9));
function prima(bilangan) {
    bilangan = document.getElementById("bilangan").value;
    let pembagi = 0;
    for (let i = 1; i <= bilangan; i++) {
        if (bilangan%i == 0) {
            pembagi++
        }
    }
    if (pembagi == 2) {
        return "prima";
    }
    else{
        return "bukan prima";
    }
}