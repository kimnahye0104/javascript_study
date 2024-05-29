// 1. like(a) 클릭시 like_off.png >>>>>>>>>> like_on.png 변경
const like = document.querySelector('.like')
console.log(like)
console.log(like.children)
console.log(like.children[0])
console.log(like.children[0].src)
like.addEventListener('click',like_func)
const like_func = () => {
    like.children[0].src = './images/likes_on.png'
}
like.addEventListener('click', like_func)