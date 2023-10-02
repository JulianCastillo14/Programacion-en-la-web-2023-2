document.write("Fecha ultima modificación: " + document.lastModified + "<br><br>")
// function fact(){
//     let n = document.getElementById("numero").value;
//     var fact = 1;
//     for (i = 1; i <= n; i++) {
//         fact =  fact * i;
//     }
//     document.getElementById("resultado").value =  fact;
//     console.log("Esta conectado")
// }

const  fact = () => {
    let n = document.getElementById("numero").value;
    var fact = 1;
    for (i = 1; i <= n; i++) {
        fact =  fact * i;
    }
    document.getElementById("resultado").value =  fact;
    console.log("Esta conectado")
}

const foco1 = () =>{
    factorial.numero.focus();
}

const foco2 = () => {
    factorial.resultado.focus();
}
const foco3 = () =>{
    factorial.etiqueta.focus();
}