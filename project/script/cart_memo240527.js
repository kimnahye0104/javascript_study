/* 
    1) item_wrap 안 자식 item의 개수를 top의 total_num 출력
    2) item_wrap 안 자식 item의 개수 >> console.log(item의 개수) 출력
*/
const item_wrap = document.querySelector('.item_wrap')
console.log(item_wrap.childElementCount) // 2) 자식 개수 세는 법 1
console.log(item_wrap.children.length) // 2) 자식 개수 세는 법 2
//============================================================================
/* 
    3) item의 개수를 top total_num 출력
    total_num 출력하고 싶다면?
    3-1) total_num 변수 생성
*/
const total_num = document.querySelector('.total_num')
console.log(total_num)
/* 
    dom 값을 읽거나 변경하는 속성 = innerHTML, innerText
*/
total_num.innerText = item_wrap.children.length

/* // console.log(total_num)
// console.log(total_num.children)
// const total_num_child = document.querySelectorAll('span')[1]
// console.log(total_num_child) */
///================================================================
///================================================================
///================================================================
/* 
    24.5.27 (오후 수업)=============================================

const total_num = document.querySelector('.total_num')
//DOM 값을 읽거나 변경하는 속성 = innerHTML, innerText
total_num.innerText = item_wrap.children.length

//장바구니 수량 설정하기
//1. 기본 수량 1 
//DOM 기본 태그 및 내용 추가 innerText, innerHTML 속성
//input, textarea 입력 수정,읽기 value 속성
const countInput = document.querySelector('#count')
const original_price = document.querySelector('.original_price')
let count = 1 //수량변수
let price = 1000; //가격변수
console.log(countInput)
countInput.value = count
//1,000원 
original_price.innerHTML = `${price.toLocaleString('ko-kr')}원`


//2. plus버튼 클릭 시 count가 1씩 증가
/* const plusBtn = document.querySelector('#plus')
plusBtn.addEventListener('click',()=>{
    console.log('+++++')
    //최대 구매 수량 10, 삼항조건연산자 조건?참결과:거짓결과
    //10개 이상 수량 변경 시 '최대 구매수량입니다' 메세지출력
    //count++; //조건 없이 무조건 1씩 증가
    count < 10 ? count++ : alert('최대구매수량입니다')
    countInput.value = count
}) */
//3. minus 버튼 클릭 시 1씩 감소 (최소 구매 수량 1)
/* const minusBtn = document.querySelector('#minus')
console.log(minusBtn)
minusBtn.addEventListener('click',()=>{
    console.log('-------')
    count > 1 ? count-- : alert('최소구매수량입니다')
    countInput.value = count
}) */

const plusBtn = document.querySelector('#plus')
const minusBtn = document.querySelector('#minus')

const minusFunc = () => {
    count > 1 ? count-- : alert('최소구매수량입니다')
    countInput.value = count
}
const plusFunc = () => {
    count < 10 ? count++ : alert('최대구매수량입니다')
    countInput.value = count
    //증가되는 count 변수를 활용 price 변수를 이용해서
    //original_price 변수에 수량에 따른 가격 출력
    
}
plusBtn.addEventListener('click', plusFunc)
minusBtn.addEventListener('click', minusFunc)
