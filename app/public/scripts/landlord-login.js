// Initialize Firebase
const config = {
  apiKey: "AIzaSyDaWHQlPSV8YFpjzKj7ovlyqDB3v7u4d_4",
  authDomain: "property-mngr.firebaseapp.com",
  databaseURL: "https://property-mngr.firebaseio.com",
  projectId: "property-mngr",
  storageBucket: "property-mngr.appspot.com",
  messagingSenderId: "386397661239"
};
firebase.initializeApp(config);

const provider = new firebase.auth.GoogleAuthProvider();

document.getElementById('login').onclick = ()=>{
  console.log('clicked');
  firebase.auth().signInWithPopup(provider).then( result => {
    console.log(result);
    if(result.user){
      let user = {
        uid: result.user.uid,
        name: result.user.displayName,
        email: result.user.email,
        type: 'tenant'
      }
      $.post('/api/user', user);
    }
  });
}

document.getElementById('logout').onclick = ()=>{
  console.log('clicked');
  firebase.auth().signOut().then(() => {
    console.log('logged out');
  });
}