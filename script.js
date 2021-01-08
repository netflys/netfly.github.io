// https://netflys.github.io/script.js

$(document).ready(function(w) {
  $("#get-started").click(function (_this) {
    _this = this;
    window.location.href = "";
  });
  $("#search-area").hide();
});
function searching(_this) {
  _this = this;
  let results = "";
  var url = "https://en.wikipedia.org/w/api.php";


  var params = {
    action: "query",
    list: "search",
    srsearch: $("#search").val(),
    format: "json"
  };

  url = url + "?origin=*";
  Object.keys(params).forEach(function(key) {
    url += "&" + key + "=" + params[key];
  });

  fetch(url)
  .then(function(response) {
    return response.json();
  })
  .then(function(response) {
    $("#search-area").show();
    for (var i = 0; i < response.query.search.length; i++) {
      results += '<tr><td style="min-width:120px"><h5>'+response.query.search[i].title+'</h5></td><td><h6>'+response.query.search[i].snippet+'....<br><a href= "http://en.wikipedia.org/wiki?curid='+response.query.search[i].pageid+'" target="_parent"> Read more </a></h6></td> </tr>'+"<br><br>";
    }
    document.getElementById('results').innerHTML = results;
    console.log(response);
  })
  .catch(function(error) {
    console.log(error);
  });
}