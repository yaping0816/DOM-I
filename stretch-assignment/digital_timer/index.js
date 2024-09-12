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
let totalMsTens = 0;
const digit = document.querySelectorAll('.digit');

function time(cmd) {
    if(cmd === 'start'){
        if (!timer){ //when timer is null or undefined, setInteval, if the start button already clicked, the timer is not null anymore, do nothing
            timer = setInterval(countTimer, 10);
        }
        digit.forEach(item => item.classList.remove('redDigit')); //remove the red digit after re-start the timer reaching 10 seconds
    }
    if(cmd==='stop'){
        clearInterval(timer);

    }

    if(cmd === 'reset'){
        clearInterval(timer);
        secondTens.textContent = '-';
        secondOnes.textContent = '-';
        msTens.textContent = '-';
        msHundreds.textContent = '-';
        timer = undefined; //when clicking start again, line 74 run
        totalMsTens = 0; //reset the timer to '0'
        digit.forEach(item => item.classList.remove('redDigit'));
    }
}



function countTimer(){
    console.log('hii');
    
        
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
             
     
         }else {
             time('stop');
             
            }
    
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