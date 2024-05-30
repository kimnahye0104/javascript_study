const header = document.getElementsByTagName('header');
console.log(header[0])
//tag, class 등과 같이 다수가 존재할 수 있는 대상을 dom으로 선택하면 특정 대상 1개만 잡히는 게 아닌 collection기준으로 여러개가 잡히기 때문에 원하는 대상 사용 시 정확히 그 대상을 인덱스로 선택해야 한다.
const logoCls = document.getElementsByClassName('logo');
console.log(logoCls)
console.log(logoCls[1])
//클래스, 태그 대상을 정확히 어떤 대상만 변수로 저장
// 변수 등록할 때부터 인덱스 고정
/* 
    변수 생성 시 인덱스를 작성하지 않으면, 호출할때 인덱스를 작성하여 자유롭게 원하는 대상을 가져올 수 있다. 
    console.log(aTag1[0])
    console.log(aTag1[5])
    console.log(aTag1[10]) 
*/
const aTag1 = document.getElementsByTagName('a');
/* 
    변수 선언시 인덱스를 작성하고 선언했다면,
    변수 사용 시 인덱스를 붙이지 않고 변수명만 간편하게 쓸 수 있다. 대신, 인덱스가 고정되므로 다른 인덱스 번호에 해당하는 태그나 클래스를 사용하고 싶을 때 변수를 새로 만들어야 한다.
    console.log(aTag2);
    console.log(aTag2[1]);
    erroer : aTag[0][1]
*/
const aTag2 = document.getElementsByTagName('a')[0];
/* 
    id는 단 하나로 중복할 수 없으므로 index가 들어가지 않는다. 
*/
const gnb = document.getElementById('gnb');
console.log(gnb)
// getElements..는 css로 치면 : css (float, flex, grid)
console.log('---------------------')
const headerTag = document.querySelector('header');
console.log(headerTag[0]) //결과: undefined : querySelector은 tag, class 선택시 메서드 괄호안 문자열 대상 기준으로 가장 먼저 인식된 대상을 출력해준다.
const aQ = document.querySelector('a');
console.log(aQ) //결과: 첫번째 a가 잡힘.
const logoQ = document.querySelector('.logo')
console.log(logoQ)
const gnbQ = document.querySelector('#gnb');
console.log(gnbQ)
console.log('------------------------------')
/* querySelectorAll : 여러개 잡기 */
const aQAll = document.querySelectorAll('a');
console.log(aQAll); //결과: getElements처럼 여러개 잡힘. 대신 nodelist(4) 배열처럼 출력됨.
console.log(aQAll[2]);
const logoAll = document.querySelectorAll('.logo');
console.log(logoAll);
console.log(logoAll[1]); 
//결과 : h2.logo : class="logo"를 가진 h1,h2 중 두번째 자식이라 [1]
console.log('---------------------------------');
//order, #text, #num, #btn
const order =  document.querySelector('#order')
const input_text = document.querySelector('#text')
const input_num = document.querySelector('#num')
const btn = document.querySelector('#btn')
console.log(order, input_text, input_num, btn)
function btn_func1(){
    //위 변수에 대한 데이터타입 출력하기 (한줄씩 호출)
    // console.log(typeof order) 
    /* order는 메서드에서 최종 대입되면서 객체가 되었다. */
    // console.log(typeof input_text)
    // console.log(typeof input_num)
    // console.log(typeof btn)
    console.log(input_text.value) /* 사용자가 입력하는 value값 */
    console.log(typeof input_text.value);
    console.log(input_num.value) // 입력칸에 숫자 출려
    console.log(typeof input_num);
    console.log(typeof Number(input_num.value))
    /*
        <input type="text" 속성>
        1. name
        2. value : 사용자가 주문수량이라던가 그런거 썼을때..
        3. placeholder : X
        4. id : x (DOM / 선택만 하고 변경하지 않는 속성.)
        5. class : x (DOM)
        6. maxlength : X
        7.readonly : X
     */
}
//객체.메서드(실행값)
//객체.속성 = 속성에 대입한 값;

function btn_func2(){
    // #num 입력칸에 숫자 2를 입력했을때
    // : 사용자가 입력하는 걸 인식한다. => value 속성 이용 => string인걸 number로 변경
    // 주문 버튼을 클릭하면
    // +1 이벤트로 숫자 3이 #num 입력칸에 입력되는 코드 작성
    let total = Number(input_num.value)
    // 선언한다 변수이름"total" = 에 숫자로형변환할(변수이름)
    console.log(total+1)
    console.log(`total의 데이터 타입은 ${typeof total}`)
    /* input_num.value = Number(input_num.value)+1 */
    input_num.value = total+1
}
function btn_func3 (){
    /* 사용자가 요청사항을 입력 후 주문버튼 클르기하면,
    윈도우 경고창으로 다음과 같이 출력하기 */
    let total = input_text.value;
    alert(`사용자 요청사항은 ${total} 입니다.`)
    console.log(total)
}
function btn_func4(){
    //사용자 요청사항과 주문수량을 확인하고
    //주문버튼을 클릭하면 다음과 같이 경고창 출력하기
    //"요청사항은 ****, 주문수량은 *개, 총 결제금액은 **** 원입니다."
    //제품 1기준 1000원 기준
    let request = input_text.value; //요청사항 저장
    let order_num = input_num.value; //수량 저장
    let price = 1000; //가격
    alert(`요청사항은 ${request}이고, 주문수량은 ${order_num}개, 총 결제금액은 ${order_num*price}원입니다.`)
    /* 
        총 결제금액에 대한 변수를 만들어서 출력하는 방법
        let total = order_num * price;
        alert(`요청사항은 ${request}이고, 주문수량은 ${order_num}개, 총 결제금액은 ${total}원입니다.`) 
    */
}