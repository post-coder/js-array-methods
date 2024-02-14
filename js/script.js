
const students = ['Paolo', 'Giulia', 'Marco'];

// come ciclare un array in maniera ancora più veloce

// for(let i = 0; i < students.length; i++) {
//     console.log(students[i]);
// }


// foreach cicla sempre e solo dal primo all'ultimo elemento del nostro array
students.forEach( function(currentElement, index) {

    console.log(currentElement, index)

} )

