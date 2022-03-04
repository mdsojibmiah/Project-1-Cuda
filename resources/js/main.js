/*-------===================-------*/
/* STICKY NAV JS*/
/*-------===================-------*/

$(document).ready(function(){

    //STICKY
    $(".js-services").waypoint(function(direction){
        if(direction == "down"){
            $("nav").addClass("sticky");
        }
        else{
            $("nav").removeClass("sticky");
        }
    });
/*-------===================-------*/
/* MIXITUP JS*/
/*-------===================-------*/
    var mixer = mixitup('.container');

});
/*-------===================-------*/
/* MOBILE NAV MENU JS*/
/*-------===================-------*/

function openNav(){
    document.getElementById("myNav").style.width = "100%";
}
function closeNav(){
    document.getElementById("myNav").style.width = "0%";
}