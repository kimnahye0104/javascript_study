//변수
const sub = document.querySelectorAll('.sub')
const sub_bg = document.querySelector('.sub_bg')
const nav = document.querySelector('nav')
const nav_clone = nav.cloneNode(true)//nav복제 변수
const m_nav = document.querySelector('.m_nav') //복제 붙여넣기 부모
console.log(sub, sub_bg, nav, nav_clone, m_nav)

//모든 서브, 서브배경 숨기기
/* 
    (아래) 주석 걸고, 다시 보이게 한 뒤, 이벤트 적용하기 1 시작
*/
// sub_bg.style.display = 'none'
// for(let i of sub){i.style.display = 'none'}

//m_nav 모바일 전용 메뉴의 기존 내비게이션 태그 마지막 자식 복붙
m_nav.appendChild(nav_clone)
/* 
    240605 (수요일) 제이쿼리 시작
    제이퀘리 버전으로 위 자바스크립트 코드 바꾸기

    jquery ver. 코드 옮기기 =========================== ***
    파일 새로 생성 후 html 연결
    파일명: script_jq.js
*/

// 이벤트 적용하기 1 : 메뉴에 마우스 올리면 서브 메뉴 나타나기 (높이 길어지는 효과)
// 필요한 기능 : height + transition + overflow
// 1. 숨기는 처리를 display가 아닌 height 값으로 재설정 = 0
sub_bg.style.height = '0'
sub_bg.style.transition = 'height 0.3s';
for(let i of sub){
    i.style.height = '0'; 
    i.style.overflow = 'hidden'
    i.style.transition = 'height 0.3s'
}
// 2. 메뉴 마우스 올리면 서브, 서브배경 보이기
nav.addEventListener('mouseover', ()=>{
    sub_bg.style.height  = '220px';
    for(let i of sub){
        i.style.height = '220px';
    }
})
nav.addEventListener('mouseout', ()=>{
    sub_bg.style.height  = '0';
    for(let i of sub){
        i.style.height = '0';
    }
})
