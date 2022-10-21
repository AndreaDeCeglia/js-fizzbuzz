//*********************************************** */
// ****************** cicle's check **************
//*********************************************** */

// for( let i = 1; i <= 100; i++){
//     console.log(i)
//     document.getElementById('gettable').innerHTML = `${i}`
// }



// ********************************************* */
// ************* innerHTML's check **************
//********************************************** */

// let numberBox = document.getElementById('gettable');

// for ( let i = 1; i <= 100; i++ ){
//     console.log(i)

//     let string = `<p>il tuo numero è : ${i} !!</p>`
//     numberBox.innerHTML += string;
// }



//********************************************* */
//********** createElement's check ************ */
//********************************************* */

let container = document.getElementById('gettable');
let singleBox = document.createElement('div');
// add a .class
singleBox.classList.add('neon-button');
// add some text into the <tag>
singleBox.innerText = 'ciao';
console.log(singleBox)

container.append(singleBox);