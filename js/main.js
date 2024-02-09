document.addEventListener('DOMContentLoaded', function() {
    var ecommerceSearch = document.querySelector('.ecommerce_search');
    var headerNavList = document.querySelector('.header-nav__list');
    var headerSearch = document.querySelector('.header-search');

    ecommerceSearch.addEventListener('click', function() {
      headerNavList.classList.toggle('hidden');
      headerSearch.classList.toggle('hidden');
    });
  });
  $(document).ready(function(){
    var currentSlide = 0;
    var totalSlides = $(".banner-img").length;

    function showSlide(index){
        $(".banner-img").removeClass("active-slide"); // Ẩn tất cả các ảnh
        $(".banner-img:eq(" + index + ")").addClass("active-slide"); // Hiển thị ảnh tại vị trí index
    }

    $(".right").click(function(){
        currentSlide = (currentSlide + 1) % totalSlides;
        showSlide(currentSlide);
    });

    $(".left").click(function(){
        currentSlide = (currentSlide - 1 + totalSlides) % totalSlides;
        showSlide(currentSlide);
    });
});
