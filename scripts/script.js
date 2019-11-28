let firebaseConfig = {
	apiKey: "AIzaSyCTqbc8URrStqQJeGWvTFame1cXmaMulu8",
	authDomain: "extemp-topic-betting.firebaseapp.com",
	databaseURL: "https://extemp-topic-betting.firebaseio.com",
	projectId: "extemp-topic-betting",
	storageBucket: "extemp-topic-betting.appspot.com",
	messagingSenderId: "600630954915",
	appId: "1:600630954915:web:0ec602ef3b5042df76e816",
	measurementId: "G-1BCFX8F3G3"
};
firebase.initializeApp(firebaseConfig);
firebase.analytics();
let db = firebase.firestore();
let documents = []
db.collection("tournaments").get().then(function(querySnapshot) {
	querySnapshot.forEach(function(doc) {
		documents.push([doc.id, doc.data()]);
	});
});
