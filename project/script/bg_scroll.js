const btn = document.querySelectorAll ('nav button')
const bg = document.querySelectorAll('.bg')
console.log(btn, bg)
btn.forEach((target,index)=>{
    console.log(target, index)
    target.addEventListener('click',(/* e */)=> {
        /* e.preventDefault(); */
        window.scrollTo(0, bg[index].offsetTop)
    })
})
//nav 안 a,button 클릭시 bg[0] 위치로 스크롤 이동
btn[0].addEventListener('click',()=>{
    console.log(0)
    window.scrollTo(0, bg[0].offsetTop)
})
btn[1].addEventListener('click',(/* e */)=>{
    console.log(0)
    /* e.preventDefault() a태그 고유 이벤트 (href) 막기*/
    window.scrollTo(0, bg[1].offsetTop)
})
//a(,button)태그에 javascipt event 적용시 주의사항
//a태그는 고유의 href 특정 주소로 이동한다는 특징이 있어, js clic 이벤트 연결을 하려고 하면, click처리가 먼저해야 하는지hgref 솔성 처리를 먼저해야 하는지? 구분을 못해서 스크롤이 위로 올라가는 문제가 생긴다.
//a태그에 js click 이벤트를 줄때 href 속성 기능을 막야아 정상 작동합니다.
