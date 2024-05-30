/* 
    ** 함수스코프 란?
    '스코프(scope)' = 위치
    *) 지역변수  
    *) 전역변수 gobal
    *--) 함수 외부에서 선언된 변수.
*/
let b = 20;
let c = 20;
function text(){
    //함수의 블록스코프(지역변수) 위치
    let a =10;
    console.log(a+b)//10+20 = 30
}
text()
//console.log(a) //error
//console.log(a+b) // ok. : 50
console.log(b+c)
//===========================================다음 문제
console.log('============== 응용 문제 1)')
//===================================================
let x = 1;
function func1(){
    y = 5; // let 없앴더니, 37번 줄 func2() 결과가 16이 나옴.
    /* 
        let을 지워야 하는 이유:
        let은 또 한번 선언하면 안되며,
        아래 func2 라는 함수에서 활용하려면,
        전역변수로 만들어야 해서
        let을 지운다.
    */
    console.log(x+y)// 응용문제1-1) 목표값 6 이 나오게 하라.
}
func1() // 6 나옴
/* 
    func1()
    에서 6 이 나온 이유:
    함수 전역(바깥)에 있기 때문에.
*/
function func2(){
    func1()
    let z = 10;
    console.log(x+y+z) // 응용문제 1-2)  목표값 16이 나오게 하라
}
func2()
//전역 스코프 위치
func2() //NaN == Not a Number(1+underfined+10)
func1()
//func2() 안에 func1()을 넣어두면, func2()를 호출할 때 동시에 같이 func1()이 호출된다.
console.log('함수 내의 함수 넣고 같이 호출하기')
func2()
//=====================================================
console.log('수업 3교시) 매개변수 이해하기')
console.log('문법 : function(){}')
//=====================================================
console.log('=========예제1 ) 자판기 만들기(매개변수 없음)')
//(아래 ) 예제 1 )  코드
/* 화살표 함수로 바꾸늘 주석 */
/* 
    function japangi1(){//콜라 버튼 클릭 함수
        console.log('콜라 1개 출력')
    } 
*/
const japangi1 = ()=>{
    console.log('콜라')
}
/* function japangi2(){//사이다 버튼 클릭 함수
    console.log('사이다 1개 출력')
} */
const japangi2 = ()=>{
    console.log('사이다')
}
japangi1()
japangi1()
japangi2()
console.log('=========예제2 ) 자판기 만들기(매개변수 있음)')
/* 
    매개변수 작성 순서
    1. function japangi3(drink) -> drink 매개변수 생성
    2. japangi3('콜라') -> 함수 호출 시 매개변수에 대입값 작성('콜라')가 drink 매개변수에 대입됨.
    3. console.log(drink) -> 매개변수에 대입된 값이 함수내에 실행코드에 전달됨.
*/
//(아래 ) 예제 2 )  코드
function japangi3(drink){
    console.log(drink)
}
//drink (매개변수)에 대입할 값을 작성
// 문법 : 함수 호출('내용 대입')
japangi3('콜라')
japangi3('사이다')
japangi3('탄산수')
/* 
    매개변수 2개 이상 필요한 경우
    함수 내에 수정 데이터 == 매개변수(파라미터)
*/
function japangi4(drink, num){
    console.log(`${drink} ${num}개`)
}
// drink
// japangi4()
console.log('============== 응용 문제 1)')
//===================================================
// function kiosk (type, num=1){
//     console.log(`이 키오스크는 ${type} ${num}잔 주문완료.`)
// }
const kiosk = (type, num1) => {
    console.log(`이 키오스크는 ${type} ${num1}잔 주문완료.`)
}
kiosk('아메리카노', 1)
kiosk('라떼', 2)
