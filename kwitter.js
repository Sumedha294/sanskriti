
  var firebaseapp = {
    apiKey: "AIzaSyAh5VKkJm__CiffLwFjfjinmEtlWB0xwbo",
    authDomain: "kwitter-9a2ef.firebaseapp.com",
    databaseURL: "https://kwitter-9a2ef-default-rtdb.firebaseio.com",
    projectId: "kwitter-9a2ef",
    storageBucket: "kwitter-9a2ef.appspot.com",
    messagingSenderId: "298488929317",
    appId: "1:298488929317:web:4ca0e63418cfcaa19cf3cc",
    measurementId: "G-315WDJG9QD"
  };
  


function addUser(){
    
    user_name  = document.getElementById("user_name").value;

    localStorage.setItem("user_name", user_name);

    window.location = "kwitter_room.html";
}
