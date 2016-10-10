var text="";
var author = "";
var colors = ['#16a085', '#27ae60', '#2c3e50', '#f39c12', '#e74c3c', '#9b59b6', '#FB6964', '#342224', "#472E32", "#BDBB99", "#77B1A9", "#73A857"];
function getQuote() {
  $.ajax({
    url:"http://apis.baidu.com/txapi/dictum/dictum",
    headers: {apikey: "58c8a8d547f64b755766fc587300c3ff"},
    method: "GET",
    dataType: "JSON",
    success: function(val){
     // var v = JSON.parse(val);
      var v = val.newslist;
      $(".text,.author").animate({
        opacity:0,
      }, 500, function(){
        $(this).animate({
          opacity:1,
        },500);
        $("#text").text(v[0].content);
        $("#author").text(v[0].mrname);
      });
      var color = Math.floor(Math.random() * colors.length);
     $("body").animate({
        backgroundColor: colors[color],
        color: colors[color]
      }, 1000);
      $(".btn").animate({
        backgroundColor: colors[color],
        
      }, 1000);
    }      
});
}

$(document).ready(function(){
  getQuote();
  $("#another").click(getQuote);
});