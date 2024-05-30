// window.대화상자
/* let message1 = window.alert('관리자만 접속할 수 있습니다.');
let message2 = window.prompt('1+1?');
let message3 = window.confirm('인쇄하시겠습니까?'); //확인,취소를 누르면 :true false
console.log(message1, message2, message3); */

//window란? 웹브라우저 창.
//window.메서드() ? 웹브라우저 창에서 실행되는 기능.
//window객체명은 가장 기본이 되는 웹브라우저로 생략가능하다.

/* let message4 = alert('경고') */ //window 생략 버전
// 버튼에 a태그처럼 링크를 넣을 때는 자바스크립트를 해야 링크로 이동할 수 있다. >> window.location

//버튼 클릭시 구글 이동 함수 생성
function btn_func(){
    window.location.href = "https://google.com"
}
/* window.document.write('내가 원하는 글자')
window.open("https://google.com", "_blank", 'width=500, height=300') //구글이 새탭으로 열림/. */
function txt_func (){
    document.write ('hello js')
}
function google_open (){
    window.open("https://google.com", "_blank")
}
function google_500_open(){
    open('https://google.com', '_blank', 'width=500,height=500')
}
/*
    인라인 스크립트
    1. 함수, 변수 등 자바스크립트는 js 파일 내에서 작성
    2. 상호작용이 필요한 html 태그에 js 연결을 위해서 태그 내에 이벤트 (ex)onClick 등으로 함수 연결)

    인라인 스크립트를 피하는 방법
    * 상호작용 하는 태그를 자바스크립트 내에서 객체로 만든다.
    * 객체.속성
    * 객체.메서드
    
    dom
    getElementsByTagName
    : 지정된 태그 이름을 가진 모든 html 요소를 찾아 html노드로 변환합니다.
    태그를 선택해준다.
    태그라는 이름으로 부르는 모든 것은 이걸로 선택해줄 수 있다.
 */
// ================================== dom에 대하여..
const h1Tag = document.getElementsByTagName('h1')
console.log(h1Tag)
console.log(h1Tag[0]) // undefined
console.log(h1Tag[1]) // undefined : 왜? : 순서대로 읽는 자바스크립트 특징 때문이다.
//document 객체
// ()선택하는 태그명 작성
// 객체.매서드()
// 선택한 dom태그 내에 자식, 자손(공백포함해서)까지 포함해서 선택한다.
// const 태그이름Tag = document.getElementsByTagName('태그이름')
const ulTag = document.getElementsByTagName('ul')
console.log(ulTag) //다수의 ul태그 출력(배열 구조)
console.log(ulTag[0]) //원하는 ul 개별 출력(index)
const liTag = ulTag[0].getElementsByTagName('li')
console.log(liTag)
console.log(liTag[0], liTag[1], liTag[2])
const aTag =  liTag[1].getElementsByTagName('a')
console.log(aTag[0])
// console.log(aTag[0], aTag[1], aTag[2])
console.log('=============================')
// class 약자 * = Cls
const titleCls = document.getElementsByClassName('title') //.title이라 안쓰는 이유: 매서드 명령어에 class를 선언했기 때문.
console.log(titleCls)
console.log(titleCls[0])
console.log(titleCls[1])
const listCls = ulTag[1].getElementsByClassName('list') //ulTag[0]으로 했을때 안잡히는 이유 : 위에 ul 태그가 같이 묶여서 선언되어 있어. 현ul가 두번째 ul로 읽히기 때문.
console.log(listCls)
// 퀴즈!!!!
console.log('--------------------------------quiz')
//dom 선택 문제
// 1. gnbCls : gnb 1 잡기
const gnbCls = document.getElementsByClassName('gnb')[0]
console.log(gnbCls)
// 2.li_memu1 : gnb 의 첫번째 자식 li 잡기
const li_menu1 = gnbCls.getElementsByTagName('li')[0]
console.log(li_menu1)
// 3.li_memu2 : gnb의 두번째 자식 li 잡기
const li_menu2 = gnbCls.getElementsByTagName('li')[3] //[3]인 이유: 자바스크립트는 존재 순서 기준이라 두번째 li는 4번째(4-1=3)로 읽힌다.
console.log(li_menu2)
// 4. lnbAll : lnb 클래스 2개 모두 잡기
const lnbAll = document.getElementsByClassName('lnb')
console.log(lnbAll)
// 5. lnb_sub2 : 첫번째 lnb의 sub_memu2 a 잡기
const lnb_sub2 = lnbAll[0].getElementsByTagName('a')[1]
console.log(lnb_sub2)