let num1=10, num2=5;
let resultado;
let miestilo="background: linear-gradient(45deg,rgb(182, 182, 234),rgb(228, 153, 153));font-weight: bold;padding: 5px;";


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