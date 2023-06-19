// 로컬스토리지에서 title 가져오기
//로컬 스토리지에서 title 값 가져오기
let title = localStorage.getItem('title');

//가져온 title값을 .title에 삽입
let titleElement = document.querySelector('.header');

titleElement.textContent = title;



//form 만들기
const section1_1 = document.querySelector('.section1_1');
const section1_2 = document.querySelector('.section1_2');
const section_2 = document.querySelector('.section_2');
const section_3 = document.querySelector('.section_3');

section1_1.addEventListener('click',function(){
   section_2.classList.remove('active')
   section_3.classList.remove('active')
   section_2.classList.add('active')
   section1_1.classList.remove('under')
   section1_2.classList.remove('under')
   section1_1.classList.add('under')
})
section1_2.addEventListener('click',function(){
   section_2.classList.remove('active')
   section_3.classList.remove('active')
   section_3.classList.add('active')
   section1_1.classList.remove('under')
   section1_2.classList.remove('under')
   section1_2.classList.add('under')
})


//시계
let time = 0;
let running = 0;
let timerid = 0;

function startPause() {
   if (running == 0) {
      //시작버튼
      running = 1;
      increment();
      document.getElementById('stopTime').innerHTML = "";
      document.getElementById("start").innerHTML = "Pause";
      document.getElementById("startPause").style.backgroundColor = "none";
      document.getElementById("startPause").style.borderColor = "#2A5137";
   }
   else {
      //일시정시버튼
      running = 0;
      clearTimeout(timerid);
      let date = new Date();
      // let nowDate = date.getDate();
      // let nowMonth = date.getMonth() + 1;
      let hour = date.getHours();
      if (hour < 10) {
         hour = '0' + hour;
      }
      let min = date.getMinutes();
      if (min < 10) {
         min = '0' + min;
      }
      let sec = date.getSeconds();
      if (sec < 10) {
         sec = '0' + sec;
      }
      // document.getElementById('stopTime').innerHTML = "일시정지  " + nowMonth + "/" + nowDate + " " + hour + ":" + min + ":" + sec;
      document.getElementById("start").innerHTML = "continue";
      document.getElementById("startPause").style.backgroundColor = "none";
      document.getElementById("startPause").style.borderColor = "#2A5137";
   }
}


//리셋
function reset() {
   running = 0;
   time = 0;
   clearTimeout(timerid);
   document.getElementById('stopTime').innerHTML = "";
   document.getElementById("start").innerHTML = "start";
   document.querySelector(".output").innerHTML = "<b>00:00:00</b>";
   // document.getElementById("startPause").style.backgroundColor = "black";
   // document.getElementById("startPause").style.borderColor = "green";
}
//타이머 시간측정 
function increment() {
   if (running == 1) {
      timerid = setTimeout(function () {
         time++;
         let hours = Math.floor(time / 3600);
         //정수값만 받아와서 시간 단위로 변환
         let mins = Math.floor(time % 3600 / 60);
         //정수 값만 받아와서 분 단위로 변환
         let secs = time % 3600 % 60;
         //정수 값만 받아와서 
         if (hours < 10) {
            hours = "0" + hours;
         }
         if (mins < 10) {
            mins = "0" + mins;
         }
         if (secs < 10) {
            secs = "0" + secs;
         }
         document.querySelector(".output").innerHTML = "<b>" + hours + ":" + mins + ":" + secs + "</b>";
         increment();
      }, 1000)
   }
}


let clockTarget = document.getElementById("clock");
// //상단 현재 시간
// function clock() {
//    let date = new Date();
//    // date Object를 받아오고 
//    let month = date.getMonth() + 1;
//    // 달을 받아옵니다 
//    let clockDate = date.getDate();
//    // 몇일인지 받아옵니다 
//    let day = date.getDay();
//    // 요일을 받아옵니다. 
//    let week = ['일', '월', '화', '수', '목', '금', '토'];
//    // 요일은 숫자형태로 리턴되기때문에 미리 배열을 만듭니다. 
//    let hours = date.getHours();
//    // 시간을 받아오고 
//    let minutes = date.getMinutes();
//    // 분도 받아옵니다.
//    let seconds = date.getSeconds();
//    // 초까지 받아온후 
//    clockTarget.innerText = `${month}월 ${clockDate}일 ${week[day]}요일 ` +
//       `${hours < 10 ? `0${hours}` : hours}:${minutes < 10 ? `0${minutes}` : minutes}:${seconds < 10 ? `0${seconds}` : seconds}`;
//    // 월은 0부터 1월이기때문에 +1일을 해주고 
//    // 시간 분 초는 한자리수이면 시계가 어색해보일까봐 10보다 작으면 앞에0을 붙혀주는 작업을 3항연산으로 
// }

function init() {
   clock();
   // 최초에 함수를 한번 실행시켜주고 
   setInterval(clock, 1000);
   // setInterval이라는 함수로 매초마다 실행을 해줍니다.
   // setInterval은 첫번째 파라메터는 함수이고 두번째는 시간인데 밀리초단위로 받습니다. 1000 = 1초 
}

init();



