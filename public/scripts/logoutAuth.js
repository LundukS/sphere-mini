//listen for auth status changes
auth.onAuthStateChanged(user => {
    if (user) {
     
     console.log('logged in')
    
    } else {
      console.log('logged out')
   
    }
  })
  

  
  // logout
  const logout = document.querySelector('#logout');
  logout.addEventListener('click', (e) => {
    e.preventDefault();
    auth.signOut().then(() => {
      window.location = '../index.html';
      console.log(' User logged out');
  
    })
  });
