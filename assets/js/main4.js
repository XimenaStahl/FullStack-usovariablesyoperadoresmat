function ejercicio4() {
    // Declaración de variables y solicitud de valores
    var num1 = parseInt(prompt('Ingrese un número : '));
    var num2 = parseInt(prompt('Ingrese un segundo número: '));
    var num3 = parseInt(prompt('Ingrese un tercer número: '));
    var num4 = parseInt(prompt('Ingrese un cuarto número: '));
    var num5 = parseInt(prompt('Ingrese un quinto número: '));

    // Declaración de variables de Resultados
    var tsuma;
    var tprom;

    // Realizaación de operaciones
    tsuma = num1 + num2 + num3 + num4 + num5; // suma
    tprom = Math.floor(tsuma / 5); //promedio

    // impresión de resultados
    document.getElementById("resultado4").innerHTML = `<br>
    Suma y Promedio <br>
    Los números ingresados son: ${num1} - ${num2} - ${num3} - ${num4} - ${num5}<br>
    La suma de los números es: ${tsuma} <br>
    El promedio de los números es: ${tprom}<br>
    `
}