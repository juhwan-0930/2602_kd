console.clear();

$(".list-1, .list-1-item").hover(
  function () {
    $(".list-1 > a, .list-1-item, .header, .btn_link, .inner_list, .utils").addClass("active");
  },
  function () {
    $(".list-1 > a, .list-1-item, .header, .btn_link, .inner_list, .utils").removeClass("active");
  },
);