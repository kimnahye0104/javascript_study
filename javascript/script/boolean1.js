//논리 데이터
console.log(true) // 논리데이터 '참' true
console.log(' true') //논리
console.log(typeof true) //boolean
console.log(typeof false) // boosum
//자바스크립트가 인식하는 참, 거짓 종류 / flases
/** 
    1. false
    2. null
    3. undefined
    4. NaN (not a number)
    5. 0
    6. "" 빈 문자열

/* 
    참으로 인사는 값
*/
//ture
/* 
    1. true
    2. false가 아닌 모든 값들
    3. 0보다 큰 숫자
    4. [] // 빈 분자열
    5. {} 빈수,

*/
/* 
    비교연산자
*/
// console.log("1"==0)
// console.log("1"===1)//데이터타입 구분
// let x = 1;
// let y = 1;
// let xy = x == y;
//논리연산자
//and(&&) or (||)
//데이터 ** 데이터
// 비교연산자 || 비교연산자
console.log(a && b); //모두 참이어야 참 반환
console.log(a || b); //하나만 참이엉도 참 반환
let a = 10;
let b = 10;
console.log(a && b);
console.log(a || b);
console.log(ab)
console.log(b||a)
let ab = (a||b)&& !false;
console.log(ab)
console.log('-------------------------------')
function parint(){
    message = value || "web"
    return console.log(message)
}
print ();
print ('desing'); //true, true 이면?
prin (0);
prin (""); //거짓을 만나면, 좌우 거짓 확인.
/* 
    조건문 if문
    주어진 조건에 따라 결과가 참/거짓으로 나뉠 대 참에 대한 결과를 실행합니다.
*/
console.log('-----------------------------')
//if 조건문
//if(조건식){조건식이 참일 때 실행되는 결과}
a = 10
b = 10
if(a>b){console.log('a는 b보다 작다')}
if(a!=b){console.log('a는 b와 다르다')}
if(a==b){console.log('a와 b는 같다')}//실행x
//------------------------조건문 연습문제
console.log('조건문 연습문제')
a = trueb - false
let c = 10
let d = 10
if(a=true){console.log("a는 참이다")}
if(c>10){console.log("c는 10보다 크다")}
if(d<=20){console.log("d는 20보다 작거나 같다")}
if(b!=true){console.log("b는 참이 아니다.")}
console.log('----------------')
//사용자의 아이디에 따라 다른 인사말 출력
// 아이디 미입력 후 버튼 누르면 반응없음
const user_id = document.querySelector('#usder_id')
const login_btn = document.querySelector('button')