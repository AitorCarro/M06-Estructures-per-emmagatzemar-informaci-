function mostrarMensaje(){
    var numero1 = document.getElementById("numero1").value;
    var numero2 = document.getElementById("numero2").value;
 
    var suma = parseFloat(numero1)+parseFloat(numero2)
 
    window.alert("El resultado de la suma es: " + suma);
   }