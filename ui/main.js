//copunter code
var submit = document.getElementById('submit_btn');
submit.onclick= function(){
  // create req obj
  var request = new XMLHttpRequest(); 
  // capture the res and store it in a variable
  request.onreadystatechange = function(){
      if (request.readyState === XMLHttpRequest.DONE)
      if(request.status === 200){
        var names = request.responseText;
        names = JSON.parse(names);
    var list ='';
    for(var i=0; i<names.length;i++){
        list+= '<li>'+names[i] + '</li>';
    }
    var ul = document.getElementById('namelist');
    ul.innerHTML =list;
      }
  };
  
 // Make the req
 var nameInput = document.getElementById('name');
var name = nameInput.value;
 request.open('GET','http://muthukumar2396.imad.hasura-app.io/submit-name?name='+name,true);
 request.send(null);
};
