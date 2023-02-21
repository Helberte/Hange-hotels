
$(document).ready(function() {
  $(window).scroll(function() {
    if(this.scrollY > 500){
      $("#btn-scroll-top").addClass("active");
    }else{
      $("#btn-scroll-top").removeClass("active");
    }
  })

  $("#btn-scroll-top").click(function() {
    $("html").animate({scrollTop:0});
  });
});