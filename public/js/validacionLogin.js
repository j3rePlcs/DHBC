const form = document.getElementById('form');
const usuario = document.getElementById('username');

const password = document.getElementById('password');


form.addEventListener('submit', e => {
	e.preventDefault();
	
	checkInputs();
});
     
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