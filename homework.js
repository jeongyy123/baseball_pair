const prompt = require("prompt-sync")({ sigint: true });

let arr = ""
let randomNum = function () {
    return Math.floor((Math.random() * 10))
};


for (let i = 0; i < 3; i++) {
    let b = randomNum();
    if (!arr.includes(b)) {
        arr += b
    } else {
        i--;
        continue;
    };
};


let input_user = ""
let count =0;
// input, 유효성 검사
function get_input_number() {
    count++;
    input_user = prompt("숫자 3개를 입력해주세요")

    if (input_user.match(/\D/)) {
        console.log("3자리의 수만 입력해 주세요")
        return get_input_number()
    } else if (input_user.length !== 3) {
        console.log("세자리 숫자만 넣어주세요")
        return get_input_number()
    } else if (input_user[0] === input_user[1] || input_user[0] === input_user[2] || input_user[1] === input_user[2]){
        console.log("중복되지 않는 3자리 숫자를 넣어주세요")
        return get_input_number()
    } else {
        playball()
        return input_user
    }
}

// 랜덤으로 생성된 번호 = arr
// input값으로 받은 번호 = get_input_number()
// strike, ball 판단



let strike = 0; 
let ball = 0;


function strike_count(){
for (let i=0; i<arr.length; i++) {
    if (input_user[i] === arr[i]) {
        strike++;
    } else if (arr.includes(input_user[i])) {
        ball++;
    } else {
        continue;
    }
}
}

function playball() {
    strike_count()
    if (strike === 3) {
        console.log(`${count}번만에 맞히셨습니다`)
        return console.log("게임을 종료합니다")
    } else {
        console.log(`strike: ${strike}, ball: ${ball}`)
        strike = 0
        ball = 0
        get_input_number()
    }
}

playball()