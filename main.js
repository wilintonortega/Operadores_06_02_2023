let a = confirm("Variable A\n\t\tSeleciona Aceptar si deseas el boleano True\n\t\tSeleciona Cancelar si deseas el boleano False")

let cuerpo = document.querySelector("#myNot");
cuerpo.insertAdjacentHTML("beforeend", ` <tr>
                                            <td>${a}</td>
                                            <td>${!a}</td>
                                        </tr>`);
