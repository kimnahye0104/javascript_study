//반복문
/* 
    반복문키워드 (반복초기값; 반복조건식; 증감식;){반복실행결과}
    반복초기값 = 조건, 증감에 사용할 변수생성과 초기값 설정
    초기값 변수에 주로 사용하느 변수명 = i,j,k,m,n

    for (let i=1; i<6; i++){i가 5번 반복될 때마다 실행 결과}
    for : 거짓이 될 때까지 반복.
*/
for(let i=1; i<6; i++){
    console.log('반복'+i)
}
console.log('반복종료')
//0 ~10 반복문 '자바스크립트0'~'자바스크립트 10'
for(let i=1; i<=10; i++){
    console.log('자바스크립트'+i)
}
// 7~1 반복문
for(let i=7; i>0; i--){
    console.log('반복문'+i)
}

//배열과 반복문
const study = ['html', 'css', 'js', 'figma', 'photoshop', 'illustrator'];
console.log(study)
/* console.log(study[1])
console.log(study[3]) */
for(let i=0; i<study.length; i++){
    console.log(study[i]) //처음에 인덱스 값은 0부터니까 0에 1을 증감시켜 값을 출력
}
//배열연습문제 1.
//아메리카노, 카페라떼, 에스프레소, 돌체라떼 배열생성
// 1번 메뉴부터 4번 돌체라떼 콘솔 출력
const coffee = ['아메리카노', '카페라떼', '에스프레소', '돌체라떼'];
console.log(coffee)
for(let i=0; i<coffee.length; i++){
    console.log(`${i+1}번 메뉴는 ${coffee[i]}`)
}
//반복문과 배열연습문제 2.
// 사과 망고 오렌지 딸기 귤 복숭아 수박 배열 저장
// 수박부터 사과로 역순
//lenght 없는 버전
// for(let i=6; i>=0; i--){console.log(fruit[i])}
const fruit = ['사과', '망고', '오렌지', '딸기', '귤', '복숭아', '수박']
console.log(fruit)
for(let i=fruit.length-1; i>=0; i--){
    console.log(fruit[i])
}
//반복문과 배열연습문제 3.
//사과 1000, 망공 2000 수박 10000
const mart = [{
    name:'사과',
    price: 1000,
},{
    name:'망고',
    price: 2000,
},{
    name:'수박',
    price: 10000,
}]
console.log(mart)
// console.log(mart[0])
// console.log(mart[1])
// console.log(mart[2])
for(let i=0; i<mart.length; i++){
    console.log(`${mart[i].name} : ${mart[i].price}원`)
}
console.log('===========================')
//for반복문 + if조건문 활용
//for(){ if(){} }
//if(){ for(){ }} :특정조건에서 나온 결과를 반복
// 1~20 출력, 홀수만 나오게
for(let i=1; i<=20; i++){
    if(i%2 == 1){
        console.log(i)
    }
}
// console.log('============짝수 출력')
// for(let i=1; i<=20; i++){
//     if(i%2 == 1){
//         console.log(i+1)
//     }
// }
// console.log('============홀수 역순 출력')
// for(let i=20; i<=20; i--){
//     if(i%2 == 1){
//         console.log(i)
//     }
// }
console.log('====== 5~25 짝수')
for(let i=5; i<26; i++){
    if(i%2==0){console.log(i)}
}
console.log('====== 10~20 홀수')
//DOM과 반복문
const main = document.querySelector('main')
console.log(main)
//ul-li*4
let tag1 ='<ul>'
for(let i=0; i<4; i++){
    console.log(i)
    tag1 += `<li class="list">${i}</li>` //아예 태그 만들때 class 이름 선언
}
tag1 += '</ul>'
main.innerHTML = tag1
console.log(tag1)
main.classList.add('list') //main이 querySelector로 들어가 있음
console.log('=================table')
// table 안 1행(tr) 3열(td)태그 삽입
const table = document.querySelector('table')
console.log(table)
let tag2 = '<tr>'
for(let i=0; i<3; i++){
    tag2 +=`<td>${i+1}</td>`
}
tag1 += '</tr>'
table.innerHTML = tag2
//이미 존재하는 html 대상에 속성 반복 추가
const nav_a = document.querySelectorAll('nav a')
console.log(nav_a)
//특정조건 발동시 desing1 클래스 적용
for(let i=0; i<nav_a.length; i++){
    nav_a[i].classList.add('design1')// 에러발생! 왜? 인덱스[i] 미작성.
}
//반복문을 사용하지 않는다면?
//nav_a[0].classList.add('design1')
// for(let i=0; i<nav_a<=3; i++){
//     if(i%2 ==1){
        
//     }
// }
for(let i=0; i<nav_a.length; i++){
    if(i%2){
        nav_a[i].classList.add('design2')
    }else{
        nav_a[i].classList.add('design1')
    }
}