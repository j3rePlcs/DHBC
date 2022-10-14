const small = document.querySelector('small');
const generator = document.querySelector('.boton.Gen');

generator.addEventListener("click", function () {
    var min = 10;
    var max = 30;
    
    var x = Math.floor(Math.random()*(max-min+1)+min);
    
    function barajar(array) {
        let posicionActual = array.length;
      
        while (0 !== posicionActual) {
          const posicionAleatoria = Math.floor(Math.random() * posicionActual);
          posicionActual--;
          [array[posicionActual], array[posicionAleatoria]] = [
            array[posicionAleatoria], array[posicionActual]];
        }
        return array;
    }
    function generarAleatorios(cantidad) {
        const caracteres = "ABC".split("");
        const numeros = "123456789".split("");
        barajar(caracteres, numeros);
        return caracteres.slice(0,1).join("") + x
      }
      console.log(generarAleatorios());
      small.innerText = generarAleatorios();
})
