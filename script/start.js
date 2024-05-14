// 자바스크립트 외부 파일 (파일명.js)
// 240514 ~ 자바스크립트 시작
// 객체 속성 메소드 이벤트
// 목표1. 개발자 도구 콘솔창에 HELLO JS 출력
// 목표1. ( 객체          )에 (메소드) 출력
//입력 데이터가 숫자라면, 그냥 숫자 입력
//입력 데이터가 문자라면, 큰 또는 작은 따옴표에 묶어서 "글" (일반적으로는 큰 따옴표 "" 권장 - 전통성, 호환성 모두 "")
console.log("hello js");
//변수
//var bowl; //데이터를 가지고 있지 않은 빈 변수 undefined (정의되지 않음)
var bowl = "rice"; //데이터를 가지고 있는 변수
console.log(bowl) //변수 확인용 (에러 점검용)
bowl ='bean';
console.log(bowl)
var a;
var b;
var c;
abc_result_v3()
a = 10;
abc_result_v3()
a = 20;
b = a; 
abc_result_v3()
c = a+b
abc_result_v4()
console.log("=============================")
// a,b,c  변수값 확인하는 재사용 console용 함수 생성 =====================================
//생성
function abc_result(){
    console.log("------------------")
    console.log("a=>", a)
    console.log("b=>", b)
    console.log("c=>", c)
}
//호출 해야 값이 보임. (보이게 하고 싶은 위치에 함수명() 쓰기)
function abc_result_V2(){
    console.log("a:",a, "b:",b, "c:",c)
    console.log("-------------------------")
}
function abc_result_v3(){
    console.log("=======")
    console.log("a의 값은 ", a,"이고 b의 값은 ", b, "이며 c의 값은 ", c, "입니다.")
    console.log("a의 값은 "+a+"이고 b의 값은 "+b+"이며 c의 값은 "+c+"입니다.")
    console.log("1+1=", 1+1);
    console.log("1+1="+(1+1));
}
function abc_result_v4(){
    console.log("====떡볶이 먹고 싶다====")
    console.log("떡볶이는", a, "모듬튀김은", b, "2개 하시면 총", c, "원이에요")
}