/*conjunto de textos*/

const txt = [
"texto 1",
"texto 2",
"texto 3",
"texto 4",
"texto 5",
"texto 6"
];

let ind = 1;

/*botón*/

function ChanTxt() { //bucle del texto en el que se encuentra

    const parr = document.querySelector("#myText p");

    parr.textContent = txt[ind]; // indica que la constante parr, que está seleccionando el id del html, se relaciona con la constante txt que tiene el valor de ind
    ind++;

    if (ind >= txt.length){ // si el número de ind es mayor o igual a la cantidad de textos que tiene txt, se resetea
        ind = 0;
    }

}




