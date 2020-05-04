(function(){

    //Initialize Firebase   
    const firebaseConfig = {
        apiKey: "AIzaSyCwAr-nJuJn0mJIscC1F86qZmRChFdi29Y",
        authDomain: "fir-2040d.firebaseapp.com",
        databaseURL: "https://fir-2040d.firebaseio.com",
        projectId: "fir-2040d",
        storageBucket: "fir-2040d.appspot.com",
        messagingSenderId: "136752573628",
        appId: "1:136752573628:web:51119533656e65204634b9",
        measurementId: "G-C9TGLBMYPD"
      };
    firebase.initializeApp(config);


    //Get elements
    const preObject = document.getElementById('object');
    const ulList = document.getElementById('list')

    //Create References
    const dbRefObject = firebase.database().ref().child('object');
    const dbRefList = debRefObject.child('hobbies')

    //Sync Object changes
    dbRefObject.on('value', snap=>{
        prepObject.innerText = JSON.stringify(snap.val(), null, 3)
    });

    //Sync list changes
    dbRefList.on('child_added', snap =>)



});