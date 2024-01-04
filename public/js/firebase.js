let firebaseConfig = {
    apiKey: "AIzaSyDGwdb2YBMt3waE5aIZBNa1wqhumHrJzVs",
    authDomain: "bloging-website-9230a.firebaseapp.com",
    projectId: "bloging-website-9230a",
    storageBucket: "bloging-website-9230a.appspot.com",
    messagingSenderId: "237745441700",
    appId: "1:237745441700:web:a2537cb7eee0d6a5f30f31",
    measurementId: "G-NXKZXNPM3Q"
  };


  const app = initializeApp(firebaseConfig);
  const analytics = getAnalytics(app);

  let db = firebase.firestore();