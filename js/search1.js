function searchBooks() {
   var searchQuery = $('#searchQuery').val();
   $.ajax({
      method: "GET",
      url: "https://dapi.kakao.com/v3/search/book?target=title",
      data: { query: searchQuery },
      headers: { Authorization: "KakaoAK 5c5acca29d67bffab0d58aac95fc6fde" }
   })
   .done(function (item) {
      const bookData = {
         title: item.documents[0].title,
         thumbnail: item.documents[0].thumbnail,
         authors: item.documents[0].authors,
         publisher: item.documents[0].publisher,
         datetime: item.documents[0].datetime,
         contents: item.documents[0].contents,
         price: item.documents[0].price
      };

      console.log(bookData.title);
      console.log(bookData.thumbnail);
      console.log(item);

      $('.title').text(bookData.title);
      $('.img').html("<img src='" + bookData.thumbnail + "'/>");
      $('.txt').text(bookData.authors + "(" + bookData.publisher + ")");

      // 클릭 이벤트 추가
      $('.content1').click(function() {
         // 이전에 저장된 데이터 가져오기
         const existingData = localStorage.getItem('bookData');
         const existingBookData = existingData ? JSON.parse(existingData) : [];  

         // 새로운 데이터를 배열에 추가 
         existingBookData.push(bookData);

         // 로컬 스토리지에 업데이트된 배열 저장
         localStorage.setItem('bookData', JSON.stringify(existingBookData));

         // 콘텐츠 클릭하면 해당 페이지로 이동
         window.location.href = "./search2.html";
      });

      let thumbnailElement = document.querySelector('.thumbnail');
      thumbnailElement.src = bookData.thumbnail;

      let titleElement = document.querySelector('.title');
      titleElement.textContent = bookData.title;
   });
}

window.addEventListener('load', function() {
   // 이전에 저장된 데이터 확인하여 마지막 데이터로 업데이트
   var existingData = localStorage.getItem('bookData');
   if (existingData) {
      var existingBookData = JSON.parse(existingData);
      var lastBookData = existingBookData[existingBookData.length - 1];

      let thumbnailElement = document.querySelector('.thumbnail');
      thumbnailElement.src = lastBookData.thumbnail;

      let titleElement = document.querySelector('.title');
      titleElement.textContent = lastBookData.title;
   }
});
