//배열
let yoil = []//빈 배열
console.log(yoil);
yoil = ['월', '화', '수', '목', '금', '토', '일'];
console.log(yoil);
console.log(`오늘은 ${yoil[0]}요일입니다.`)// 오늘은 월요일입니다.
// 배열 작성법 2.
let yoil_v2 = new Array(2); //빈 배열
console.log(yoil_v2);
console.log(yoil_v2[1]);//undefined
yoil_v2[1] = '월'
console.log(yoil_v2);
yoil_v2[0] = '일';
console.log(yoil_v2[0]+'요일')
console.log(yoil_v2);
console.log(`--------------------------`)
// 배열 기초 문제
// 1. 원하는 색상을 6개 배열로 각각 저장하고 그 중 좋아하는 색상 2개를 골라서 콘솔에 출력하세요.
// 콘솔 결과 예 ) 좋아하는 색상은 0,0 입니다.
const colorArray = ['빨강', '초록', '보라', '핑크','파랑','분홍']
console.log(`좋아하는 색상은 ${colorArray[5]}, ${colorArray[3]}입니다.`)
// 좋아하는 과일을 5개 배열로 저장하고 모두 역순으로 출력
let fruitList = new Array('딸기', '바나나', '망고', '파인애플', '사과')
console.log(fruitList)
//역순 출력
let result = `${fruitList[4]},${fruitList[3]},${fruitList[2]},${fruitList[1]}, ${fruitList[0]}`
console.log(result)
//날씨카드(맑음,흐림,비,눈)을 배열로 생성하고 이번주 기상예보를 출력하세요.
//결과 예)
//월요일 : 맑음, 화:눈, 수:비, 목: 흐림
let day = new Array ('월요일', '화요일', '수요일', '목요일', '금요일', '토요일', '일요일')
const weather = new Array ('맑음', '흐림', '비', '눈')
console.log(`${yoil[0]}요일: ${weather[0]}`)
console.log(`${yoil[1]}요일: ${weather[3]}`)
console.log(`${yoil[2]}요일: ${weather[2]}`)
console.log(`${yoil[3]}요일: ${weather[1]}`)
console.log(`${yoil[4]}요일: ${weather[0]}`)
console.log(`${yoil[5]}요일: ${weather[0]}`)
console.log(`${yoil[6]}요일: ${weather[3]}`)
// 예시 ) 좌석 선택시, 사용자 클릭 순과 관계없이 앞번호좌석 순대로 순차적으로 선택되어 있음.
console.log(`-------------------------------`)
let cgv = new Array(8)
console.log(cgv)
console.log(cgv.length)
cgv[0] = 'a1'
console.log(cgv)
cgv[1] = 'c3'
console.log(cgv)
cgv.push('f5') //마지막 자식에 넣어라'는 속성. but, 빈 자리 8까지 인식 후 9로 나옴. 최대값 미설정했기 때문.
console.log(`-------------------------------`)
//배열 속성 활용 (최대값 설정?)
let megabox = []
console.log(megabox)
console.log(megabox.length)
megabox.push(`a2`)
console.log(megabox)
megabox.push('b1')
console.log(megabox)
megabox.unshift('a1')
console.log(megabox)
megabox.pop()//괄호 안 비워두면, 맨 끝 값이 삭제 됨.
console.log(megabox)
megabox.shift()
console.log(megabox)//괄호 안 비워두면, 맨 첫 값이 삭제 됨.
megabox.push('f5', 'f6')
console.log(megabox)
let lottecinema = []
console.log(`${lottecinema} = 데이터 타입은 ${typeof lottecinema}`)
console.log('-------------------')
let price = 10000
lottecinema.push('f4', 'f5')
lottecinema.unshift('a1')
console.log(lottecinema) //a1, f4, f5
// console.log(`예매하신 좌석은 ${lottecinema}이며, 1인당 ${price}원 기준으로 총 결제 금액은 ${price*3}`)
//결과 변수 만들어 깔금하게 쓰는 법 (쌤 예시)
//결제하기 클릭 후 메시지 출력
let total = `예매하신 좌석은 총 ${lottecinema.length} 좌석이며, 성인 1명당 ${price}원 기준으로, 총 결제 금액은 ${lottecinema.length * price}원 입니다.`
console.log(total)
// 뒤로 가기 인원 수정
lottecinema.pop()
// 결제하기 클릭 후 메시지 재출력
total_func()
// 뒤로 가기 인원 수정
lottecinema.push('d5','d6')
// 결제하기 클릭 후 메시지 재출력
total_func()
function total_func(){
    total = `예매하신 좌석은 ${lottecinema.length} 좌석이며, 성인 1명당 ${price}원 기준으로, 총 결제 금액은 ${lottecinema.length * price}원 입니다.`
    console.log(total)
}
total_func()