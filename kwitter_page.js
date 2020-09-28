// Your web app's Firebase configuration
var firebaseConfig = {
      apiKey: "AIzaSyATABkktx8sTtvTbhKF8FWKFoe0sDN4dSA",
      authDomain: "classtest-703f8.firebaseapp.com",
      databaseURL: "https://classtest-703f8.firebaseio.com",
      projectId: "classtest-703f8",
      storageBucket: "classtest-703f8.appspot.com",
      messagingSenderId: "725713047523",
      appId: "1:725713047523:web:69f2c511d9ccd88f46dad6"
    };
    // Initialize Firebase
    firebase.initializeApp(firebaseConfig);

//YOUR FIREBASE LINKS
user_name=localStorage.getItem("user_name");
room_name=localStorage.getItem("room_name");

function send() {
       msg=document.getElementById("msg").value;
       firebase.database().ref(room_name).push({
            name:user_name,
            message:msg,
            like:0
      });
      document.getElementById("msg").value="";
}

function getData() { firebase.database().ref("/"+room_name).on('value', function(snapshot) { document.getElementById("output").innerHTML = ""; snapshot.forEach(function(childSnapshot) { childKey  = childSnapshot.key; childData = childSnapshot.val(); if(childKey != "purpose") {
         firebase_message_id = childKey;
         message_data = childData;
//Start code

//End code
      } });  }); }
getData();
