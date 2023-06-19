const items = document.querySelector('.items'); // ul
const input = document.querySelector('.memo_box');
const addBtn = document.querySelector('.memo_btn');
let id = 0;
let products = []; // 입력할 내용들을 담을 배열

// localStarage에 입력한 내용 저장
const save = function () {
   localStorage.setItem('products', JSON.stringify(products.reverse()));
};

// 클릭하면 (input에 입력 후 엔터를 누르면) 발생할 함수 정의
function onAdd() {
   const product = {
      id: id,
      text: input.value,
   };
   if (product.text.trim() === '') {
      input.focus();
      return;
   }

   products.push(product); // 배열 products에 오브젝트 product(입력한 내용과 id를 담음)
   save(); // save 함수 실행

   createItem(product);

   input.value = '';
   input.focus();
}

// ul.item을 만들어주는 함수
function createItem(product) {
   const itemRow = document.createElement('li');
   itemRow.setAttribute('class', 'item_row');
   itemRow.setAttribute('data-id', product.id);
   itemRow.innerHTML = `
      <div class="item">
         <span class="item_name">${product.text}</span>
         <button class="itemDelete_btn">
            <i class="fa-solid fa-trash-can" data-id=${product.id}></i>
         </button>
      </div>
      <div class="item_divider"></div>`;
   id++;
   items.insertBefore(itemRow, items.firstChild);
   itemRow.scrollIntoView();
   return items;
}

addBtn.addEventListener('click', onAdd);
input.addEventListener('keypress', (event) => {
   if (event.key === 'Enter') {
      onAdd();
   }
});

input.addEventListener('focus', () => {
   input.removeAttribute('placeholder');
});

// 삭제
items.addEventListener('click', (e) => {
   const deleteButton = e.target.closest('.itemDelete_btn');
   if (deleteButton) {
      const target = deleteButton.closest('.item_row');
      const id = target.getAttribute('data-id');
      deleteItem(id);
      target.remove();
   }
});

// 아이템 삭제 함수
function deleteItem(id) {
   products = products.filter((product) => product.id !== parseInt(id)); // products 배열에서 삭제할 아이템을 제외합니다.
   save(); // 변경된 products 배열을 다시 저장합니다.
}

// 페이지 로드 시 localStorage에서 데이터 불러오기
function loadItems() {
   const loadedProducts = localStorage.getItem('products');
   if (loadedProducts !== null) {
      const parsedProducts = JSON.parse(loadedProducts).reverse();
      products = parsedProducts;
      parsedProducts.forEach((product) => {
         createItem(product);
      });
   }
}
loadItems();


//창닫기
document.querySelector('.leave').addEventListener('click',function(){
   document.querySelector('.end_section').classList.toggle('on')
})

document.querySelector('.leave2').addEventListener('click',function(){
   document.querySelector('.end_section').classList.remove('on')
})

document.querySelector('.end_section').addEventListener('click',function(){
   document.querySelector('.end_section').classList.remove('on')
})