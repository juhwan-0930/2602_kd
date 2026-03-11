console.clear()

$('.list-1 > a').hover(
  function () {
    $('.list-1 > a, .list-1-item').addClass('active');
  },
  function () {
    $('.list-1 > a, .list-1-item').removeClass('active');
  }
);

