//지난주 복습 매개변수 화살표 함수
function func1(num1, num2){
    console.log(num1+num2)
}
func1(1,2)
// 화살표 함수는 function 키워드가 생략되므로 function 뒤에 작성하는 함수 이름도 쓸수 없기 때문에 익명함수라고 부른다. 대신 함수는 함수 이름으로 호출하지 않으면 사용할수 없기 때문에 function 뒤에 작성하던 함수명을 const 또는 let을 활용하여 변수로 대신 사용한다.
// 화살표함수
const func2 = (num1, num2) => {
    console.log(num1+num2)
}
func2(3,4)
//------------------------------------------ html div.result 줄바꿈으로 출력하기.
//--------함수명 dan99
// 매개변수 반드시 1개 이상 생성
//함수 1개,
// 변수 2개 (dom 선택용, 구구단 복합 대입 저장하는 변수.)
// 변수, 복합대입연산자, 태그 내용 삽입 속성.
function result (){
    
}