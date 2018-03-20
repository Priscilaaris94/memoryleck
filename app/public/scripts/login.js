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

$('#login-tenant').on('click', ()=>{
  console.log('clicked');
  firebase.auth().signInWithPopup(provider).then( result => {
    if(result.user){
      let user = {
        uid: result.user.uid,
        name: result.user.displayName,
        email: result.user.email,
        type: 'tenant'
      }
      localStorage.setItem('user', result.user.uid);
      localStorage.setItem('type', 'tenant');
      $.post('/api/user', user)
      .then(r => {
        // console.log(r);
        // window.location.href = r;
      });
    }
  });
});

$('#login-landlord').on('click', ()=>{
  console.log('clicked');
  firebase.auth().signInWithPopup(provider).then( result => {
    console.log(result.user);
    if(result.user){
      let user = {
        uid: result.user.uid,
        name: result.user.displayName,
        email: result.user.email,
        type: 'landlord'
      }
      localStorage.setItem('user', result.user.uid);
      localStorage.setItem('type', 'landlord');
      $.post('/api/user', user)
      .then(r => {
        // console.log('complete ' + r);
        // window.location.href = r;
      });
    }
  });
});

$('#logout').on('click', ()=>{
  console.log('clicked');
  firebase.auth().signOut().then(() => {
    console.log('logged out');
    localStorage.clear();
    window.location.href = '/';
  });
});