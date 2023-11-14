// Entrega n1 de Javascript

// 1- Crear una función que reciba un número por parámetro e indique en consola si el número es par o impar.

function esPar(num) {
    if (num % 2 === 0) {
        console.log(`${num} es par`);
    } else {
        console.log(`${num} no es par`);

    }
}

esPar(2);
esPar(5);

// 2- Crear una función que reciba dos números por parámetro e indique en consola que número es mayor, y si ninguno lo es, indicar por consola que son iguales.

function esIgual(x, y) {
    if (x > y) {
        console.log(`${x} es mayor que ${y}`);
    } else if (x < y) {
        console.log(`${y} es mayor que ${x}`);
    } else {
        console.log(`${x} y ${y} son iguales`);
    }
}

esIgual(2, 5);
esIgual(8, 3);
esIgual(9, 9);
console.log('--------------------------------');

// 3- Crear una función que reciba un número por parámetro e indique en consola si ese número es múltiplo de 5.

function esMultiplo(num) {
    if (num % 5 === 0) {
        console.log(`${num} es múltiplo de 5`);
    } else {
        console.log(`${num} no es múltiplo de 5`);
    }
}

esMultiplo(25);
esMultiplo(12);
console.log('--------------------------------');

// 4- Crear una función que reciba un número por parámetro e imprima por consola todos los números desde el 0 hasta llegar a ese número.

function escala(num) {
    for (let i = 0; i <= num; i++) {
        console.log(i);
    }
}

escala(10)
console.log('--------------------------------');

// 5 - Crear una función que reciba una palabra y un número por parámetro e imprima por consola  esa palabra la cantidad correspondiente al número indicado.

function cuentaPalabra(palabra, num) {
    for (let i = 1; i <= num; i++) {
        console.log(palabra);
    }
}

cuentaPalabra('Agustín', 10)
console.log('--------------------------------');

// 6 - Crear una función que reciba un array por parámetro e imprima por consola todos los valores de ese array.

function array(arr) {
    for (let i = 0; i < arr.length; i++) {
        console.log(arr[i]);
    }
}

array(['Juan', 'Pedro', 'Laura', 'Julia'])
console.log('--------------------------------');

// 7 - Crear una función que reciba un array con 10 números e imprima por consola todos los valores de ese array, menos el que se encuentre en la 5ta posición del mismo. Ayuda: Recuerden que el primer índice de un array es "0".

function saltear(arr) {
    for (let i = 0; i < arr.length; i++) {
        if (i === arr[4]) continue;
        console.log(arr[i]);
    }
}

saltear([1, 2, 3, 4, 5, 6, 7, 8, 9, 10])
console.log('--------------------------------');
// 8 - Crea una función que reciba un array de números y un número por parámetro e imprima por consola cada número del array multiplicado por el número pasado por parámetro.

function multiplicar(arr, num) {
    for (let i = 0; i < arr.length; i++) {
        console.log(arr[i] * num);
    }
}

multiplicar([1, 2, 3, 4], 2)
console.log('--------------------------------');



