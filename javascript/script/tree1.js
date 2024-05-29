// 자바스크립트에서는
/* 
    요소 노드, 텍스트 노드, 등 따로 인식한다.
    1. 부모 인식하는 parentNode, parentElement
*/
const nav_a_all = document.querySelectorAll('nav a')
//Node List 배열로 a 2개 인식
const nav_a = document.querySelector('nav a')
console.log(nav_a_all)
console.log(nav_a)
console.log(nav_a_all[0].parentNode) //console.log(nav_a_all.parentNode) >> undefined : list를 정확히 작성해줘야함. >> [0] 적기
console.log(nav_a.parentNode)
//태그 상 먼저 시작대상기준 a
//=======================================
//객체.속성
//객체.속성.속성
console.log(nav_a.parentNode.parentNode) //결과 : a의 부모의 부모 <header>
//객체.속성1.속성2.속성3 = '배경노랑색'
// 속성1 = parentNode 속성2 = style 속성3 = backgroundcolor
nav_a.parentNode.style.backgroundColor = 'yellow';
nav_a_all[0].parentNode.parentNode.style.backgroundColor = 'pink';
// nav_a.parentElement.style.border = '5px solid blue';
nav_a.parentNode.parentNode.style.width = '1250px';
nav_a.parentNode.parentNode.style.height = '700px';
nav_a.parentNode.parentNode.style.backgroundImage = 'url(https://i.pinimg.com/564x/ae/c6/c6/aec6c653e54d6bd4a1b8c28656ab0413.jpg)';
nav_a.parentNode.parentNode.style.backgroundSize = 'cover';
nav_a_all[1].addEventListener('mouseover', function(){
    nav_a_all[1].parentNode.style.borderBottom = '5px solid red'
})
nav_a_all[1].addEventListener('mouseout', function(){
    nav_a_all[1].parentNode.style.border = '0'
})
// ==================================================
// ==================================================
// ==================================================
// 자식 자손 잡기 
const header = document.querySelector('header')
const headerChild = header.childNodes; //(html enter 공백까지 모두 자동으로 잡음)
const headerChild2 = header.children;//(html 요소(태그) h1, nav 만 잡음)
console.log(header)
console.log(headerChild)
console.log(headerChild[1])
console.log(headerChild[3])
headerChild[1].style.backgroundColor = 'yellow';
//===================================================
console.log('자식 children; ================================')
console.log(headerChild2[0]) 
console.log(headerChild2[1]) 
console.log(headerChild2[0].children[0]) //결과 : header>h1>a:nth-chile(1) 태그
// (위) 추가 속성 및 메소드를 연결해서 다양한 기능 수행
// headerChild2[0].children[0].style (o)
// headerChild2[0].children[0].addEventListener (o)
console.log(headerChild2[0].innerHTML) 
console.log(headerChild2[0].innerText) //결과 : logo -type:text
// .value >> input 전용 속성.이라 .inner .text 를 쓴다.
// (위) 단순 읽기, 변경 단순 수행
// headerChild2[0].children[0].innerHTML.style (o)
// headerChild2[0].children[0].innerHTML.addEventListener (o)
console.log('끝')
