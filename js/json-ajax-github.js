function loadPeeps(){

    var programmer = $("#githubTagInput").val() || "bryanerayner";

    $('#loading').html('<img src="http://preloaders.net/preloaders/287/Filling%20broken%20ring.gif"> loading...');

    $.ajax({
        type: "GET",
        dataType: "json",
        url: "https://api.github.com/users/"+programmer,
        success: function (data) {
            console.log(data);
            setTimeout(function () {
              makeADude(data);

            }, 2000);
        }
    });

}

//auto load loadJSON();



function makeADude(data)
{
  var $newDiv = $("<div/>");
  $newDiv.addClass("programmer");
  $newDiv.html('<img class = "m_avatar" src="' + data.avatar_url + '">'
    +'<p class = "m_login">Github Profile: <a href = "' + data.html_url + '" class = "m_info">' + data.login + '</a></p>' 
    +'<p class = "m_repos">Public Repos: <span class = "m_info">' + data.public_repos + '</span></p>' 
    +'<p class = "m_createdAt">User Since: <span class = "m_info">' + $.format.date(data.created_at, "d-MMM-yyyy") + '</span></p>');
  $('#loading').parent().append($newDiv);
  $("#loading").html("");
}