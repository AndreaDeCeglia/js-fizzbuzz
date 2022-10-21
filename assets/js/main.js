//*********************************************** */
//***************** EXERCISE ******************** */
//*********************************************** */

let numberBox = document.getElementById("Container");
numberBox.classList.add('d-flex')
numberBox.classList.add('flex-wrap')

//let singleBox = document.createElement("div");

//numberBox.classList.add("neon-button")

//numberBox.append(singleBox);



for (let i = 1; i <=100; i++) {

    let box = document.createElement("div");
    box.classList.add('col-1')
   
    if (i % 3 == 0 && i % 5 == 0){
        
        console.log(`FIZZBUZZ`);
        
        box.classList.add('neon-button');
        box.innerText = `${i} FIZZBUZZ`;

    }else if(i % 3 == 0){
        
        console.log(`FIZZ`);
        
        box.classList.add('bg-primary');
        box.innerText = `${i} FIZZ`;

    
    }else if (i % 5 == 0){
        
        console.log(`BUZZ`);
        box.classList.add('bg-secondary');
        box.innerText =`${i} BUZZ`;

    }else{
        
        console.log(`${i}`);
        box.classList.add('bg-light');
        box.innerText =`${i}`;

    }

    numberBox.append(box);
} 



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

// let container = document.getElementById('gettable');
// let singleBox = document.createElement('div');
// // add a .class
// singleBox.classList.add('neon-button');
// // add some text into the <tag>
// singleBox.innerText = 'ciao';
// console.log(singleBox)

// container.append(singleBox);