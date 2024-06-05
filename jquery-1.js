// 제이쿼리 시작
// 자바스크립트 DOM 제어를 쉽게 도와주는 라이브러리 언어
// 제이쿼리 사용을 위해서는 cdnJs 설치파일을 링크로 연결해야 사용할 수 있다. (연결할때 반드시 html에 연결하기)
/* 자바스크립트의 DOM 스타일 적용방법 */
const h1 = document.querySelector('h1')
h1.style.backgroundColor = 'yellow'
/* 제이쿼리로 DOM 스타일 적용방법 변수앞에 $를 붙임. (필수는 아니고 선택인데 js와 구분하기 위함임)*/
// 제이쿼리 방식으로 변수를 선택했을 땐 자바스크립트의 DOM 속성 및 메서드를 사용할수 없다.
const $h1 = $('h1');
//제이쿼리변수.css('속성', '값');
$h1.css('background-color','pink');
//제이쿼리변수와 자바스크립트 속성 및 메서드를 사용하고 싶다면 그 중간에 추가 속성을 붙여야한다.
$h1.get(0).style.color = 'red'
// 웹사이트에서 자주 이용하는 동적 기능을 제이쿼리는 일부 간단한 메서드 명령으로 제공해준다.
// DOM 숨기기, 보이기 display = none or block
const test = document.querySelector('.test')
/* (자바스크립트 버전>>>>>>) test.style.display = 'none' */
const $test = $('.test');
// $test.css('display', 'none');
// $test.get(0).style.display = 'none';
$test.hide() //제이쿼리 안에 hide라는 함수 안에 display:none;이 내장되어 있음.
$test.show() //제이쿼리 안에 show라는 함수 안에 display:block;이 내장되어 있음.
$test.css({
    color:'blue',
    fontSize: '20px',
    backgroundColor: 'aqua',
})
//제이쿼리는 일반함수 쓰는게 좋음 (화살표 함수는 인식 못할 때가 있음)
/* 예제) 버튼 클릭하면, p 배경색이 라임이 되기 */
const $btn = $('#btn');
$btn.on('click', function(){
    $('h1+p').css('background-color', 'lime')
})
/* 예제) 버튼 클릭하면, img가 바뀌기(이미지 경로 바꿔주기)*/
const $btn2 = $('#btn2');
$btn2.on('click', function(){
    //자바스크립트 작성법 : 자바스크립트객체.src = '경로'
    $('img').attr('src','./project/casper240604-main/images/advantage2.png')
})
/* 
제이쿼리로 보더 
반복문 for 없이도 변수 하나로 전체를 인식한다.
*/
const $p = $('p')
console.log($p.length)
$p.css('border', '1px solid black')
/* 자바스크립트로 보더 */
const p = document.querySelectorAll('p')
for(let i of p){i.style.border = '1px solid red'}

$p.eq(1).css('border','5px solid black') //제이쿼리로 nth-child(n)쓰기
$p.filter('.first').css('transform','scaleY(1.5)') //내가 선택한 거 위주로 잡기
$p.find('em').css({backgroundColor:'coral'}) //자식자손 잡기
$p.not('.first').css('transform','rotate(2deg)')