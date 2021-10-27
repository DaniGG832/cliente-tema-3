let hoy = new Date();
let fechaNacimiento = new Date("1983,9,18");
 
let edad = hoy - fechaNacimiento;
 
let dias = edad/8.64e+7;
let meses = edad/2.628e+9;
let años = edad/3.154e+10;
 
let mesesEdad = (meses - (Math.floor(años))*12);
 
let diasEdad =dias - (Math.floor(mesesEdad)*30.4167+Math.floor(años)*365.25);
 
document.write("mi edad es " + Math.floor(años)+ " años "
               +Math.floor(mesesEdad)+" meses "
               + Math.floor(diasEdad) +" dias, ");
 
document.write("<br>");
document.write("<br>");
 
document.write("años "+años);
document.write("<br>");
document.write("meses "+meses);
document.write("<br>");
document.write("dias " +dias);
 
