"use strict";
/* -------------- 1 - Arrays -------------- */
let numbers = [1, 2, 3];
// so pode adicionar numeros
numbers.push(5);
console.log(numbers[2]);
// numbers = "teste"
const nomes = ["Leandro", "da"];
// nomes.push(4) Erro
nomes.push("Silva");
console.log(nomes);
// 2 - Outra Sintaxe array
let booleanos = [true, false];
const nums = [4, 5];
console.log(nums);
// nums.push("teste") erro
// 3 - Any
const array1 = [1, "teste", true, { nome: "Leandro" }];
array1.push([1, 2, 3]);
console.log(array1);
/* -------------- Function -------------- */
// 4 - Parametros
function soma(a, b) {
    console.log(a + b);
}
soma(4, 5);
// soma("a", "b") erro
// 5 - Retorno de função
function greeting(name) {
    return `Olá ${name}`;
}
console.log(greeting("Matheus"));
// console.log(greeting(123))
// 6 - Função anonima
setTimeout(function () {
    const sallaray = 1000;
    // console.log(parseFloat(sallaray))
    // console.log(sallaray)
}, 2000);
// 7 - Arrow Functions
const dividir = (a, b) => {
    return a / b;
};
console.log(dividir(10, 2));
/* -------------- Object -------------- */
// 7 - Object
function passCoordinates(coord) {
    console.log("X coordinates:" + coord.x);
    console.log("Y coordinates:" + coord.y);
}
const objCoords = { x: 329, y: 84.2 };
passCoordinates(objCoords);
// 8 - Props
function showNumber(a, b, c) {
    console.log("A: " + a);
    console.log("B: " + b);
    if (c) {
        console.log("C: " + c);
    }
}
showNumber(1, 5);
// 9 - Validando argumento opcional
function advancedGreeting(fristName, lastName) {
    if (lastName !== undefined) {
        return `Olá ${fristName} ${lastName}`;
    }
    return `Olá ${fristName}`;
}
advancedGreeting("leandro", "silva");
advancedGreeting("leandro");
// 10 - Union Type
function showBalance(balance) {
    console.log(`o saldo da conta e: ${balance}`);
}
console.log(showBalance("100"));
console.log(showBalance(100));
// showBalance(true)
const array2 = [1, "teste", true];
function showUserRole(role) {
    if (typeof role === "boolean") {
        return `Usuário não aprovado!`;
    }
    return `A função do usuario é: ${role}`;
}
console.log(showUserRole(false));
console.log(showUserRole("Admin"));
function showId(id) {
    console.log(`O ID é: ${id}`);
}
console.log(showId(1));
console.log(showId("200"));
