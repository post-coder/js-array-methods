
/*
Crea un array di oggetti che rappresentano delle persone.
Ogni persona ha un nome, un cognome e un’età.

Crea quindi un nuovo array inserendo, 
per ogni persona, una frase con il nome e cognome 
e l’indicazione se può guidare, in base all’età.
*/

const persone = [
    {
      nome: "Mario",
      cognome: "Rossi",
      eta: 15,
    },
    {
      nome: "Anna",
      cognome: "Verdi",
      eta: 30,
    },
    {
      nome: "Luca",
      cognome: "Bianchi",
      eta: 40,
    },
    {
      nome: "Sofia",
      cognome: "Neri",
      eta: 17,
    },
    {
      nome: "Marco",
      cognome: "Gialli",
      eta: 55,
    },
];


// const nuovoArray = persone.map((currentPerson) => `Sono ${currentPerson.nome} ${currentPerson.cognome} e${currentPerson.eta < 18 ? ' non' : ''} posso guidare`)

const nuovoArray = persone.map(currentPerson => {
    if(currentPerson.eta >= 18) {   

        return `Sono ${currentPerson.nome} ${currentPerson.cognome} e posso guidare`;

    } else {

        return `Sono ${currentPerson.nome} ${currentPerson.cognome} e non posso guidare`;

    }
});

console.log(nuovoArray);