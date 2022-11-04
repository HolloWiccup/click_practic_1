document.body.style.background = 'rgb(5, 3, 5)'; // сделать фон красным
let pushButton = document.getElementById('run-func');

function makeTimer(delay = 1000){
    let timer;
    return function(flag){
        if(flag)
        timer = setTimeout(function start(){
            randomColor();
            timer = setTimeout(start, delay);
        }, delay);
        else
        clearTimeout(timer);
    }
}

function handlerButton(){
    let flag = true;
    let changeColor = false;
    let tomer;
    let timer1 = makeTimer();
    return function(){
        if(flag) {
            changeColor = !changeColor;
            timer1(changeColor);
            flag = !flag;
        }
        clearTimeout(tomer);
        tomer = setTimeout(()=>{
            flag = !flag;
        }, 500);
    }
}

const randomRGB = () =>{
    let result = [];
    for(let i = 0; i < 3; i++) 
        result.push(Math.floor(Math.random() * 256));
    return result;
}
    

const randomColor = () => {
    let str = `rgb(${randomRGB().join(', ')})`;
    document.body.style.background = str;
    console.log(str);
}

let clickButton = handlerButton();
pushButton.addEventListener("click", clickButton);
