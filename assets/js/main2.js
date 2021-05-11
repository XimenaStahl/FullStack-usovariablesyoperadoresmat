function ejercicio2() {
    // Declaración de variables y solicitud de valores
    var num = prompt('Ingrese un valor en grados Celsius (se consideran dos decimales y el separador es el punto): ');
    var num1 = parseFloat(num); // número con dos decimales

    // Declaración de variables de Resultados
    var gradKel;
    var gradFah;

    // Realización de operaciones
    gradKel = num1 + 273.15; // grados Kelvin
    gradFah = (num1 * 9 / 5) + 32; // grados Fahrenheit
    gradKel = gradKel.toFixed(2);
    gradFah = gradFah.toFixed(2);

    // impresión de resultados
    document.getElementById("resultado2").innerHTML = `<br>
    ${num1} °Celsius equivalen a <br>
    ${gradKel} grados Kelvin <br>
    ${gradFah} grados Fahrenheit <br
    `

}