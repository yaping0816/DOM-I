// // 10 seconds count-up timer

// let timer = setInterval(countTimer, 10);

// let totalMsTens = 0;

// function countTimer(){
//    
        
//         if(totalMsTens <= 1000){
//             let secondTens = Math.floor(totalMsTens / 1000);
//             let secondOnes = Math.floor((totalMsTens - secondTens * 1000) / 100);
            
//             let msHundreds = Math.floor((totalMsTens - secondTens * 1000 - secondOnes * 100) / 10);
//             let msTens = Math.floor(totalMsTens - secondTens * 1000 - secondOnes * 100 - msHundreds * 10);
     
//              document.querySelector('#msTens').innerHTML = msTens;
//              document.querySelector('#msHundreds').innerHTML = msHundreds;
//              document.querySelector('#secondOnes').innerHTML = secondOnes;
//              document.querySelector('#secondTens').innerHTML = secondTens;
     
//              totalMsTens ++;
             
     
//          }else clearInterval(timer);
//     

    
//     const digit = document.querySelectorAll('.digit');

//     if(totalMsTens === 1000) {
//         digit.forEach( item => item.classList.add('redDigit'));
//     }
    
// }

// another solution
// let msCount10 = 0;
// const msTens = document.querySelector('#msTens');
// const msHundreds = document.querySelector('#msHundreds');
// const secondOnes = document.querySelector('#secondOnes');
// const secondTens = document.querySelector('#secondTens');
// // init timmer

// msTens.innerHTML = 0;
// msHundreds.innerHTML = 0;
// secondOnes.innerHTML = 0;
// secondTens.innerHTML = 0;

// const myTimer = setInterval(()=>{
//     if (msCount10 === 1000){
//         clearInterval(myTimer);
//     }
//     updateTime();
//     msCount10++;
// },10)


// function updateTime(){

//     msTens.innerHTML = msCount10 % 10;
//     msHundreds.innerHTML = Math.floor((msCount10 / 10) % 10 );
//     secondOnes.innerHTML = Math.floor((msCount10 / 100) % 10);
//     secondTens.innerHTML = Math.floor((msCount10 / 1000) % 10);

// }

// 10 seconds count-up timer with start button and reset button
let timer;
function time(cmd) {
    if(cmd === 'start'){
        timer = setInterval(countTimer, 10);
    }

    if(cmd === 'reset'){
        clearInterval(timer);
        secondTens.textContent = 0;
        secondOnes.textContent = 0;
        msTens.textContent = 0;
        msHundreds.textContent = 0;
    }
}

let totalMsTens = 0;
let countStart =  false;

function countTimer(){
    console.log('hii');
    // if(countStart){
        
        if(totalMsTens <= 1000){
            let secondTens = Math.floor(totalMsTens / 1000);
            let secondOnes = Math.floor((totalMsTens - secondTens * 1000) / 100);
            
            let msHundreds = Math.floor((totalMsTens - secondTens * 1000 - secondOnes * 100) / 10);
            let msTens = Math.floor(totalMsTens - secondTens * 1000 - secondOnes * 100 - msHundreds * 10);
     
             document.querySelector('#msTens').innerHTML = msTens;
             document.querySelector('#msHundreds').innerHTML = msHundreds;
             document.querySelector('#secondOnes').innerHTML = secondOnes;
             document.querySelector('#secondTens').innerHTML = secondTens;
     
             totalMsTens ++;
             
     
         }else time('stop');
    // }

    
    const digit = document.querySelectorAll('.digit');

    if(totalMsTens === 1000) {
        digit.forEach( item => item.classList.add('redDigit'));
    }
    
}
// add button to the timer
const startButton = document.createElement('button');
const resetButton = document.createElement('button');
startButton.textContent = 'start';
resetButton.textContent = 'reset';
const body = document.querySelector('body');
body.appendChild(startButton);
body.appendChild(resetButton);

startButton.addEventListener('click', event =>{
    // countStart = true;
    time('start');
})
    
resetButton.addEventListener('click', event=>{
    time('reset');
})