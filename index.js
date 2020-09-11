  function openNav() {
  document.getElementById("mySidenav").style.width = "250px";
  document.getElementById("main").style.marginLeft = "250px";
  document.body.style.backgroundColor = "rgba(0,0,0,0.4)";
}
var colorString= ["#3acbd9","#e1e228","#ee665e","#3bb273"]
// const view = document.getElementById("view");
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
    var d = new Date();
    var n = d.getTime();
    if(confess.value=="")
        {
        alert("Cannot publish empty field")
        return false;
       
        }
    else{
        db.collection('confessions').add({
        text: confess.value,
        time: 0-n
    })
        console.log(n)
    alert("Confession Published!!")
    }
})
function view(){
    db.collection("confessions").orderBy("time","asc").limit(15).onSnapshot(function(querySnapshot){
        querySnapshot.docChanges().forEach(function(change){
            if(change.type=="added"){
                document.querySelector(".row").innerHTML += `<div class='col-lg-3' style=background-color:${colorString[Math.floor(Math.random()*4)]}><p>` + change.doc.data().text + "</p></div>"
            }
        })
    })
 

}


