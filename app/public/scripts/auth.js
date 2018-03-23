(function(){
/////////////////////////////////////////////////
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

$(document).ready(function(){
  /////////////////////////////////////////////////
  // Tenant Login
  $('#login-tenant').on('click', ()=>{
    firebase.auth().signInWithPopup(provider).then( result => {
      console.log(result.user);
      if(result.user){
        let user = {
          uid: result.user.uid,
          name: result.user.displayName,
          email: result.user.email,
          type: 'tenant'
        }
        $.post('/api/user', user)
        .then(r => {
          window.location.href = r;
        });
      }
    });
  });

  /////////////////////////////////////////////////
  // Tenant Claim Home
  $('#claim-prop').on('click', (event)=>{
    firebase.auth().signInWithPopup(provider).then( result => {
      console.log(result.user);
      // return console.log(event);
      if(result.user){
        let user = {
          uid: result.user.uid,
          name: result.user.displayName,
          email: result.user.email,
          type: 'tenant'
        },
        property = {
          id: event.currentTarget.attributes['data-id'].value,
          tenant_id: result.user.uid
        }
        $.post('/api/user', user)
        .then(r =>{
          $.post('/api/property', property);
          return r;
        })
        .then(r => {
          window.location.href = r;
        });
      }
    });
  });

  /////////////////////////////////////////////////
  // Landlord Login
  $('#login-landlord').on('click', ()=>{
    firebase.auth().signInWithPopup(provider).then( result => {
      console.log(result.user);
      if(result.user){
        let user = {
          uid: result.user.uid,
          name: result.user.displayName,
          email: result.user.email,
          type: 'landlord'
        }
        $.post('/api/user', user)
        .then(r => {
          window.location.href = r;
        });
      }
    });
  });
  
  /////////////////////////////////////////////////
  // User Logout
  $('#logout').on('click', ()=>{
    firebase.auth().signOut().then(() => {
      localStorage.clear();
      window.location.href = '/';
    });
  });

});

})();
