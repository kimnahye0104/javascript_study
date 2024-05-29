//1. 서브 숨기기
//2. gnb에 마우스 올리면, <ul class="gnb><li></li></ul>
//3. 서브 3개가 모두 출력
//4. 동적 절차 체크 후 html 태그 확인 후
//5. html dom 필요 변수 생성
//=============================================================
//=============================================================
//=============================================================
// 0. 변수작성
const sub = document.querySelectorAll('.sub');
const gnb = document.querySelectorAll('.gnb > li');
console.log(sub,gnb);
//1. 서브 숨기기 style-display:none; 변수 접근시, 리스트로 접근하면 무조건 [index]필요
sub[0].style.display = 'none';
sub[1].style.display = 'none';
sub[2].style.display = 'none';
//=============================================================
//2. gnb에 마우스 올리면, <ul class="gnb><li></li></ul>
gnb[0].addEventListener('mouseover', function(){
    // 5.sub3개 출력
    sub[0].style.display = 'block';
    sub[1].style.display = 'block';
    sub[2].style.display = 'block';
})
//=============================================================
//3. 서브 3개가 모두 출력
gnb[0].addEventListener('mouseout',function(){
    // 5.sub3개 숨기기
    sub[0].style.display = 'none';
    sub[1].style.display = 'none';
    sub[2].style.display = 'none';
})
//=============================================================
//=============================================================
// 6.모든메뉴에 다
gnb[0].addEventListener('mouseover', subShow)
gnb[0].addEventListener('mouseout', subHide)
gnb[1].addEventListener('mouseover', subShow)
gnb[1].addEventListener('mouseout', subHide)
gnb[2].addEventListener('mouseover', subShow)
gnb[2].addEventListener('mouseout', subHide)

function subShow(){
    sub[0].style.display = 'block';
    sub[1].style.display = 'block';
    sub[2].style.display = 'block';
}
function subHide(){
    sub[0].style.display = 'none';
    sub[1].style.display = 'none';
    sub[2].style.display = 'none';
}
// gnb[1].addEventListener('mouseover', function(){
//     // 5.sub3개 출력
//     sub[0].style.display = 'block';
//     sub[1].style.display = 'block';
//     sub[2].style.display = 'block';
// })
// gnb[1].addEventListener('mouseout',function(){
//     // 5.sub3개 숨기기
//     sub[0].style.display = 'none';
//     sub[1].style.display = 'none';
//     sub[2].style.display = 'none';
// })
// gnb[2].addEventListener('mouseover', function(){
//     // 5.sub3개 출력
//     sub[0].style.display = 'block';
//     sub[1].style.display = 'block';
//     sub[2].style.display = 'block';
// })
// gnb[2].addEventListener('mouseout',function(){
//     // 5.sub3개 숨기기
//     sub[0].style.display = 'none';
//     sub[1].style.display = 'none';
//     sub[2].style.display = 'none';
// })