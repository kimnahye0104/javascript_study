const btn = document.querySelectorAll('.btn')
const bg = document.querySelectorAll('.bg')
console.log(btn, bg)

/* 
    for 문으로 고쳐 태그 줄이기

    btn[0].addEventListener('click',()=>{
    window.scrollTo(0,0);
    window.scrollBy(0,200);
    })
btn[1]클릭시 bg[1] 스크롤이동
btn[1].addEventListener('click',()=>{
    //특정 객체 위치로 이동 시 먼저 체크해야 하는 값!
    //객체 위치 속성 offsetTop
    console.log(bg[1].offsetTop) //콘솔에 뜨는 위치: 528
    window.scrollTo(0, bg[1].offsetTop);
})
btn[2].addEventListener('click',()=>{
    //특정 객체 위치로 이동 시 먼저 체크해야 하는 값!
    //객체 위치 속성 offsetTop
    console.log(bg[2].offsetTop) //콘솔에 뜨는 위치: 1048
    window.scrollTo(0, bg[2].offsetTop);
})
*/
btn.forEach((t, i)=> {
    console.log(t, i)
    t.addEventListener('click',()=>{
        window.scrollTo(0, bg[i].offsetTop);
    })
})