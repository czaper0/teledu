var $footer = $('#footer');
var $win = $(window);
$win.on('scroll', function () {
  var scrollBottom = $(document).height() - $(window).height() - $(window).scrollTop();
  var foot = scrollBottom*0.225;
  if(scrollBottom<400)$footer.css('transform', 'perspective(500px) rotateX(' + foot + 'deg) translateY(-200px)');
  else $footer.css('transform', 'perspective(500px) rotateX(-90deg) translateY(-200px)');
});
function funkcja1(ident)
{
  for (i = 0; i < 6; i++)
  {
      $("#"+i+"1").removeClass("rectangle_long");
      $("#title_"+i+"1").fadeOut(600);
      document.getElementById("title_"+i+"1").style.display="none";
      document.getElementById("img_"+i+"1").style.float="";

  }
    $("#title_"+ident).fadeIn(600);
    document.getElementById("title_"+ident).style.display="block";
    document.getElementById("img_"+ident).style.float="left";
  $("#"+ident).addClass("rectangle_long");
  if(ident=='01') $("main_choose").addClass("main_choose_display");
  else $("main_choose").removeClass("main_choose_display");
}

function choose_menu(iden)
{
  $("#choose_option_1").addClass("choose_option_off");
  $("#choose_option_2").addClass("choose_option_off");
  $("#choose_option_3").addClass("choose_option_off");
  $("#choose_option_"+iden).removeClass("choose_option_off");
  $("#choose_option_"+iden).addClass("choose_option_on");


}

function update_content(section, ident)
{
  $("#content_box").load("content/"+section+"/"+ident+".html");
}

/*$(document).ready(function() {
  $("#choose_option_1").click(function() {
    $('#UEC1').load("content/UEC/1.html");
});
});*/


/*
var cssLink = document.createElement("link")
cssLink.href = "style.css";
cssLink.rel = "stylesheet";
cssLink.type = "text/css";
document.iframe.body.appendChild(cssLink);


frame1.$('mydiv').addClassName('withborder')

frame1.$('mydiv').style.border = '1px solid #000000'
*/
