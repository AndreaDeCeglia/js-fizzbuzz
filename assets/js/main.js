//*********************** */
// *** cicle's check ****
//*********************** */

// for( let i = 1; i <= 100; i++){
//     console.log(i)
//     document.getElementById('gettable').innerHTML = `${i}`
// }

// *********************
// *** innerHTML's check ***
//********************** */

let numberBox = document.getElementById('gettable');

for ( let i = 1; i <= 100; i++ ){
    console.log(i)

    let string = `<p>il tuo numero è : ${i} !!</p>`
    numberBox.innerHTML += string;
}