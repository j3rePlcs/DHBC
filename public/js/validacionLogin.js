const form = document.getElementById('form');
const usuario = document.getElementById('username');

const password = document.getElementById('password');


form.addEventListener('submit', e => {
	e.preventDefault();
	
	checkInputs();
});
     
function checkInputs() {
	const usuarioValue = usuario.value.trim();
	const passwordValue = password.value.trim();
	
	if(usuarioValue === '') {
		setErrorFor(usuario, 'No puede dejar el usuario en blanco');
	} else {
		setSuccessFor(usuario);
	}

	
	if(passwordValue === '') {
		setErrorFor(password, 'Contraseña no debe ingresar en blanco.');
	} else {
		setSuccessFor(password);
	}
      let ulErrores = document.querySelector(".errores ul");
      
      errores.forEach(error => {
         ulErrores.innerHTML += `<li>${error}</li>`
    });
}