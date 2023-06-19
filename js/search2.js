window.addEventListener('DOMContentLoaded', function () {
   // 로컬 스토리지에서 저장된 책 데이터 가져오기
   var bookData = JSON.parse(localStorage.getItem('bookData'));

   if (bookData) {
      // 기존 콘텐츠 초기화
      const contentWrap = document.querySelector('.content_wrap');
      contentWrap.innerHTML = '';

      // 마지막에 추가된 책 데이터 가져오기
      const latestBook = bookData[bookData.length - 1];

      // 콘텐츠 추가
      const content = document.createElement('div');
      content.className = 'content1';
      content.innerHTML = `
         <a href="./search2.html">
            <div class="img">
               <img class="thumbnail" src="${latestBook.thumbnail}">
            </div>
            <h1 class="title">${latestBook.title}</h1>
            <p class="txt">${latestBook.authors} (${latestBook.publisher})</p>
         </a>
      `;

      contentWrap.appendChild(content);

      const contents = document.querySelector('.section2_3 .contents');
      contents.textContent = latestBook.contents;

      const publisher = document.querySelector('.section2_2 .publisher');
      publisher.textContent = latestBook.publisher;

      const datetime = document.querySelector('.section2_2 .datetime');
      datetime.textContent = latestBook.datetime;

      const price = document.querySelector('.price');
      price.textContent = latestBook.price;

      // .later 요소를 클릭했을 때 실행될 이벤트 핸들러
      const laterLink = document.querySelector('.later a');
      laterLink.addEventListener('click', function (event) {
         event.preventDefault();

         // 로컬 스토리지에서 저장된 laterBookData 가져오기
         let laterBookData = JSON.parse(localStorage.getItem('laterBookData'));

         // laterBookData에 값이 없으면 추가
         if (!laterBookData) {
            laterBookData = [];
         }

         // 중복된 값이 없으면 laterBookData에 추가
         if (!laterBookData.some(book => book.title === latestBook.title)) {
            // nowBookData와 finishBookData 배열에서 중복된 값 제거
            let nowBookData = JSON.parse(localStorage.getItem('nowBookData'));
            if (nowBookData) {
               nowBookData = nowBookData.filter(function (book) {
                  return book.title !== latestBook.title;
               });
               localStorage.setItem('nowBookData', JSON.stringify(nowBookData));
            }

            let finishBookData = JSON.parse(localStorage.getItem('finishBookData'));
            if (finishBookData) {
               finishBookData = finishBookData.filter(function (book) {
                  return book.title !== latestBook.title;
               });
               localStorage.setItem('finishBookData', JSON.stringify(finishBookData));
            }

            // laterBookData에 값 추가
            laterBookData.push(latestBook);
            localStorage.setItem('laterBookData', JSON.stringify(laterBookData));
         }
      });

      // .now 요소를 클릭했을 때 실행될 이벤트 핸들러
      const nowLink = document.querySelector('.now a');
      nowLink.addEventListener('click', function (event) {
         event.preventDefault();

         // 로컬 스토리지에서 저장된 nowBookData 가져오기
         let nowBookData = JSON.parse(localStorage.getItem('nowBookData'));

         // nowBookData에 값이 없으면 추가
         if (!nowBookData) {
            nowBookData = [];
         }

         // 중복된 값이 없으면 nowBookData에 추가
         if (!nowBookData.some(book => book.title === latestBook.title)) {
            // laterBookData와 finishBookData 배열에서 중복된 값 제거
            let laterBookData = JSON.parse(localStorage.getItem('laterBookData'));
            if (laterBookData) {
               laterBookData = laterBookData.filter(function (book) {
                  return book.title !== latestBook.title;
               });
               localStorage.setItem('laterBookData', JSON.stringify(laterBookData));
            }

            let finishBookData = JSON.parse(localStorage.getItem('finishBookData'));
            if (finishBookData) {
               finishBookData = finishBookData.filter(function (book) {
                  return book.title !== latestBook.title;
               });
               localStorage.setItem('finishBookData', JSON.stringify(finishBookData));
            }

            // nowBookData에 값 추가
            nowBookData.push(latestBook);
            localStorage.setItem('nowBookData', JSON.stringify(nowBookData));
         }
      });

      // .finish 요소를 클릭했을 때 실행될 이벤트 핸들러
      const finishLink = document.querySelector('.finish a');
      finishLink.addEventListener('click', function (event) {
         event.preventDefault();

         // 로컬 스토리지에서 저장된 finishBookData 가져오기
         let finishBookData = JSON.parse(localStorage.getItem('finishBookData'));

         // finishBookData에 값이 없으면 추가
         if (!finishBookData) {
            finishBookData = [];
         }

         // 중복된 값이 없으면 finishBookData에 추가
         if (!finishBookData.some(book => book.title === latestBook.title)) {
            // laterBookData와 nowBookData 배열에서 중복된 값 제거
            let laterBookData = JSON.parse(localStorage.getItem('laterBookData'));
            if (laterBookData) {
               laterBookData = laterBookData.filter(function (book) {
                  return book.title !== latestBook.title;
               });
               localStorage.setItem('laterBookData', JSON.stringify(laterBookData));
            }

            let nowBookData = JSON.parse(localStorage.getItem('nowBookData'));

            if (nowBookData) {
               nowBookData = nowBookData.filter(function (book) {
                  return book.title !== latestBook.title;
               });
               localStorage.setItem('nowBookData', JSON.stringify(nowBookData));
            }

            // finishBookData에 값 추가
            finishBookData.push(latestBook);
            localStorage.setItem('finishBookData', JSON.stringify(finishBookData));
         }
      });
   }
});
