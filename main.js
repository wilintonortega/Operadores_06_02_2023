let num1=10, num2=5;
let resultado;
let miestilo="background: linear-gradient(45deg,rgb(182, 182, 234),rgb(228, 153, 153));font-weight: bold;padding: 5px;";
let miestilo2="background: linear-gradient(45deg,rgb(224, 184, 223),rgb(201, 209, 252));font-weight: bold;padding: 5px;border: dashed salmon;";
let mititulo="font-weight:700;padding: 10px;border: dashed salmon;font-size: 36px;";





const num3=5.5654;

//Operador de adicion 'SUMA'
resultado=num1+num2;
console.log(`%c${num1} + ${num2} = ${resultado}`,miestilo);

//Operador de sustraccion 'RESTA'
resultado=num1-num2;
console.log(`%c${num1} - ${num2} = ${resultado}`,miestilo);

//Operador de Division  'Division'
resultado=num1/num2;
console.log(`%c${num1} / ${num2} = ${resultado}`,miestilo);

//Operador de Multiplicacion  'Multiplicacion'
resultado=num1*num2;
console.log(`%c${num1} X ${num2} = ${resultado}`,miestilo);

//Operador de Exponenciacion 'Exponenciacion'

resultado=num1**2;
console.log(`%c${num1} ^ 2  = ${resultado}`,miestilo);

//Operador de resta division 'Modulo'
resultado=num1%num2;
console.log(`%c${num1} % ${num2} = ${resultado}`,miestilo);





/****************************************************************** */


// Math.ceil(x)
// Devuelve el entero más pequeño mayor o igual que un número.
resultado=Math.ceil(num3);
console.log(`%cLa aproximación de ${num3} con ceil(derecha) es:  ${resultado}`,miestilo);

// Math.floor(x)
// Devuelve el mayor entero menor que o igual a un número.
resultado=Math.floor(num3);
console.log(`%cLa aproximación de ${num3} con floor(izquierda) es:  ${resultado}`,miestilo);

// Math.max()
// Devuelve el mayor de cero o más números.
resultado=Math.max(num1,num2);
console.log(`%c${num1} , ${num2} el mayor es:  ${resultado}`,miestilo);

// Math.min()
// Devuelve el más pequeño de cero o más números.
resultado=Math.min(num1,num2);
console.log(`%c${num1} , ${num2} el menor es:  ${resultado}`,miestilo);

// Math.pow(x, y)
// Las devoluciones de base a la potencia de exponente, que es, baseexponent.
resultado=Math.pow(num1,num2);
console.log(`%c${num1} elevado ${num2} es:  ${resultado}`,miestilo);

// Math.random()
// Devuelve un número pseudo-aleatorio entre 0 y 1.
resultado=Math.random()*num1;
console.log(`%cEl random entre 0 y ${num1},  el random es:  ${resultado}`,miestilo);


// Math.round(x)
// Devuelve el valor de un número redondeado al número entero más cercano.
resultado=Math.round(num3);
console.log(`%cLa aproximacion de ${num3} con Round es:  ${resultado}`,miestilo);

// Math.sqrt(x)
// Devuelve la raíz cuadrada positiva de un número.
resultado=Math.sqrt(num1);
console.log(`%cLa raiz cuadrada de  ${num1},   es:  ${resultado}`,miestilo);


// Math.trunc(x)
// Devuelve la parte entera del número x, la eliminación de los dígitos fraccionarios.
resultado=Math.trunc(num3);
console.log(`%cEl ${num3} sin decimales con (trunc) es:  ${resultado}`,miestilo);


// 5.68545.toFixed(x)
// Devuelve la cantidad de numeros decimal segun x
resultado=num3.toFixed(1);
console.log(`%cEl ${num3} es con un decimal(toFixed) es:  ${resultado}`,miestilo);



console.log("%c OPERADORES DE COMPARACIÓN",mititulo);

///OPERADORES DE COMPARACIÓN

let a=5;
let b="5";
let c=7;


//""

//igualdad (a==b)
resultado = (a == b);
console.log(`%c ${a} es igual que ${b} --> ${resultado}`,miestilo2)


//No Igualdad (a != b)
resultado = (a != b);
console.log(`%c ${a} es diferente ${b} --> ${resultado}`,miestilo2)

//Identidad (a===b)
resultado = (a === b);
console.log(`%c ${a}  es igual ${b} en dato y tipo de dato --> teniendo en cuenta que  ${a} es tipo de dato ${typeof(a)} y ${b} es tipo de dato ${typeof(b)} --> El resultado es  ${resultado}`,miestilo2)

//No Identidad (a !== b)
resultado = (a !== b);
console.log(`%c ${a} diferente a ${b} en dato y tipo de dato --> teniendo en cuenta que  ${a} es tipo de dato ${typeof(a)} y ${b} es tipo de dato ${typeof(b)} --> El resultado es ${resultado}`,miestilo2)

//Mayor que (a > c)
resultado = (a > c);
console.log(`%c ${a} es mayor que ${c} --> ${resultado}`,miestilo2)

//Mayor o igual que (a >= b)
resultado = (a >= b);
console.log(`%c ${a} es mayor o igual que ${b} --> ${resultado}`,miestilo2)

//Menor que (a < b)
resultado = (a < b);
console.log(`%c ${a} es menor que ${b} --> ${resultado}`,miestilo2)

//Menor o igual que (a <= b)
resultado = (a <= b);
console.log(`%c ${a} es menor o igual que ${b} --> ${resultado}`,miestilo2)