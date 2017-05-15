var monthNames = [ "January", "February", "March", "April", "May", "June",
  "July", "August", "September", "October", "November", "December" ];
var n =  new Date();
var m = monthNames[n.getMonth()];
var y = n.getFullYear();
var d = n.getDate();
var ord;

switch(d) {
  case 1:
    ord = 'th'
  case 2:
    ord = 'nd'
  case 3:
    ord = 'rd'
  default:
    ord = 'th'
};
var hour = n.getHours();
var minutes = n.getMinutes();
document.getElementById("last-update").innerHTML =
  m + " " + d + ord + " " + y + " @ " + hour + ":" + minutes;

