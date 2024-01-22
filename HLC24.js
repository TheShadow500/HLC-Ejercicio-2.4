let matriz = [];        // Matriz
let suma = 0;           // Suma total para la media
let randomMaximo = 10   // Numero Random Máximo
let maximo = 0;         // Valor maximo
let minimo = 10;        // Valor minimo

// Rellenamos la matriz con valores aleatorios de 0 a 10
for(let i = 0; i < 4; i++){
    matriz[i] = [];

    for(let j = 0; j < 4; j++){
        matriz[i][j] = Math.floor(Math.random() * (randomMaximo + 1));
        mediatotal(matriz[i][j]);
        esMayorMenor(matriz[i][j])
    }
}

// Mostramos por pantalla la matriz
document.write("HLC - Actividad 2.4");
document.write("<br>Daniel Amores");
document.write("<br><br><b><u>MATRIZ ORIGINAL</u></b><br>");
document.write("<div class='container'>");
for(let i = 0; i < 4; i++){
    document.write("<div class='fila'>");
    for(let j = 0; j < 4; j++){
        document.write("<div class='celda'>" + matriz[i][j] + "</div>");
    }
    document.write("</div>");
}
document.write("</div>");

// Mostramos la media 
document.write("<br><b>La suma total de todos los números es:</b> " + suma);
document.write("<br><b>La media de todos los números es:</b> " + (suma / 16).toFixed(2));

// Mostramos los valores máximo y mínimo
document.write("<br><br><br><b><u>VALORES MÁXIMO Y MÍNIMO</u></b>")
document.write("<br><br><b>El valor máximo es:</b> " + maximo);
document.write("<br><b>El valor mínimo es:</b> " + minimo);
document.write("<div class='container'>");
for(let i = 0; i < 4; i++){
    document.write("<div class='fila'>");
    for(let j = 0; j < 4; j++){
        if(matriz[i][j] == maximo){
            document.write("<div class='celda maximo'>" + matriz[i][j] + "</div>");
        }
        else if(matriz[i][j] == minimo){
            document.write("<div class='celda minimo'>" + matriz[i][j] + "</div>");
        }
        else{
            document.write("<div class='celda'>" + matriz[i][j] + "</div>");
        }
    }
    document.write("</div>");
}
document.write("</div><br>");

// Modificamos la diagonal principal de la matriz
for(let i = 0; i < 4; i++){
    let a = matriz[i][i];
    matriz[i][i] = matriz[3][i];
    matriz[3][i] = a;
}

// Mostramos por pantalla la matriz modificada
document.write("<br><b><u>MATRIZ CON DIAGONAL INTERCAMBIADA CON LA ÚLTIMA FILA</u></b><br>");
document.write("<div class='container'>");
for(let i = 0; i < 4; i++){
    document.write("<div class='fila'>");
    for(let j = 0; j < 4; j++){
        if(i == j || i == 3){
            document.write("<div class='celda intercambio'>" + matriz[i][j] + "</div>");
        }
        else{
            document.write("<div class='celda'>" + matriz[i][j] + "</div>");
        }
    }
    document.write("</div>");
}
document.write("</div>");

// Suma de la media
function mediatotal(numero){
    suma += numero;
}

// Comprobacion de mayor y menor
function esMayorMenor(numero){
    if(numero > maximo){
        maximo = numero;
    }
    
    if(numero < minimo){
        minimo = numero;
    }
}