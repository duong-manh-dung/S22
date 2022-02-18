$(".s22-plus, .s22").css('display', 'none');

$(".select-items div:first-child").click(function() {
  $(".s22-ultra").css('display', 'block');
  $(".s22-plus, .s22").css('display', 'none');
});

$(".select-items div:nth-child(2)").click(function() {
  $(".s22-plus").css('display', 'block');
  $(".s22-ultra, .s22").css('display', 'none');
});

$(".select-items div:nth-child(3)").click(function() {
  $(".s22").css('display', 'block');
  $(".s22-ultra, .s22-plus").css('display', 'none');
});
