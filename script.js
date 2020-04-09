function onClick_Info() {
const p = document.getElementsByTagName('p');
console.log('There are ' + p.length + ' paragraph tags on the page.');

const ids = document.querySelectorAll('#A p');
console.log(ids.length);
//console.log('There are ' + ids.length + ' elements inside the first ID.');

const idss = document.querySelectorAll('#AA p');
console.log(idss.length);
//console.log('There are ' + idss.length + ' elements inside the second ID.');
}

document.getElementById('but1').addEventListener('click', e => {
    onClick_Info();
  })

function onClick_fillBlank() {

    document.getElementById('name').style.color = "rgb(154,127,256)";
    document.getElementById('op1').style.fontSize = "50px";
    document.getElementById('op2').style.fontSize = "100px";

    let js1 = ["Mail_Clock","Nuclear_Ice_cream","Leash_Male","Floppy_Disk_YouTube","Bird_Mail","Soda_BBQ","Shelf_Shoe","Book_Monster","Post_office_Soda","Robot_Allergies"]
    for (i =0; i < js1.length; i++) {
        document.getElementById('name').innerHTML = js1[i];
    }
    let js2 = ["ignorant", "specified", "concerned","patronizing", "modest", "objective", "indebted", "condemned", "deprived", "ditzy"]
    for (i =0; i < js2.length; i++) {
        document.getElementById('op1').innerHTML = js2[i];
    }
    for (var x = js2.length - 1; x >= 0; x--) {        
        document.getElementById('op2').innerHTML = js2[x];
    }
}

document.getElementById('but2').addEventListener('click', e => {
    onClick_fillBlank();
      })

function onClick_song() {
    const song = document.getElementById("op3").value;
    document.getElementById("song").innerHTML = song;
}

document.getElementById('but3').addEventListener('click', e => {
    onClick_song();
      })
