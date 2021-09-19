var a = true;
$(".burger").on("click",function(){
  if(a){
    $(".nav-links").addClass("pressed");
    $(".burger").addClass("active");
    a = false;
  }else{
    $(".nav-links").removeClass("pressed");
    $(".burger").removeClass("active");
    a = true;
  }

})
