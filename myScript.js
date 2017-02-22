function funkcja1(ident)
{
  for (i = 0; i < 6; i++)
  {
      $("#"+i+"1").removeClass("rectangle_long");
      if(i!=(ident-1)/10) $("#content_"+i+"1").fadeOut(600).addClass("main_content_display");
      $("#title_"+i+"1").fadeOut(600);
      document.getElementById("title_"+i+"1").style.display="none";
      //document.getElementById("img_"+i+"1").style.display="block";
      document.getElementById("img_"+i+"1").style.float="";

  }
    $("#title_"+ident).fadeIn(600);
    document.getElementById("title_"+ident).style.display="block";
    //document.getElementById("img_"+ident).style.display="none";
    document.getElementById("img_"+ident).style.float="left";
  $("#"+ident).addClass("rectangle_long");
/*  $("#content_"+ident).removeClass("main_content_display").fadeIn(600);*/
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
    $("#"+section+ident).load("content/" + section + "/" + ident + ".html");
    $('#UEC1').load("content/UEC/1.html");
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


/*
$('iframe').load( function() {
  $('iframe').contents().find("head")
  .append($("<style type='text/css'>  .main_content{color:red;}  </style>"));
});

function horizontal_menu(iden)
{
  document.getElementById("#choose_option_1").style.background-color="rgba(255, 255, 255, 0.08)";
  document.getElementById("#choose_option_2").style.background-color="rgba(255, 255, 255, 0.08)";
  document.getElementById("#choose_option_3").style.background-color="rgba(255, 255, 255, 0.08)";
  document.getElementById("#choose_option_1").style.background-color="#201f28";
}<!--onload="funkcja1('01')"-->
*/


/*funcadeIn(300);
  //if(ident=='01') $("main_choose").addClass("main_choose_display");
  //else $("main_choose").removeClass("main_choose_display");
  for (i = 1; i < 4; i++)
  {
      $("#choose_option_"+iden).addClass("choosen_button");
  }
  $("#choose_option_1").removeClass("choosen_button");
  $("#choose_option_2".removeClass("choosen_button");
  $("#choose_option_3").removeClass("choosen_button");
  $("#choose_option_"+iden).addClass("choosen_button");
}*/
/*setTimeout("dodaj()",500)

link.setAttribute("type", "text/css");

*/
