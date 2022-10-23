//*********************************************** */
//***************** EXERCISE ******************** */
//*********************************************** */

let numberBox = document.getElementById("fizzbuzzcontainer");
numberBox.classList.add('d-flex');
numberBox.classList.add('flex-wrap');

let from;
let till;
const findOut = document.getElementById('findOutBtn');
const reset = document.getElementById('resetBtn');
findOut.addEventListener('click', start);
findOut.addEventListener('click', disableButton);
reset.addEventListener('click', clearBox);
reset.addEventListener('click', enableButton);

function start(){
    from = parseInt(document.getElementById('from').value);
    till = parseInt(document.getElementById('till').value);

    if (from > till){
        alert("You're going against the Math's rules man!!!!!!!")
    } else {

        for (let i = from; i <=till; i++) {

            let box = document.createElement("div");
            box.classList.add('col-1')
            box.classList.add('m-1');
            box.classList.add('text-center');
           
            if (i % 3 == 0 && i % 5 == 0){
                
                console.log(`FIZZBUZZ`);
                
                box.classList.add('neon-cell');
                box.innerText = `FIZZBUZZ`;
        
            }else if(i % 3 == 0){
                
                console.log(`FIZZ`);
                
                box.classList.add('bg-primary');
                box.innerText = `FIZZ`;
        
            
            }else if (i % 5 == 0){
                
                console.log(`BUZZ`);
                box.classList.add('bg-secondary');
                box.innerText =`BUZZ`;
        
            }else{
                
                console.log(`${i}`);
                box.classList.add('bg-light');
                box.classList.add('text-dark');
                box.innerText =`${i}`;
        
            }
        
            numberBox.append(box);
        }     

    }
    
}


function clearBox(){
    document.getElementById('fizzbuzzcontainer').innerHTML = "";
    document.getElementById("from").value = "";
    document.getElementById("till").value = "";
    
}

function disableButton() {
    document.getElementById("findOutBtn").disabled = true;
    document.getElementById("resetBtn").disabled = false;
}

function enableButton() {
    document.getElementById("findOutBtn").disabled = false;
    document.getElementById("resetBtn").disabled = true;
    
}
resetBtn.disabled = true;


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