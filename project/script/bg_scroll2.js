const btn = document.querySelectorAll('.btn')
const bg = document.querySelectorAll('.bg')
console.log(btn, bg)
btn.forEach((target, index)=> {
    console.log(target, index)
    target.addEventListener('click',()=>{
        window.scrollTo(0, bg[index].offsetTop);
    })
})
const scroll = document.querySelectorAll('.scroll')
console.log(scroll)
window.addEventListener('scroll', function(){
    if(bg[0].getBoundingClientRect().y <= 0){
        scroll[0].style.width = '20px'
    }
    if(bg[0].getBoundingClientRect().y <= 0){
        scroll[0].style.width = '100px'
        scroll[0].style.backgroundColor = 'white'
    }
    if(bg[1].getBoundingClientRect().y <= 0){
        scroll[1].style.width = '100px'
        scroll[1].style.backgroundColor = 'white'
    }
    if(bg[2].getBoundingClientRect().y <= 0){
        scroll[2].style.width = '100px'
        scroll[2].style.backgroundColor = 'white'
    }
    if(bg[3].getBoundingClientRect().y <= 0){
        scroll[3].style.width = '100px'
        scroll[3].style.backgroundColor = 'white'
    }
})

/* 
    쌤 풀이 코드
    const bg = document.querySelectorAll('bg')
    const a = document.querySelectorAll('.link a')

    1. (스크롤 전) 첫번째 a에 대한 활성화 표시
*/

/* 
    mouse 따라다니는 이벤트
*/
const circle = document.querySelector('.mouse')
console.log(circle)
window.addEventListener('mousemove',(e)=>{
    console.log(e.clientX, e.clientY)
    circle.style.left = `${e.clientX}px`
    circle.style.top = `${e.clientY}px`
})
//window mousemove 인식하는 매개변수 종류
/* 
    1. screenX, Y: 사용자 모니터 화면 기준으로 좌표 표시
    2. client X, Y : 웹브라우저의 뷰포트 크기 기준으로 좌표 표시
    3. offest X, Y : 객체(노드) 위치 기준으로 좌표 표시
    4. page X, Y : 전체 세로 길이 포함 문서 기준으로 좌표 표시
*/