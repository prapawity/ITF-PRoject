// Inspired by https://dribbble.com/shots/1426764-Submit-Button?list=searches&tag=button&offset=43
$(document).ready(function(){
    $('.submit').click(function(){
       $('button').html('');
       $('button').removeClass('submit');
       $('button').addClass('loader');
       setTimeout(function() {
           $('button').removeClass('loader');
           $('button').addClass('success');
           $('button').removeClass('submit');
           $('button').html('<i class="ion-checkmark-round"></i>');
      }, 2000);




    });

});
