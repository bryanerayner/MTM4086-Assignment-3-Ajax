function loadJSON(){
   var data_file = "data.json";
   var http_request = new XMLHttpRequest();
   try{
      // Opera 8.0+, Firefox, Chrome, Safari
      http_request = new XMLHttpRequest();
   }catch (e){
      // Internet Explorer Browsers
      try{
         http_request = new ActiveXObject("Msxml2.XMLHTTP");
      }catch (e) {
         try{
            http_request = new ActiveXObject("Microsoft.XMLHTTP");
         }catch (e){
            // Something went wrong
            alert("Your browser may not support AJAX, or refresh cause something went wrong");
            return false;
         }
      }
   }
   http_request.onreadystatechange  = function(){

      // readyState == 4 means the request was successful
      if (http_request.readyState == 4  ){
        // Javascript function JSON.parse to parse JSON data
        var jsonObj = JSON.parse(http_request.responseText);

        // My Entire JSON Object from data.json
        console.log(jsonObj);
        var feedWrapper = document.getElementById('article-feed');
        for (var i = 0, ii = jsonObj.length; i < ii; i++)
        {
          var current = jsonObj[i];
          var newArticle = document.createElement("div");
          newArticle.className = "l_grid_cell-sm-3 article";
          var newHTML = '<img class = "m_image" src = "' + current.imageUrl + '">';
          newHTML +=    '<div class = "m_text">';
          newHTML +=    '<a href = "' + current.url + '"><h2>' + current.title + '</h2></a>';
          newHTML +=    '<p>' + current.caption+ '<br></p>';
          newHTML +=    '<h4>Credited to: ' + current.credits + '</h4></div>';

           newArticle.innerHTML = newHTML;
           feedWrapper.appendChild(newArticle);
        }
        

      }

   }
   http_request.open("GET", data_file, true);
   http_request.send();
}

//auto load loadJSON();