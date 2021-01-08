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
      results += '<tr><th scope="row">'+(i+1)+'</th><td>'+response.query.search[i].title+'</td><td>'+response.query.search[i].snippet+'</td></tr>'+"<br><br>";
    }
    document.getElementById('results').innerHTML = results;
    console.log(response);
  })
  .catch(function(error) {
    console.log(error);
  });
}