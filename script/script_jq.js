/* 
    240605 (수요일) 제이쿼리 시작
    제이퀘리 버전으로 위 자바스크립트 코드 바꾸기

    jquery ver.
*/
const $sub = $('.sub')
const $sub_bg = $('.sub_bg')
const $nav = $('nav')
const $nav_clone = $nav.clone()//true 생략 가능
const $m_nav = $('.m_nav')
console.log($sub, $sub_bg, $nav, $nav_clone, $m_nav)
$sub_bg.hide()
$sub.hide()

$m_nav.append($nav_clone)