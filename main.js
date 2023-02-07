let num1=10, num2=5;
let resultado;
let miestilo="background: linear-gradient(45deg,rgb(182, 182, 234),rgb(228, 153, 153));font-weight: bold;padding: 5px;";
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
