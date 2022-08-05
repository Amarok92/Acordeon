'use strict'

const bloque =  document.querySelectorAll('.bloque')
const h2  = document.querySelectorAll('.h2')


// cuando haga click en h2 
  // vamos a quitar la clase activo de todos los bloques 
  // vamos a  añadir la calase activo al bloque con la posicion del h2


// recorrer todos los h2
h2.forEach((cadaH2 , i)=>{
  // asignando un click a cada h2
  h2[i].addEventListener('click',()=>{


    // Recorrer todos los bloque 
    bloque.forEach( ( cadabloque , i )=>{
      // quitamos la clase activo a todos los bloques
        bloque[i].classList.remove('activo')
    })

    // añadimos la clase activo al bloque la cual la posicion sea = al del titulo h2 
    //la cual se encuentra en la linea  12...
    bloque[i].classList.add('activo')
  })
})


