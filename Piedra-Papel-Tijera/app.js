 const root = document.getElementById("root")
 /*Fases del programa
 1. Pide una entrada de texto con un Nombre
 2. pide una entrada de numerica con una edad 
 3. muestra por el dOM el nombre y la edad capturada
   
 */ 

 // Fase #1: Pide el mombre
/* 
        Sub-fase: capturar el nombre en una variable
*/
   let nombre = " "
   let edad = 0    

  const h1mayorMenor = document.createElement("h1")
  h1mayorMenor.textContent = `Muestra nombre y edad ? `
  root.appendChild(h1mayorMenor) 
  
  const lblNombre = document.createElement(`label`)
  lblNombre.textContent = `Nombre:`
  root.appendChild(lblNombre)

  const txtNombre = document.createElement(`input`)
  txtNombre.placeholder = `Introduce Primer Nombre`
  root.appendChild(txtNombre)
  
  
  
  

  //Fase #2 pide una edad 

  /* 
        Sub-fase: capturar la edad en una variable
 */
   
    const lblEdad = document.createElement(`label`)
  lblEdad.textContent = `Edad:`
  root.appendChild(lblEdad)

  const txtEdad = document.createElement(`input`)
  txtEdad.placeholder = `Introduce tu edad`
  root.appendChild(txtEdad)
  
  

  //un boton para enviar los datos para ser concatenados 

  const btbEnviar = document.createElement(`button`)
  btbEnviar.textContent =`Enviar valor`
  root.appendChild(btbEnviar)

  // Concatena los datos y muestra en pantalla

     /*let pConctenar = document.createElement(`p`)
     pConctenar.textContent = `Tu nombre es ` nombre `, tienes ` edad  ` años de edad`
     root.appendChild(pConctenar)
     */