//copunter code
var button = document.getElementById('counter');
var counter = 0;
button.onclick= function(){
  // make a req to the counter
  
  // capture the res and store it in a variable
  
  
  //Render the variable in the correct span
  counter=counter +1;
  var span = document.getElementById('count');
  span.innerHTML = counter.toString();
};