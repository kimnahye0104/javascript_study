//ES6 for
const txt = ['html', 'css','javascript']
console.log(txt)
//es5 for
for(let i=0; i<txt.length; i++){
    console.log(txt[i])
}
console.log('======')
//es6 for (dom)
//for~in 인덱스 활용, for~of dom 객체활용
for(let i in txt){console.log(i)} //인덱스만 추출 0,1,2
for(let i of txt){console.log(i)} //내용만 추출 html, css, javascript
console.log('=======')
const abc = 'abcdefg'
console.log(abc)
for(let i in abc){console.log(i)}
//활용법: 비밀번호에 특수문자가 포함되었는 지 등을 확인할 수 있다.
for(let i of abc){console.log(i)}
console.log('============홍길동과 이길동')
//객체,배열, es6 반복문 for
const user = [{
    name: '홍길동',
    age: 20,
    id: 'hong',
    pw: '1234',
},{
    name: '이길동',
    age: 25,
    id: 'lee',
    pw: '5678',
}];
for(let i in user){console.log(i)}// 0, 1
for(let i of user){console.log(i)}// 0의 객체 정보 홍길동, 1의 객체 정보 이길동
console.log('//객체 정보 안에 있는 이름 나이 아이디 비번 값이 새로 나오기')
//객체 정보 안에 있는 이름 나이 아이디 비번 값이 새로 나오기
for(let i of user){
    console.log(i.name)
    console.log(i.age)
    console.log(i.id)
    console.log(i.pw)
}
//dom 이벤트 활용 for
const qna_Q = document.querySelectorAll('.qna h1')
const qna_A = document.querySelectorAll('.qna p')
console.log(qna_Q, qna_A)
//1. qna_A 모두 숨기기
// for x ver
/* qna_A[0].style.display = 'none'
qna_A[1].style.display = 'none'
qna_A[2].style.display = 'none' */
for(let i of qna_A){
    console.log(i)
    i.style.display = 'none'
}
/* 질문 1 클릭시 답변 1이 DISPLAY BLOCK */
// qna_Q[0].addEventListener('click',()=> {
//     qna_A[0].style.display = 'block'
// })
for(let i of qna_Q){
    i.addEventListener('click', () =>{
        //모든 내용을 닫기
        for(let j of qna_A){j.style.display = 'none'}
        //모든 제목 클래스 제거
        for(let m of qna_Q){m.classList.remove('active')}
        //클릭한 제목에만 클랙스 적용
        //클릭한 제목의 다음 형제 내용만 열기
        i.classList.add('active')
        i.nextElementSibling.style.display = 'block'
    })
}