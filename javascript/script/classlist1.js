const li = document.querySelectorAll('.list li')
console.log(li)
//js style 속성을 이용한 css 적용법 (장점 편함/ 단점 많이지면 불편함)
li[0].style.backgroundColor = 'aqua';
li[0].style.borderTop = '2px solid red';
//css class 호출해서 적용한는 방법 (class만 적용가능)
//className 은 속성으로 대입연산자를 이용한다.
li[1].className = 'set1'
li[1].className += ' set2' //class 두개 넣으려면 무조건 공백이 필요!!!!
//classList 매서드 방법(대입 연산자가 아니기 때문에) ㅊclassName보다 주의해야 할 사항이 적다.
li[2].classList.add('set1')
li[2].classList.remove('set2')
//추가연습 4-6
li[3].className = 'design'
li[5].addEventListener('click',() =>{
    li[5].classList.toggle('set2')
})
// ===========================
const ip_security = document.querySelector('#ip_security')
const ip_on = ip_security.querySelector('span')
//ip 보안시 버튼을 클릭시 자식 span에 on클래스를 toggle적용
ip_security.addEventListener('click', () => {
    ip_on.classList.toggle('on')
    ip_security.classList.toggle('on')
})
/* ---------------------------질문 누르면 아래로 답변이 나타남 */
const q = document.querySelectorAll('.q')
console.log(q)
//질문1 클릭시 답변 1 보이기/숨기기 toggle 반복
//질문2 클릭시 답변 2 보이기/숨기기 toggle 반복
