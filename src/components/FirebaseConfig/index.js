import * as firebase from "firebase";
const config = {
  apiKey: "AIzaSyA3ey_GjOiiONwDERnMzpdflP0jcpkL4LM",
  databaseURL: "https://consulta-ciudana.firebaseio.com",
  projectId: "consulta-ciudana"
};
firebase.initializeApp(config);
var db = firebase.database();
//const consultaCiudanaRef = databaseRef.collection("consulta-ciudana");
export default db;
