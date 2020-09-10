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
const confess = document.getElementById("message");
const publish = document.getElementById("mybutton");
 const db = firebase.firestore();
publish.addEventListener("click",function(){
    if(confess.value=="")
        {
        alert("Cannot publish empty field")
        return false;
       
        }
    else{
        db.collection('confessions').add({
        text: confess.value
    })
    alert("Confession Published!!")
    }
})
function view(){
   
    db.collection("confessions").onSnapshot(function(querySnapshot){
        querySnapshot.docChanges().forEach(function(change){
            if(change.type=="added"){
                document.querySelector("#con").innerHTML += "<div class='content1'><p>" + change.doc.data().text + "</p></div>"
            }
        })
    })
    console.log("Harman bhadwa")
    
}


