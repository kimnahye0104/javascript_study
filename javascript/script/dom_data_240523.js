/* 
    1. DB 만들기(객체+배열)
    2. HTML DOM 자바스크립트 내 생성
    3. 화면(section) 출력
*/
const data = [
    {//첫번째 상품
        delivery: '샛별배송',
        name:'성주 참외 1.5kg',
        detail:'뽀얀 과육, 시원한 단맛',
        price: 15800,
        sale:12,
        review:9999,
    },{//두번째 상품
        delivery: '샛별배송',
        name:'대추방울토마토 750g',
        detail:'믿고 먹을 수 있는 상품',
        price: 8990,
        sale:22,
        review:9999,
    },{//세번째 상품
        delivery: '샛별배송',
        name:'국산 블루베리 100g',
        detail:'보랏빛 달콤함',
        price: 8800,
        sale:20,
        review:9999,
    }
]
console.log(data)
/* 
    HTML DOM
    - 상품 내용들을 특정 태그에 반복해서 쓰고 싶다면?
    (아래)태그 예시
    : main > p.delivery
    : main > h1
    : main > p.details
    : main > p.origin_price
    : main > div.price > span.sale + span.total_price
*/
// console.log('=======대입연사자 넣기(: 태그가 아니라 빈 문자열이기 때문)' / '`기호를 쓰는 이유는 자바스크립들이 이 안에 넣을 경우')

let item = "";
console.log(item) // 출력결과: 빈칸
const section = document.querySelector('section')
console.log(item,section)

item = `<h1>${data[0].name}</h1>`
item = `<p class="details"${data[0].detail}</p>`
// += 복합 대입연산자(기존값에 더한다.)
item = `<p class="delivery">${data[0].name}</p>`
item += `<h1>${data[0].delivery}</h1>`
item += `<p class="details">${data[0].detail}</p>`
item += `<p class="origin_price">${data[0].price}</p>`
item += `<div class="price">`
item += `<span class="sale">${data[0].sale}%</span>`
let total_price = 100 - data[0].sale
let price_result = total_price / 100;
let result = data[0].price*price_result
item += `<span class="total_price">${result}</span>`
item += `</div>`
item += `<p class="review">${data[0].review}</p>`
console.log(item)
section.innerHTML = item;