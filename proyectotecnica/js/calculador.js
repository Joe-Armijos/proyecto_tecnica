class proyect{
    limpiarCampos() {
        document.getElementById("valor1").value = "";
        document.getElementById("valor2").value = "";
        document.getElementById("Salida_Datos").value = "";
    }
    
    suma(){
    let  num1 = parseInt(document.getElementById('valor1').value);
    let num2 = parseInt(document.getElementById('valor2').value);
    let textarea = document.getElementById("Salida_Datos");
    let suma=0
    suma= num1+num2

    textarea.textContent = ("la suma  es: " + suma)
    }
    resta(){
        let  num1 = parseInt(document.getElementById('valor1').value);
    let num2 = parseInt(document.getElementById('valor2').value);
    let textarea = document.getElementById("Salida_Datos");
    let resta=0
    resta= num1-num2

    textarea.textContent = ("la resta es: " + resta)
    }
    multiplicacion(){
        let  num1 = parseInt(document.getElementById('valor1').value);
    let num2 = parseInt(document.getElementById('valor2').value);
    let textarea = document.getElementById("Salida_Datos");
    let multi=0
    multi= num1*num2
    num1=multi

    textarea.textContent = ("la multiplicacion  es: " + multi)
    }
    division() {
        let num1 = parseInt(document.getElementById('valor1').value);
        let num2 = parseInt(document.getElementById('valor2').value);
        let textarea = document.getElementById("Salida_Datos");
        let division = 0;
    
        if (num2 !== 0) {
            division = num1 / num2;
            textarea.textContent = ("La división es: " + division);
        } else {
            textarea.textContent = "Error: División por cero no permitida";
        }
    }
    
    potenciacion(){
    let  num1 = parseInt(document.getElementById('valor1').value);
    let num2 = parseInt(document.getElementById('valor2').value);
    let textarea = document.getElementById("Salida_Datos");
    let resultado = Math.pow(num1, num2);
    textarea.textContent = ("la respuesta  es: " + resultado)
    }
    raiz(){
    let  num1 = parseInt(document.getElementById('valor1').value);
    let textarea = document.getElementById("Salida_Datos");
    let resultad=0
            if (num1 >= 0) {
         resultad = Math.sqrt(num1);
          } else {
              resultad= "Error: Valor negativo";         
              }
              textarea.textContent = ("la respuesta  es: " + resultad)
    }
}

let x= new proyect()

