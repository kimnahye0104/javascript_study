//올바른 id, pw = > admin, 1234
let userid = 'admin'
let userpw = 1234;
//저장된 admin과 id 가 일치하면 로그인에 성공하게 하는
/* if(userid == 'admin'){
    console.log('로그인성공')
}else{
    console.log('로그인실패')
} */
//(위) if문을 삼항 연산자로 적는법 (아래)
//삼항조건연산자 => 조건식 ? 참실행 : 거짓실행
//실행조건이 간단할 때는, 삼항조건을 많이 사용한다.
let result = userid =='admin' ? '로그인성공' : '로그인실패'
console.log(result)
console.log('---------------------')
//if,else ver1 user pw
//삼항조건 ver2 user pw (연습/ 아래)
/* 연습예제 내코드(아래)
if (userpw == '1234'){
    console.log('로그인 성공')
}else{
    console.log('로그인 실패')
}
let pwsucces = userpw =='1234' ? '로그인 성공' : '로그인실패'
console.log(pwsucces) */
//------------------------------
/* 예제풀이 쌤 코드 */
if(userpw != 1234){
    console.log('로그인 실패')
}else{
    console.log('로그인 성공')
}
//삼항 조건 ver2 userpw
result = userpw ==1234 ? '로그인성공' : '로그인 실패'
console.log(result)
//------------------------논리연산+
//&&(and) 모두 참일 때 참
//||(or) 하나라도 참이면 참
console.log('-----------------논리연산+')
//if(비교연산 논리연산 비교연산)
//if(비교연산 논리연산 (비교 논리 비교)) : 비교가 2개 이상이면 논리가 반드시 들어가야 함.
if(userid == 'admin' && userpw == 1234){
    console.log('로그인성공')
}else{
    console.log('로그인 실패')
}
console.log('------------')
/* let num = prompt('1~20 사이 중 좋아하는 수를 입력하세요') */
let num = 5
//num이 받은 숫자가 10보다 작으면 '10 이하입니다.'
//아니면 '11 이상입니다.' 출력
//나이제한 등에 활용할 수 있음.
if(num<=10 && num>=1){
    console.log('10 이하입니다.')
}else{
    console.log('11이상입니다.')
}
//거짓일때 추가 조건을 만들고 싶다면? else if : esle if 쓰는 횟수 제한없음....
/* 
    if(조건식1){
        조건식1이 참일대 실행경과
    }else if(조건식2){
        조건식1은 거짓이고 조건식2가 참일때 실행결과
    }else if(조건식3){
        조건식1, 조건식2 모두 거짓이고 조건식3 참일때 실행결과
    }else{
        조건식1,2,3이 모두 거짓일때 자동 실행
    }
*/
//위 아래 왼쪽 오른쪽 게임 캐릭터 이동 게임
const game_move = "가운데"
if(game_move == "왼쪽"){
    console.log('왼쪽 1칸 이동')
}else if(game_move == '오른쪽'){
    console.log('오른쪽 1칸 이동')
}else if(game_move == '위쪽'){
    console.log('위쪽 1칸 이동')
}else if(game_move == '아래쪽'){
    console.log('아래쪽 1칸 이동')
}else{
    console.log('잘못 입력하셨습니다.')
}
//위 아래 왼쪽 오른쪽 게임 캐릭터 이동 게임
const move = "가운데"
//논리연산을 이용한 간편한 처리 방법
//if(){}else{}
//if(){}
if(move =='왼쪽' || move== '오른쪽' || move =='위쪽' || move =='아래쪽'){
    console.log(`${move} 1칸 이동`)
}else{
    console.log('잘못입력하셨습니다.')
}
console.log('-------------------------예제')
//키오스크 소스 선택
// 설탕, 케챱, 머스터드
// 위 3개 중 하나의 소스를 선택하면 "00 추가"
//"소스 선택 안하셨습니다."
const source = ''
if(source=='설탕' || source=='케챱' || source=='머스터드'){
    console.log(`${source} 추가`)
}else{
    console.log('소스 선택 안하셨습니다.')
}
//if, else if, else 연습문제
//a~f 점수에 따라 평균 등급
//0 ~100 사이 입력하세요.
// 100~90 A
// 89~80 B
// 79~70 C
// 69~60 D
// 59 이하면 F
//0~100 사이가 아닌 잘못된 숫자 입력시 '오류발생'
// A~F 결과 기준 출력 예시 =. "당신의 점수는? 학점입니다."
let score = 80
let total = ""
/* if(score <=100 && score>=90){
    total = 'A'
}else if(score <=89 && score >=80){
    total = 'B'
}else if(score <=79 && score >=70){
    total = 'C'
}else if(score <= 69 && score>=60){
    total = 'D'
}else if(score <= 59 && score>=0){
    total = 'F'
}else{
    total = '오류발생'
} */
if(score > 0 && score < 101){
    //1~100 참으로 인식하는 위치
    if(score >= 90){//100~90
        total = "a"
    }else if(score >=80){
        total= "b"
    }
}else{
    alert(`잘못입력하셨습니다`)
}
console.log(`당신의 학점은 ${total}학점입니다.`)
//조건문 활용 객체, 배열
const birthday_flower = [
    {
        month:1,
        flower:'수선화',
        content:'자기애, 자존심, 외로움',
    },{
        month:2,
        flower:'제비꽃',
        content:'겸손, 양보',
    },{
        month:3,
        flower:'수선화',
        content:'자기애, 자존심, 외로움',
    },{
        month:4,
        flower:'스위트피',
        content:'추억, 즐거움'
    },{
        month:5,
        flower:'은방울꽃',
        content:'희망, 섬세함'
    },{
        month:6,
        flower:'백합',
        content:'순결'
    },{
        month:7,
        flower:'미나리아재비',
        content:'아름다움, 인격'
    },{
        month:8,
        flower:'글라디올러스',
        content:'비밀, 상상, 견고함'
    },{
        month:9,
        flower:'물망초',
        content:'진실한 사랑'
    },{
        month:10,
        flower:'금잔화',
        content:'실망, 비애'
    },{
        month:11,
        flower:'국화',
        content:'성실, 진실'
    },{
        month:12,
        flower:'포인세티아',
        content:'축하, 감사'
    }
]
console.log(birthday_flower)
console.log(birthday_flower[0]) //1월생 전체 출력
console.log(birthday_flower[0].flower) //1월생 탄생화 출력
//사용자가 입력한 생일을 체크해서 버튼 클릭 시
//사용자 생일 1월리이라면 1월에 대한 탄생화와 꽃말이 result 출력
//출력 예) ?월의 탄생화는?, 꽃말은 ?입니다.
//잘못 입력하셨습니다. 1~12월 중 입력해주세요.
const month = document.querySelector('#month')
const btn = document.querySelector('#btn')
const birth_result = document.querySelector('.result')
btn.addEventListener('click',() => {
    console.log(month.value)
    if(month.value > 0 && month.value < 13){
        console.log(month.value)
        let m = month.value -1
        birth_result.innerHTML = `${birthday_flower[m].month}월의 탄생화는 ${birthday_flower[m].flower}, 꽃말은 ${birthday_flower[m].content}입니다.`
    }else{
        birth_result.innerHTML = '잘못입력하셨습니다. 1~12월 중 입력해주세요.'
    }
})