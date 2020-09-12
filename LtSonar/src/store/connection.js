
export default class Connection
{
    constructor()
    {
        firebaseConfig = {
            apiKey: "AIzaSyCc7DBrfTAJB1lvszVTTYiVVOf6aMjFP74",
            authDomain: "pg18nicolas-lt-sonar.firebaseapp.com",
            databaseURL: "https://pg18nicolas-lt-sonar.firebaseio.com",
            projectId: "pg18nicolas-lt-sonar",
            storageBucket: "pg18nicolas-lt-sonar.appspot.com",
            messagingSenderId: "1097057882470",
            appId: "1:1097057882470:web:e92fd94c4e02847b84f8a7",
            measurementId: "G-T4K0X8D79Y"
        };

        firebase.initializeApp(firebaseConfig);

        this.dataStore = firebase.firestore();

        //firebase.analytics();        
    }
}