const titulo = document.querySelector('.digitando');

function digitarLetra(elemento){
    const array = elemento.innerHTML.split('')
    console.log(array)
    elemento.innerHTML = '🧠'

    array.forEach((letra, i )=>{
        setTimeout(()=>{
            elemento.innerHTML += letra
        }, 40 * i);
    });
}

digitarLetra(titulo);