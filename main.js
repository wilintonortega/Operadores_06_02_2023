let a = confirm("Variable A\n\t\tSeleciona Aceptar si deseas el boleano True\n\t\tSeleciona Cancelar si deseas el boleano False");
let b = confirm("Variable B\n\t\tSeleciona Aceptar si deseas el boleano True\n\t\tSeleciona Cancelar si deseas el boleano False");

let cuerpo = document.querySelector("#myOr");
cuerpo.insertAdjacentHTML("beforeend", ` <tr>
                                            <td>${a}</td>
                                            <td>${b}</td>
                                            <td>${a || b}</td>
                                        </tr>`);


