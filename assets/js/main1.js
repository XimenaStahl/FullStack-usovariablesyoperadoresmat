function ejercicio1() {
    // Declaración de variables y solicitud de valores
    var num1 = parseInt(prompt('Ingrese un número mayor que cero: '));
    var num2 = parseInt(prompt('Ingrese otro número mayor que cero: '));

    // Declaración de variables de Resultados
    var tsuma;
    var tresta;
    var tmult;
    var tdiv;
    var tmod;

    // Realizaación de operaciones
    tsuma = num1 + num2; // suma
    tresta = num1 - num2; // resta
    tmult = num1 * num2; // multiplicación
    tdiv = Math.floor(num1 / num2); //división
    tmod = num1 % num2; // módulo

    // impresión de resultados
    document.getElementById("resultado1").innerHTML = `<br>
    Cálculos matemáticos con los números ingresados: ${num1} y ${num2} <br>
    La suma es: ${tsuma} <br>
    La resta es: ${tresta} <br>
    La multiplicación es: ${tmult} <br>
    La división es: ${tdiv} <br>
    El módulo es: ${tmod} <br>
    `
}