var box1; //변수 생성은 됐지만 데이터는 정의 되지 않은 상태 = undefined
//undefined
console.log(box1);
var box1 = 1; //중복 선언해도 에러는 나지 않는다.
box_all() //변수가 없어도 undefined가 출력된다.
var box2 = "box1" + 1;
box_all() //선언된 변수가 box1과 box2 뿐이라서 box3은 undefined로 나온다
var box3 = "1"+(1+1); //왼쪽에서 먼저 계산되어서 우선순의를 적용해야 뒤의 1+1 값이 2로 나옴
console.log(box1);
console.log(box2);
console.log(box3);
//===================================
function box_all(){
    console.log("all=>",box1,box2,box3);
    //템플릿 문자열 (ES6)
    console.log(`all=>${box1}과 ${box2}와 ${box3}입니다.`)
    console.log(`all=>${box1, box2, box3}`)
}
box_all()
//=========================회원의 나이를 저장하고 있는 함수
var lee = 20
var kim = 21
var soo = 22
function user_age(){
    console.log(`당신의 나이는 ${kim}살 입니다.`)
}
//=========================상품 수량 증가 함수
var num = 0; //기본수량;;
function productNum (){
    num = num+1
    console.log (num)
}
console.log('============================================')
//var vs let
var a = 1; //초기 생성
var a = 2; //이미 생성한 변수를 중복 선언해도 에러없음
let b = 3;
b = 4; //이미 생성된 변수를 중복 선언하면 에러발생
//let 변하는 변수 vs const 변하지 않는 상수(undefined 허용x, 무조건 정의해야 한다.)
const c = 5;
// c = 6; 중간에 값을 변경해선 안된다. 중복도 금지.
//자바스크립트는 절차적 언어이다.
//자바스크립트는 객체지향언어이다.
//자바스크립트는 함수형언어이다.
const js = "자바스크립트";
let js_lang = "절차적";
console.log(`${js}는 ${js_lang}언어이다.`);
js_lang = "객체지향"
console.log(`${js}는 ${js_lang}언어이다.`);
js_lang = "함수형"
console.log(`${js}는 ${js_lang}언어이다.`);
//const는 변하지 않는 상수를 가지는 변수이다.
//let은 변하는 데이터 값을 가지는 변수이다.
//var는 변하는 데이터 값을 가지는 변수이다.
// 변수에는 키워드만 적는 게 좋다. let data = "변수이다."; x => let data = "변수";
const data1 = "변수";
let data2 = "const";
let data3 = "변하지 않는 상수";
console.log(`${data2}는 ${data3}를 가지는 ${data1}이다.`)
data2 = "let";
data3 = "변하는 데이터 값";
console.log(`${data2}는 ${data3}를 가지는 ${data1}이다.`)
data2 = "var";
console.log(`${data2}는 ${data3}를 가지는 ${data1}이다.`)
console.log('========================')
//회원 정보 저장 변수
//이름 홍길동, 나이 20, 혈액형 o, mbti enfj, 거주지 인천 부평, 성별 남성

let user_name = "홍길동";
let age = 20 //숫자 데이터는 필요한 데이터만 넣어 응용하기
const blood = "O형";
let mbti = "enfj";
let address = "인천시 부평구";
let gender = "남성";
console.log(`${user_name}의 나이는 ${age} 입니다.`)
console.log(`${user_name}의 내년 나이는 ${age+1} 입니다.`)
console.log(`${user_name}의 작년 나이는 ${age-1} 입니다.`)
console.log(`${user_name}의 혈액형은 ${blood} 입니다.`)
let global_variable = 1;
function local_func(){
    let local_variable = 2 + global_variable;
    console.log(local_variable)
}
console.log(global_variable)
local_func()
//null(비어있는, 삭제된) vs undefined(정의안됨)
let cart1 = 10;
console.log(cart1)
cart1 = null; //장바구니 비움
console.log(cart1)
let cart2; //undefined - 첫 실행, 한번도 장바구니를 안썼을때.
console.log(cart2) //undefined - 첫 실행, 한번도 장바구니를 안썼을때.
//문제(퀴즈)==========================================================
//하루 총 지출액 가계부 만들기
// 커피 1500원, 도시락 6000원, 대중교통 2천원
// 오늘 총 지출액은 000dnjs 입니다. -> 버튼 클릭시 출력
// let data_name = "변수";
// let coffee = 1500
// let bowl = 6000
// let transport = 2000
// function priceAll (){
//     console.log(data_name)
//     let price_all = coffee + bowl + transport
//     console.log(price_all)
// }
// data_name = "가계부 총 합계";
// priceAll()
let coffee = 1500
let lunch = 6000
let traffic = 2000
let phone = 2000000
function money (){
    let result= coffee+lunch+traffic;
    console.log(`오늘 총 지출액은 ${result} 입니다.`)
}
money()
function price_phone (){
    let plan = phone / 6
    console.log(`핸드폰 할부 비용은 ${plan} 입니다.`)
}
price_phone()
function plan_total (){
    let result= coffee+lunch+traffic;
    let plan = phone / 6;
    let total = result + plan
    // let result2 coffee+lunch+traffic + (phone/6);
    console.log(`할부포함 총 지출액은 ${total} 입니다.`)
}
plan_total()