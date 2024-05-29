/* 동작목표 : 서브메뉴 나오게 하기 */
/* 
    1. 서브 숨기기
    2. 메인메뉴에 마우스 올리면
    3. 마우스 올린 메뉴의 관련 서브 메뉴가 보인다.
*/
//1.변수 작성
const sub = document.querySelectorAll('.sub') 
//2.객체 문법 고려해 작성
console.log(sub) 
// <tag style = "display:none;">
//문법) 객체.속성.속성 = 대입연산자(값)
//3. 인라인 스타일로 자동 적용됨
sub[0].style.display = 'none'; 
sub[1].style.display = 'none'; 
sub[2].style.display = 'none'; 
sub[3].style.display = 'none'; 
// header .gnb > li:nth-child(2) {}
//1.-1. 변수 작성2
const menu = document.querySelectorAll('.gnb > li')
console.log(menu)
/* menu1 ============================================== */
menu[0].addEventListener('mouseover', function(){
    sub[0].style.display = 'block';
})
menu[0].addEventListener('mouseout', function(){
    sub[0].style.display = 'none';
})
/* menu2 ============================================== */
//5. display none한 값을 다시 바꿔줘야한다.
menu[1].addEventListener('mouseover', function(){
    sub[1].style.display = 'block' 
})
//menu에서 마우스 나갔을때 서브 숨기기
menu[1].addEventListener('mouseout', function(){
    sub[1].style.display = 'none';
})
/* menu3 ============================================== */
menu[2].addEventListener('mouseover', function(){
    sub[2].style.display = 'block';
})
menu[2].addEventListener('mouseout', function(){
    sub[2].style.display = 'none';
})
/* menu4 ============================================== */
menu[3].addEventListener('mouseover', function(){
    sub[3].style.display = 'block';
})
menu[3].addEventListener('mouseout', function(){
    sub[3].style.display = 'none';
})