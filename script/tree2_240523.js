console.log('======== 2024 05 23')
//h1 마우스를 올리면
/* 
    "네이버" >>>> "NAVER" 내용 변경
*/
const h1 = document.querySelector('h1')
console.log(h1)
console.log(h1.innerText) // 안에 글자 값 = 네이버
// h1.innerText = 'NAVER'; 
h1.addEventListener('mouseover', function(){
    h1.innerText = 'NAVER'
})
h1.addEventListener('mouseout', function(){
    h1.innerText = '네이버'
})
/* 
    header에 마우스를 올리면
    자식 nav-a 내용 "메뉴" -> "MENU"
*/
/* const header = document.querySelector('header');
console.log(header)
const headerChild = header.childNodes;
console.log(headerChild[3])
console.log(headerChild[5])
console.log(headerChild[7])
console.log(headerChild[9])
console.log(header.innerText)

header.addEventListener('mouseover', function(){
    headerChild[3].innerText = 'MENU'
    headerChild[5].innerText = 'MENU'
    headerChild[7].innerText = 'MENU'
    headerChild[9].innerText = 'MENU'
}) */
const header = document.querySelector('header')
console.log(header.children)
console.log(header.children[1])
console.log(header.children[1].children) //a*4

/* 
    자식 개수 세는 속성
    console.log(header.childrElementCount)
*/
console.log(header.childElementCount)
console.log (header.length) //header가 하나라 정의 할 수 없음. length는 배열변수임
console.log(header.children[1].childElementCount)
console.log(header.children.length)
header.addEventListener('mouseover', function(){
    header.children[1].children[0].innerText = 'MENU'
    header.children[1].children[1].innerText = 'MENU'
    header.children[1].children[2].innerText = 'MENU'
    header.children[1].children[3].innerText = 'MENU'
})
header.addEventListener('mouseout', function(){
    header.children[1].children[0].innerText = '메뉴'
    header.children[1].children[1].innerText = '메뉴'
    header.children[1].children[2].innerText = '메뉴'
    header.children[1].children[3].innerText = '메뉴'
})
//==============================================================
//============================================추가
console.log('============= first, last child')
//==============================================================
// childNode[n], children[n] == 부모 자식: nth-child(n)
// fistChild, firstElementChild == first-child, last-child
const nav = document.querySelector('nav')
console.log(nav)
console.log(nav.firstChild)
console.log(nav.firstElementChild)
console.log(nav.firstElementChild.innerText)
console.log(nav.lastElementChild)
console.log(nav.lastElementChild.innerText)
//==============================================================
//============================================추가
console.log('============= 형제관계')
//==============================================================
// 형제관계 (+)
// js 이전, 다음 형제 모두 처리 가능
// nextSibling  : 공백 포함 다음 형제 속성
// nextElementsSibling : 다음 형제 요소만 인식 속성
// previousSibling : 공백포함 이전 형제 속성
// previousElementsSibling : 이전 형제 요소만 인식 속성
/* 
    (위) 는 속성이므로, 연달아서 속성.속성 쓸 수 있다.
    console.log(변수.속성.속성)
*/
const nav_a = document.querySelectorAll('nav a')
console.log(nav_a)
/* 
    Q. 메뉴2의 이전 형제 메뉴1을 선택해서 배경색 노랑 변경
*/
nav_a[1].previousElementSibling.style.backgroundColor = 'yellow';
/* 
    Q. 메뉴2의 다음형제 메뉴4를 선택해서 배경색 aqua 변경
*/
nav_a[1].nextElementSibling.nextElementSibling.style.backgroundColor = 'aqua';