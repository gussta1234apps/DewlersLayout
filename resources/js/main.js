var showMenuBox = true;
var showFriendsBox = false;

$(document).ready(function(){
   /*  if( /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent) ) {
        $('.create-dewl-button-desktop').hide();
    }else{
        $('.create-dewl-mobile').hide();
    } */

    $('.request-body').slideUp();
    showHome()

    $('.menu-box').css('left','-350px');
    $('.friends-box').css('right','-350px');

    $('.menu-button').click(function(){
        toggleMenu()
    });

    $('.dewler-search-input').keyup(function(){
        if($('.dewler-search-input').val().length>0){
            $('.friends-request').slideUp(300);
            $('.friends-results').addClass("full-table");
        }else{
            $('.friends-request').slideDown(300);
            $('.friends-results').removeClass("full-table");

        }
    });

    $('.friends-request-notification').click(function(){
        $('.friends-body').hide(0);
        $('.request-body').show(300);
    });

    $('.return-to-friends-body').click(function(){
        $('.request-body').hide(0);
        $('.friends-body').show(0);
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