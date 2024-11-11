/* -------------- 1 - Arrays -------------- */

let numbers: number[] = [1, 2, 3]

// so pode adicionar numeros

numbers.push(5)

console.log(numbers[2])

// numbers = "teste"

const nomes: string[] = ["Leandro", "da"]

// nomes.push(4) Erro

nomes.push("Silva")

console.log(nomes)

// 2 - Outra Sintaxe array

let booleanos: Array<boolean> = [true, false]

const nums: Array<number> = [4, 5]

console.log(nums)

// nums.push("teste") erro

// 3 - Any

const array1: any = [1, "teste", true, { nome: "Leandro" }]

array1.push([1, 2, 3])

console.log(array1)

/* -------------- Function -------------- */

// 4 - Parametros

function soma(a: number, b: number) {
	console.log(a + b)
}

soma(4, 5)

// soma("a", "b") erro

// 5 - Retorno de função

function greeting(name: string): string {
	return `Olá ${name}`
}

console.log(greeting("Matheus"))
// console.log(greeting(123))

// 6 - Função anonima

setTimeout(function () {
	const sallaray: number = 1000

	// console.log(parseFloat(sallaray))

	// console.log(sallaray)
}, 2000)

// 7 - Arrow Functions

const dividir = (a: number, b: number): number => {
	return a / b
}

console.log(dividir(10, 2))

/* -------------- Object -------------- */

// 7 - Object

function passCoordinates(coord: { x: number; y: number }) {
	console.log("X coordinates:" + coord.x)
	console.log("Y coordinates:" + coord.y)
}

const objCoords = { x: 329, y: 84.2 }

passCoordinates(objCoords)

// 8 - Props

function showNumber(a: number, b: number, c?: number) {
	console.log("A: " + a)
	console.log("B: " + b)

	if (c) {
		console.log("C: " + c)
	}
}

showNumber(1, 5)

// 9 - Validando argumento opcional

function advancedGreeting(fristName: string, lastName?: string) {
	if (lastName !== undefined) {
		return `Olá ${fristName} ${lastName}`
	}

	return `Olá ${fristName}`
}

advancedGreeting("leandro", "silva")
advancedGreeting("leandro")

// 10 - Union Type

function showBalance(balance: string | number) {
	console.log(`o saldo da conta e: ${balance}`)
}

console.log(showBalance("100"))
console.log(showBalance(100))
// showBalance(true)

const array2: Array<number | string | boolean> = [1, "teste", true]

function showUserRole(role: boolean | string) {
	if (typeof role === "boolean") {
		return `Usuário não aprovado!`
	}

	return `A função do usuario é: ${role}`
}

console.log(showUserRole(false))
console.log(showUserRole("Admin"))

// 12 - Type alias
type ID = string | number

function showId(id: ID) {
	console.log(`O ID é: ${id}`)
}

console.log(showId(1))
console.log(showId("200"))

// 13 - interface

interface Point {
	x: number
	y: number
	z?: number
}

function showCoords(obj: Point) {
	console.log(`X: ${obj.x} Y: ${obj.y} Z: ${obj.z}`)
}

const coordObj: Point = {
	x: 10,
	y: 15,
}

// 14 - inferface x type alias

// type funciona como uma const
// interface funciona como um let

interface Person {
	name: string
}

interface Person {
	age: number
}

const somePerson: Person = {
	name: "leo",
	age: 21,
}

type personType = {
	name: string
}

// 15 - literal types

let teste: "testando"

teste = "testando"

function showDirection(direction: "left" | "right" | "center") {
	console.log(`A direção é: ${direction}`)
}

showDirection("left")
