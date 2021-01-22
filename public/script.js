function getCookie(cname) {
  var name = cname + "=";
  var decodedCookie = decodeURIComponent(document.cookie);
  var ca = decodedCookie.split(';');
  for(var i = 0; i <ca.length; i++) {
    var c = ca[i];
    while (c.charAt(0) == ' ') {
      c = c.substring(1);
    }
    if (c.indexOf(name) == 0) {
      return c.substring(name.length, c.length);
    }
  }
  return "";
}

var timerID = setInterval(function() {
  var d = new Date(); // for now
  hours = d.getHours(); // => 9
  mins = d.getMinutes(); // => 30
  secs  d.getSeconds(); // => 51
  if (seconds == 1){
    writeUserData(getCookie("userID"))
  }
  console.log(seconds)
}, 1000);

console.log("TADA")

function writeUserData(userID) {
  var d = new Date();
  print(d)
  firebase.database().ref('live/' + userID).set({
    time: new Date(),
    username: name,
    email: email,
    profile_picture : imageUrl
  });
}