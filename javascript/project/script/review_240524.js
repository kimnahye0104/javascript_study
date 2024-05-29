// Q. re 영역에 100자 이상을 쓰고, 리뷰 등록버튼을 클릭하면 "등록완료" 팝업 출력
//#re 영역에 100자 이하르 ㄹ쓰고 리뷰 등록 버튼을 클릭하면,"100자 이상 써주세요" 팝업 출력
const re = document.querySelector ('#re')
const reviewBtn = document.querySelector('#reviewBtn')
console.log(re)
console.log(reviewBtn)
let result = '';
// const reviewMaxscore = [
//     {}
// ]
reviewBtn.addEventListener ('click', function(){
    console.log(re.value.length)
    result = re.value.length > 100 ? '등록완료' : '100자 이상 입력하세요'; alert(result);
})