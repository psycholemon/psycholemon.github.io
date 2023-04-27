window.onload=function(){
 var password = window.prompt("Enter your password","");
 if (password == "LEMONS4LIFE"){
  document.getElementById("ID").innerHTML = password;
 }else{
  location.href = 'google.com';
 }
}
