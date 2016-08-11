$(document).ready(function(){
  $("#userInfo").submit(function(event) {
    event.preventDefault();
    var height = parseInt($("#userHeight").val());
    var ferris = 24;
    var coaster = 36;
    var slingshot = 48;
    if(height >= slingshot) {
      $("#noRide").hide();
      $("#ferrisWheel").show();
      $("#rollerCoaster").show();
      $("#slingShot").show();
    }else if(height >= coaster) {
      $("#noRide").hide();
      $("#ferrisWheel").show();
      $("#rollerCoaster").show();
      $("#slingShot").hide();
    }else if(height >= ferris) {
      $("#noRide").hide();
      $("#ferrisWheel").show();
      $("#rollerCoaster").hide();
      $("#slingShot").hide();
    }else{
      $("#noRide").show();
      $("#ferrisWheel").hide();
      $("#rollerCoaster").hide();
      $("#slingShot").hide();
    }

  });
});
