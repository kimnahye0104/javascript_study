//중첩 반복문
//for(){ for(){ }}
//for 조건식이 거짓이 될 때까지 계속 반복한다.
/* 
    1단 for(초기값; 조건식; 증감식){
        1단 for의 반복 결과 위치-1
        2단 for(초기값; 조건식; 증감식){
            2단 for의 반복 결과
        }
        1단 for의 반복 결과 위치-2
    }
*/
for(let i=1; i<4; i++){
    console.log('1단 for :'+i)
    for(let j=1; j<3; j++){
        console.log('----- 2단 for :'+j)
    }
}
//section DOM 내에 다중 FOR문으로 태그 구성하기
const section = document.querySelector('section')
console.log(section)
//ul*2>li*4
let tag = ""
for(let i=0; i<=1; i++){
    tag += '<ul>'
    for(let j=0; j<=3; j++){
        tag += `<li>test${j+1}</li>`
    }
    tag += '</ul>'
}
section.innerHTML = tag
console.log('==========================240530 오후수업 ~')
const t = document.querySelector('#t')
console.log(t)
//다중 for문을 이용 2행(tr) 3열(td) 생성
//주의사항 현재 js가 두개 연결되어 있어서 중복 선언하지 않도록 조심.
let tag5 = ""
for(let i=0; i<2; i++){
    tag5 += '<tr>'
    for(let j=0; j<3; j++){
        tag5 += `<td>${i}-${j}</td>`
    }
    tag5 += '</tr>'
}
t.innerHTML = tag5
//반복문의 종류
//1. for : 횟수가 지정된 반복문
//2. while : 숫자와 상관없이 조건의 결과가 거짓이 나올때까지 무한 반복하는 반복문.
/* for(초기값; 조건식; 증감식;){
    조건이 참일 때 반복 실행문
} */
for (let i=1; i<=10; i++){
    console.log(i)
}
console.log('================코드진행방식 : while')
/* while (조건식){조건이 참일때 반복 실행문} */
/* let i =1;
while(i<=10){
    console.log(i)
    i++;
} */
console.log('while의 종료 위치')
console.log('-----------------------------')
//횟수가 정해지지 않은 반목문 while
// (아래) 이거 왜 안되지 
/* 잠시 가려두기
let htmlQ = prompt('a는 인라인이다. 정답을 ox중 하나로 입력하세요.')
while (htmlQ != 'x'){
    htmlQ = prompt('a는 인라인이다 ox 중 하나로 입력하세요.')
}
alert('정답입니다 a는 인라인, 블록은 모두 해당합니다.') 
*/
// let cssQ = propmt()