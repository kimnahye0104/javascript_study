//===============================================
//===============================================
/* const bookBest1 = [
    {
        //book title
        name: '나를 소모하지 않는 현명한 태도에 관하여',
        writer: '마티아스 뇔케',
        bookstore: '퍼스트펭귄',
        date: '2024년 3월',
    },{
        //price
        price: 16020,
        sale: '10% 할인',
    },{
        //keywords
        keywords1: '얼리리더',
        keywords2: '이달의 굿즈',
        keywords3: '나를바라보다',
        keywords4: '인간관계에대하여',
    }
]
console.log(bookBest1); */
const data = [
    {
        name: '나를 소모하지 않는 현명한 태도에 관하여',
        author: ['마티아스 뉠케', '이미옥'],
        pusblishing: '퍼스트펭귄',
        date: '2024년 3월',
        price: 17800,
        sale: 10,
        tag:  ['#얼리리더','#이달의굿즈','#나를바라보다','#인간관계에대하여']
    },{
        name: '하루 한 장 나의 어휘력을 위한 필사 노트',
        author: '유선경',
        pusblishing: '위즈덤하우스',
        date: '2024년 3월',
        price: 21420,
        sale: 10,
        tag:  ['#얼리리더','#필사','쓰는맛']
    },{
        name: '불변의 법칙',
        author: ['모건 하우절', '이수경'],
        pusblishing: '서삼독',
        date: '2024년 2월',
        price: 22500,
        sale: 10,
        tag:  ['#얼리리더','#부자되는법','부자만들기','돈좀벌어보자','돈모으고싶을때']
    }
]
console.log(data)
let item = '';
const section = document.querySelector('section')
console.log(item,section)

item = `<h1>${data[0].name}</h1>`
item += `<a class="author">${data[0].author}</a>`
item += `<a class="pusblising">${data[0].pusblishing}</a>`
item += `<p class="date">${data[0].date}</p>`
item += `<p class="price">${data[0].price}</p>`
item += `<em class="sale">${data[0].sale}%</em>`
//sale % 값, 변수
let price_result
item += `<div class="tag">${data[0].tag}`
item += `<a class="tag1">${data[0].tag1}</a>`
item += `</div>`
console.log(item)
section.innerHTML = item;