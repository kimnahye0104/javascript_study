//num1, num2 사용자가 숫자 값을 입력하고
//결과 버튼을 클릭했을때
//#result 결과 위치에 "정답은 **에요!" 출력
/* 
    1. 돔 변수 만들기 (초기값)
*/
const num1 = document.querySelector('#num1')
const num2 = document.querySelector('#num2')
const btn = document.querySelector('button')
const result = document.querySelector('#result')
/* 
    2.
    console.log(num1.value) 초기 값이라 아무것도 나오지 않음
*/
console.log(num1.value)
btn.addEventListener('click', function(){
    console.log(num1.value)
    console.log(num2.value)
    let total = Number(num1.value) + Number(num2.value)
    console.log(total)
    console.log(typeof total)
    result.value = `정답은 ${total.toLocaleString('ko-kr')}입니다.`
})