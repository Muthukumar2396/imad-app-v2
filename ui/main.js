//copunter code
var button = document.getElementById('counter');
button.onclick= function(){
  // create req obj
  var request = new XMLHttpRequest(); 
  // capture the res and store it in a variable
  request.onreadystatechange = function(){
      if (request.readyState === XMLHttpRequest.DONE)
      if(request.status === 200){
        var counter =  request.responseText;
        var span = document.getElementById('count');
          span.innerHTML = counter.toString();
      }
  };
  
 // Make the req
 request.open('GET','http://muthukumar2396.imad.hasura-app.io/counter',true);
 request.send(null);
};