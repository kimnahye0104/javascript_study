let a = 1;
let b = "1";
let c;
d = null;
//데이터 타입을 확인하는 연사자 (메서드)
console.log(a)
//개념이 안잡혀 숫자인지 문자인지 모를때, 체크할 수 있다.
console.log(typeof(a), typeof(b), typeof(c))
console.log(typeof(d))
// typeof는 연사자라, 문법을 다르게 작성할 수 있다...????
console.log(typeof a, typeof b)
//2개 이상의 데이터를 묶은 최종 데이터 타입
console.log(typeof a+b) // > 결과 : number 1
console.log(typeof(a+b)) // > 결과 : string (숫자+숫자=문자)
console.log(typeof(a+10)) // > 결과 : number (숫자 + 숫자 = 숫자)
// ----------------
// 어떠한 데이터 타입과 어떠한 데이터 타입을 합했을 때 = 어떤 데이터가 나오는지 알아야한다. **중요
// --------------------------------------------------
//암시적형변환, 명시적형변환에 대하여..
//데이터 형변환
let type1 = 10;
console.log(`type1의 값은 ${type1} , 데이터타입은 ${typeof type1}`)
// typeof가 number로 자동 결정됨_을 변환 해봄
let type1_replace = String(type1)
console.log(`type_replace 값은 ${type1_replace}, 데이터타입은 ${typeof type1_replace}`)
// 질문: 타입을 왜 바꾸는가?
// 답 : 다른 데이터와 연결하기 위해서.
let type2 = "20"
console.log(`type2 : ${type2+24}`)
console.log(`type2 : ${Number(type2)+24}`) //일회성 데이터는 즉시 입력도 가능
let type2_replace = Number(type2)
console.log(`type2 : ${type2_replace+24}`)
console.log('=============================================')
console.log('팝업을 띄우기(객체)')
// Number() 메서드
// window 객체
// prompt() 메서드
// window.prompt() 객체.매서드()
// let user_age = 객체(메서드("당신의 나이는?"))

// let user_age = Number(window.prompt("당신의 나이는?"))
// console.log(`당신의 나이는 ${user_age}살 입니다.`)
// console.log(`당신의 2025년 나이는 ${user_age+1}살 입니다.`)
// console.log(typeof user_age)
console.log("====================================")
// let dan99 = Number(window.prompt("구구단 몇단이 궁금해요?"))
// console.log(`${dan99}*1=${dan99*1}`)
// console.log(`${dan99}*2=${dan99*2}`)
// console.log(`${dan99}*3=${dan99*3}`)
// console.log(`${dan99}*4=${dan99*4}`)
// console.log(typeof dan99)
// ----------------------------------------------
// Array 배열 변수에 대하여
// 문법
// const yoil1= '월', const yoil2= '화',const yoil3= '수'
// const yoil = new Array('월', '화', '수')
console.log('======배열변수')
// ----------------------
const yoil1 = "월";
const yoil2 = "화";
console.log(yoil1,yoil2);
const yoil = new Array("월","화","수","목","금","토","일");
console.log(yoil);
console.log(yoil[4]); //금
console.log(yoil.length)