//pop up
window.addEventListener("load",function(){
  setTimeout(
      function open(event){
          document.querySelector(".popup").style.display = "block";
      },
      1000
  )
})

document.querySelector("#close").addEventListener("click",function(){
  document.querySelector(".popup").style.display = "none";
});//end pop up

// window.onload = function() {
//   setInterval(showPopup, 300000); // 5 minutes = 300,000 milliseconds
// };
// init Isotope
var $grid = $('.collection-list').isotope({
  // options
});
// filter items on button click
$('.filter-button-group').on( 'click', 'button', function() {
  var filterValue = $(this).attr('data-filter');
  resetFilterBtns();
  $(this).addClass('active-filter-btn');
  $grid.isotope({ filter: filterValue });
});

var filterBtns = $('.filter-button-group').find('button');
function resetFilterBtns(){
  filterBtns.each(function(){
    $(this).removeClass('active-filter-btn');
  });
}