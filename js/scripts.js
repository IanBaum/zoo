$(document).ready(function(){
  $("#userInfo").submit(function(event) {
    event.preventDefault();
    var height = parseInt($("#userHeight").val());
    var ferris = 24;
    var coaster = 36;
    var slingshot = 48;
    if(height >= ferris) {
      $("#ferrisWheel").show();
    }if(height >= coaster) {
      $("#rollerCoaster").show();
    }if(height >= slingshot) {
      $("#slingShot").show();
    }else {
      $("#noRide").show();
    }
  });
});
