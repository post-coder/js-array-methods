/*

Crea un array di oggetti che rappresentano degli animali.
Ogni animale ha un nome, una famiglia e una classe.
Es:
[
  { nome: ‘leone’, famiglia: ‘felidi’, classe: ‘mammiferi’ },
  { nome: ‘cane’, famiglia: ‘canidi’, classe: ‘mammiferi’ },
  { nome: ‘gallina’, famiglia: ‘fasianidi’, classe: ‘uccelli’ },
]
Crea un nuovo array con la lista dei mammiferi.


*/

const animali = [
    { nome: 'leone', famiglia: 'felidi', classe: 'mammiferi' },
    { nome: 'cane', famiglia: 'canidi', classe: 'mammiferi' },
    { nome: 'gallina', famiglia: 'fasianidi', classe: 'uccelli' },
    { nome: 'elefante', famiglia: 'elefanti', classe: 'mammiferi' },
    { nome: 'tigre', famiglia: 'felidi', classe: 'mammiferi' },
    { nome: 'cavallo', famiglia: 'equidi', classe: 'mammiferi' },
    { nome: 'aquila', famiglia: 'accipitridi', classe: 'uccelli' },
    { nome: 'orso', famiglia: 'ursidi', classe: 'mammiferi' },
    { nome: 'lupo', famiglia: 'canidi', classe: 'mammiferi' },
    { nome: 'pinguino', famiglia: 'spheniscidae', classe: 'uccelli' },
    { nome: 'gatto', famiglia: 'felidi', classe: 'mammiferi' },
    { nome: 'pecora', famiglia: 'bovidi', classe: 'mammiferi' },
    { nome: 'anatra', famiglia: 'anatidi', classe: 'uccelli' },
    { nome: 'rana', famiglia: 'ranidi', classe: 'anfibi' }
];


document.querySelector("button").addEventListener("click", () => {

    const parolaDaFiltrare = document.querySelector("#filtro").value;

    let animaliFiltrati = [];

    animaliFiltrati = animali.filter((currentAnimal) => {
    
        return currentAnimal.classe == parolaDaFiltrare
    
    });
    
    // console.log(animaliFiltrati)

    const listaElement = document.querySelector("ul");
    listaElement.innerHTML = "";

    animaliFiltrati.forEach(element => {
        const newElement = document.createElement("li");
        newElement.innerText = element.nome;
        listaElement.append(newElement)

    })

})

