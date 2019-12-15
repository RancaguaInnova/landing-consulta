import React, { Fragment, useState, useEffect } from "react";
import Firebase from "components/FirebaseConfig";

const Varios = () => {
  const [idPlace, setIdPlace] = useState("100");
  const [Place, setPlace] = useState(null);
  const [Lugares, setLugares] = useState(null);

  useEffect(() => {
    newData();
  }, []);

  const newData = () => {
    var db = Firebase.firestore();
    db.collection("ResultadoNew")
      .where("idPlace", "==", idPlace)
      .get()
      .then(function(querySnapshot) {
        querySnapshot.forEach(function(doc) {
          let data = doc.data();
          console.log(data);
          setPlace(data);
        });
      })
      .catch(function(error) {
        console.log("Error getting documents: ", error);
      });
  };

  const cargaData = () => {
    var db = Firebase.firestore();
    db.collection("Resultados")
      .add(Place)
      .then(function(docRef) {
        console.log("Document written with ID: ", docRef.id);
      })
      .catch(function(error) {
        console.error("Error adding document: ", error);
      });
  };

  return (
    <div>
      {Place ? <button onClick={cargaData}>sdsd</button> : "Cargando..."}
    </div>
  );
};
export default Varios;
