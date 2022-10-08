window.addEventListener("load", function() {

    let form = document.querySelector (".form")

    form.addEventListener("submit", (e) => {  
    let errores = [];
     let campoUsuario = document.querySelector("input#name");
     
     if (campoUsuario.value.length < 4) {
      errores.push("El campo de Usuario debe completarse");
    }
    let campoContraseña = document.querySelector("input#contra");

     if (campoContraseña.value.length < 4){
      errores.push("El campo de Contraseña debe completarse");
     }
       if (errores.length > 0 ){
        e.preventDefault ();
  
        let ulErrores = document.querySelector(".errores ul");
        errores.forEach(error => {
           ulErrores.innerHTML += `<li>${error}</li>`
        });
     }
   });
  })