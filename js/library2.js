const tabButtons = document.querySelectorAll('.tab_button');
const tabBoxes = document.querySelectorAll('.tab_box');

for (let i = 0; i < tabButtons.length; i++) {
   tabButtons[i].addEventListener('click', function () {
      tabBoxes.forEach(box => box.classList.remove('active'));
      tabBoxes[i].classList.add('active');
   });
}

for(let i = 0; i < tabButtons.length; i++ ){
   tabButtons[i].addEventListener('click',function(){
      tabButtons.forEach(box => box.classList.remove('on'));
      tabButtons[i].classList.add('on');
   })
}


