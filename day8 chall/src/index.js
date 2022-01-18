const inputBox = document.querySelector("#limit_number");
const chooseNum = document.querySelector("#limit_number input");

const guessNumBox = document.querySelector('#guess_num');
const guessInput = guessNumBox.querySelector('input');
const playBtn = guessNumBox.querySelector('button');

const info = document.getElementById("info");
const msg = document.getElementById('msg');


function handleSelectNum(number) {
    const usersNum = parseInt(chooseNum.value);
    
    // console.log(usersNum,typeof(usersNum));
        console.log(selecNum,typeof(selecNum));
    guessNumber();
}

function guessNumber(e){
    e.preventDefault();
    // const limitNum = parseInt(handleSelectNum.value);

    const usersNum = parseInt(chooseNum.value);
        console.log(usersNum,typeof(usersNum));

    const randomNumber = Math.ceil(Math.random() * usersNum);
        console.log(randomNumber);
    
    const selcNum = parseInt(guessInput.value);
        console.log(selcNum);
    info.innerText = `you chose: ${selcNum}, the machine chose: ${randomNumber}`;

    if(selcNum > randomNumber){
        msg.innerText = "U win!"
    }else if(selcNum < randomNumber){
        msg.innerText = 'U lost! ㅠ'
    }else{
        msg.innerText = 'plz one More!'
    }

}
inputBox.addEventListener('submit',handleSelectNum);
guessNumBox.addEventListener('submit',guessNumber);