let fechaNacimiento = new Date(1983,9,18);

let hoy = new Date();


var año = hoy.getFullYear() - fechaNacimiento.getFullYear();

var meses = hoy.getMonth()-fechaNacimiento.getMonth();

var dias = hoy.getDate()-fechaNacimiento.getDate();


document.write("mi edad es "+ año + " años "+ meses+1 +" meses "+ dias +" dias");



