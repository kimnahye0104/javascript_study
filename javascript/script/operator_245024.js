let num1 = 4
let num2  = 2
let result = num1 +num2
console.log(result) // 6
result =  num1 - num2
console.log(result) //2
result = num1*num2
console.log(result) //8
result=num1/num2
console.log(result)//2
result = num1%num2
console.log(result)//0

/* 
    나머지 연산자 ****(활용도 높음)
    0 또는 1의 결과가 필요한 경우 사용한다.
    -- 사용법
    1. 홀짝 구분
    2. 
*/
/* 
    증감 연산자
    전위,후위 방향에 따라
    값 계산이 다름.
    (b=a++) a를 처리후, ++ 나중해 더해 증감한다. 
*/
console.log('------------증감연산자')
let x = 5;
let y = x++;
console.log(`x=${x}`)
console.log(`y=${y}`)

let a = 10;
let b = a++; //여기서 b는 10
console.log(a, b)
let c = 4;
let d = --c;
console.log(c, d) // 3, 3
a = 10
b = 20
c = 30
d = 40
console.log(a,b,c,d)
a++ //11
b-- //19
c++ //42 (틀림 왜 40이 나오지...)
d-- //38 (틀림)
console.log(a,b,c,d)
a = ++b //31 (틀림: 왜 21이냐고고고고고고고 => 증감후b넣기> 1+20 = 21)
/* 
    a = ++b
    b=현재 19
    ++ : 1추가
    b=현재 20
*/
b = a++ //43
/* 

    a=현재 21
*/
console.log(a,b)
//========================(문제3번)
console.log('==================문제3')
c= a+b //41 ...???????\
/*
    바로 밑에 증감연산자가 있어서
    c는 42가 됨
 */
d= ++c // 31
console.log(c,d) //원래 값 버리고 c 값을 받아서
a = ++c +10
b = --d +1
console.log(a,b,c,d)
/* 
    복합대입연산자
    1이상의 값을 산술 연산자와 함께 대입하고 싶을 때

    **복합대입은 += 문자열연결용으로 많이 활용한다. 
*/
let number= 10;
console.log(number) //10
number += 5;
console.log(number)//15
number -= 5; //number = number -5
console.log(number) //10
number *= 5;
console.log(number)//50
number /= 5; //number = nubmer/5
console.log(number)
number %= 2; // number = number%2
console.log(number)
//=========================================
//=========================================
console.log('================삼항연산자')
/* 
    삼항연산자
*/
x = 5;
y = x==5;
//x와 y의 값을 비교해서 비교에 따른 결과 ox 출력하기
let total = y ==15 ? 'O' : 'X';// y가 15와 같은가?
console.log(total)

let age = prompt('몇살인가요?')
total = age > 17 ? '성인' : '미성년자';
console.log(total)

//게임스코어
//1위 이웹 1000점
//2위 김웹 900점
const game_score = [{
    id : '이웹',
    score : 1000,
},{
    id : '김웹',
    score : 900,
}]
let max_score = game_score[0].score > game_score[1].score ? game_score[0] : game_score[1];
console.log(`${max_score.id}의 최고 점수는 ${max_score.score}점이다.`)
/*  
    배열로 작성한 거 확용하기..
*/
//이웹이 김웹의 점수보다 큰가?
//크다면 이웹이 1등이고
//아니면 김웹이 1등이다.