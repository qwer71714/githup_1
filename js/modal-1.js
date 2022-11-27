$(function(){
  $('.mo-1').click(function(){
    $('body').css('overflow','hidden');
      $('#modal-1').css({'display':'block'});

  });
  $('.modal-close').click(function(){
      $('#modal-1').css({'display':'none'});
      $('body').css('overflow','auto');

  });
});

$(function(){
  $('.mo-2').click(function(){
    $('body').css('overflow','hidden');
      $('#modal-2').css({'display':'block'});

  });
  $('.modal-close').click(function(){
      $('body').css('overflow','auto');
      $('#modal-2').css({'display':'none'});

  });
});

$(function(){
  $('.mo-3').click(function(){
    $('body').css('overflow','hidden');
      $('#modal-3').css({'display':'block'});

  });
  $('.modal-close').click(function(){
      $('body').css('overflow','auto');
      $('#modal-3').css({'display':'none'});

  });
});