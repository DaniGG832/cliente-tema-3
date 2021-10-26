document.write("<h2>Lista de 10 números aleatorios: </h2>");
 
 for (let i = 0; i < 10; i++) {
  
   let azar = Math.round((Math.random()* (20 - 10 )) + 10);
 
   document.write("<p>"+(i+1)+ " --> <span style='color: red;' >" + azar +"</span></p>");
 }
 
