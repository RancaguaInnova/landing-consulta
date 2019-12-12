import * as firebase from "firebase";
const config = {
  apiKey: process.env.REACT_APP_APIKEY,
  databaseURL: process.env.REACT_APP_DATABASEURL,
  projectId: process.env.REACT_APP_PROJECTID
};
firebase.initializeApp(config);
var db = firebase.database();
//const consultaCiudanaRef = databaseRef.collection("consulta-ciudana");
export default db;
