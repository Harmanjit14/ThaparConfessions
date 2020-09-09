function openNav() {
  document.getElementById("mySidenav").style.width = "250px";
  document.getElementById("main").style.marginLeft = "250px";
  document.body.style.backgroundColor = "rgba(0,0,0,0.4)";
}

function closeNav() {
  document.getElementById("mySidenav").style.width = "0";
  document.getElementById("main").style.marginLeft= "0";
  document.body.style.backgroundColor = "white";
}
const firebaseConfig = {
  apiKey: "AIzaSyDuo9C8w6Q8L3vHn_PcNMvZbwKe_KIT200",
  authDomain: "thaparconfessions-7477a.firebaseapp.com",
  databaseURL: "https://thaparconfessions-7477a.firebaseio.com",
  projectId: "thaparconfessions-7477a",
  storageBucket: "thaparconfessions-7477a.appspot.com",
  messagingSenderId: "1038497044712",
  appId: "1:1038497044712:web:70045782dbbd1eddb1115d",
  measurementId: "G-73FN0K3FF2"
};
firebase.initializeApp(firebaseConfig);
    var firestore = firebase.firestore(); 
const title = document.getElementById("heading4");
const message = document.getElementById("message").classList;
const button = document.getElementById("mybutton").classList;
title.addEventListener("click",function(){
    if(message.contains("hide")){
        message.remove("hide");
        button.remove("hide");
    }
})
const publish = document.getElementById("mybutton");
const confess = document.getElementById("message");
publish.addEventListener("click",function(){
    firestore.collection('confessions').add({
        text: confess.value
    })
    alert("Confession Published!!")
})
