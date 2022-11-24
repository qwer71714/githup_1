$(function(){
    $('#hotel-bt-1').click(function(){
        $('#hoterl-1').css('display','block');
        $('#hoterl-2, #hoterl-3, #hoterl-4').hide();
    })
    $('#hotel-bt-2').click(function(){
        $('#hoterl-2').css('display','block');
        $('#hoterl-1,#hoterl-3,#hoterl-4').hide();
    })
    $('#hotel-bt-3').click(function(){
        $('#hoterl-3').css('display','block');
        $('#hoterl-2, #hoterl-1, #hoterl-4').hide();
    })
    $('#hotel-bt-4').click(function(){
        $('#hoterl-4').css('display','block');
        $('#hoterl-1,#hoterl-3,#hoterl-2').hide();
    })
})

// index-2
$(function(){
    $('#rating-bt-1').click(function(){
        $('#rating-1').css('display','block');
        $('#rating-2, #rating-3, #rating-4,#rating-5').hide();
    })
    $('#rating-bt-2').click(function(){
        $('#rating-2').css('display','block');
        $('#rating-1,#rating-3,#rating-4,#rating-5').hide();
    })
    $('#rating-bt-3').click(function(){
        $('#rating-3').css('display','block');
        $('#rating-2, #rating-1, #rating-4,#rating-5').hide();
    })
    $('#rating-bt-4').click(function(){
        $('#rating-4').css('display','block');
        $('#rating-1,#rating-3,#rating-2,#rating-5').hide();
    })

    $('#rating-bt-5').click(function(){
        $('#rating-5').css('display','block');
        $('#rating-1,#rating-3,#rating-2,#rating-4').hide();
    })
})

var selbt = document.getElementsByClassName("selbt");
    
function handleClick(event) {
  console.log(event.target);
  // console.log(this);
  // 콘솔창을 보면 둘다 동일한 값이 나온다

  console.log(event.target.classList);

  if (event.target.classList[0] === "clicked") {
    event.target.classList.remove("clicked");
  } else {
    for (var i = 0; i < selbt.length; i++) {
        selbt[i].classList.remove("clicked");
    }

    event.target.classList.add("clicked");
  }
}

function init() {
  for (var i = 0; i < selbt.length; i++) {
    selbt[i].addEventListener("click", handleClick);
  }
}
init();