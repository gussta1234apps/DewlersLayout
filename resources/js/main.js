var showMenuBox = true;
var showFriendsBox = false;

$(document).ready(function(){
   /*  if( /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent) ) {
        $('.create-dewl-button-desktop').hide();
    }else{
        $('.create-dewl-mobile').hide();
    } */

    showHome()


    $('.menu-box').css('left','-350px');
    $('.friends-box').css('right','-350px');
    $('.r-u-sure').hide();

    $('.menu-button').click(function(){
        toggleMenu()
    });

    $('.witness-player-selector .btn').click(function(){
        togglewinnerChooser();
    });
    $('.r-u-sure .btn').click(function(){
        togglewinnerChooser();
    });


});

let showHome=()=>{
    $('#history').slideUp(0);
    $('#home').slideDown(0);
    toggleMenu()
}

let showHistory=()=>{
    $('#home').slideUp(0);
    $('#history').slideDown(0);
    toggleMenu()
}

let toggleMenu=()=>{
    if(showMenuBox){
        $('.menu-box').css('left','-350px');
        //$('.menu-box').hide(500);
        showMenuBox = false;
    }else{
        if(showFriendsBox){toggleFriendBox()}
        $('.menu-box').show(300);
        $('.menu-box').css('left','0px');
        showMenuBox = true;
    }
}

let toggleFriendBox=()=>{
    if(showFriendsBox){
        $('.friends-box').css('right','-350px');
        //$('.menu-box').hide(500);
        showFriendsBox = false;
    }else{
        if(showMenuBox){toggleMenu()}
        $('.friends-box').show(300);
        $('.friends-box').css('right','0px');
        showFriendsBox = true;
    }
}

let togglewinnerChooser=()=>{
    $('.choose-winner').toggle();
    $('.r-u-sure').toggle();

}