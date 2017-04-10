//Twitter Widget Code
//===================================
window.twttr = (function(d, s, id) {
  var js, fjs = d.getElementsByTagName(s)[0],
    t = window.twttr || {};
  if (d.getElementById(id)) return t;
  js = d.createElement(s);
  js.id = id;
  js.src = "https://platform.twitter.com/widgets.js";
  fjs.parentNode.insertBefore(js, fjs);

  t._e = [];
  t.ready = function(f) {
    t._e.push(f);
  };

  return t;
}(document, "script", "twitter-wjs"));
//====================================

function getQuote(ev) {
  $.ajax({
    headers:{
"X-Mashape-Key":"nCUPcZTjjXmshMWWqcUaAm3HUEFUp1cVci7jsn25ySpiSKjAid",
Accept: "application/json",
      "Content-Type": "application/x-www-form-urlencoded"
    },
url:"https://andruxnet-random-famous-quotes.p.mashape.com/movies=",
  
success:function(response)
  {
    var data = JSON.parse(response);
    quote = data.quote;
    author = data.author;
    //alert(data.author +" "+ data.quote);
  var twitterUrl = "https://twitter.com/intent/tweet?text=" + quote + " : " + author;
  //alert(twitterUrl);
  //$("twitit").attr("href",twitterUrl);
      
 document.getElementById("quote").innerHTML='<i class= "fa fa-quote-left" aria-hidden="true">'+" " + quote + '</i>'; 
  document.getElementById("quote").css({"font-family:'Open Sans', sans-serif;"});
    document.getElementById("author").innerHTML='<i>'+author+'</i>';
    var twitterUrl = '#quotegenerator ' + '"'+ quote + '" - ' + author;
    
        ev.preventDefault();
    // Remove existing iframe
    $('#tweetBtn iframe').remove();
    // Generate new markup
    var tweetBtn = $('<a></a>')
        .addClass('twitter-share-button')
        .attr('href', 'http://twitter.com/share')
        .attr('data-url', 'https://codepen.io/SpaceBiscuit/pen/yajxYr')
        .attr('data-text', twitterUrl);
    $('#tweetBtn').append(tweetBtn);
    twttr.widgets.load();
    
  }
  })

}

$(document).ready(function () {
  getQuote();
$('#quoteButton').on('click', getQuote);
  
  })

