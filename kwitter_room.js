
var firebaseConfig = {
      apiKey: "AIzaSyCy-THskKHhs7a9q_B07cwiFhBysezHJJ8",
      authDomain: "chat-app-bfb3a.firebaseapp.com",
      databaseURL: "https://chat-app-bfb3a-default-rtdb.firebaseio.com",
      projectId: "chat-app-bfb3a",
      storageBucket: "chat-app-bfb3a.appspot.com",
      messagingSenderId: "576564586086",
      appId: "1:576564586086:web:e6315c3d336b575ba1afa7"
    };
    
    // Initialize Firebase
      initializeApp(firebaseConfig);

function getData() {firebase.database().ref("/").on('value', function(snapshot) {document.getElementById("output").innerHTML = "";snapshot.forEach(function(childSnapshot) {childKey  = childSnapshot.key;
       Room_names = childKey;
      //Start code

      //End code
      });});}
getData();
