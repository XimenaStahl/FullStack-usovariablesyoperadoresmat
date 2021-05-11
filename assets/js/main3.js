function ejercicio3() {

    // Declaración de variables y solicitud de valores
    var num = parseInt(prompt('Ingrese la cantidad de días a convertir): '));

    // Declaración de variables de Resultados
    var aa;
    var ss;
    var dd;
    var resto;

    // Realización de operaciones
    aa = Math.floor(num / 365); // años
    resto = num % 365;
    ss = Math.floor(resto / 7); // semanas
    dd = Math.floor(resto % 7); // dias


    // impresión de resultados
    document.getElementById("resultado3").innerHTML = `<br>
    ${num} días corresponden a: <br>
    ${aa} año(s)<br>
    ${ss} semana(s)<br>
    ${dd} día(s)<br>
    `

}