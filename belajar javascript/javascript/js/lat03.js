// let isi = document.querySelector("#isi");
// isi.innerHTML = "<h1>soto</h1>" + "<p>deskripsi soto</p>" + "<img src='soto.jpg' alt='' width='200px'>";

// isi.innerHTML = "<h1>rawon</h1>";
// isi.innerHTML += "<p>deskripsi rawon </p>";
// isi.innerHTML += "<img src='rawon.webp' alt='' width='200px'>";


// for (let i = 0; i < 10; i++) {
//     // console.log(i);

//     document.querySelector("#paragraf").innerHTML += "<h1>"+i+"</h1>";
// }


// let tabel = document.querySelector("#tabel");
// tabel.innerHTML = "<table>"
//                 +"<thead><tr> <th>Nomer</th> </tr></thead>"
//                 +"<tbody>"
//                 +"<tr><td>1</td></tr>"
//                 +"<tr><td>2</td></tr>"
//                 +"<tr><td>3</td></tr>"
//                 +"<tr><td>4</td></tr>"
//                 +"<tr><td>5</td></tr>"
//                 +"</tbody>"
//                 +"</table>";

let tabel = document.querySelector("#tabel");
tabel.innerHTML = "<table><thead><tr><th>Nomer</th></tr></thead><tbody>";
// tabel.innerHTML += "<tr><td>1</td></tr>";
// tabel.innerHTML += "<tr><td>2</td></tr>";
// tabel.innerHTML += "<tr><td>3</td></tr>";

for (let i = 0; i < 8; i++) {
    tabel.innerHTML += "<tr><td>" +index+ "</td></tr>";
}
tabel.innerHTML += "</tbody></table>";