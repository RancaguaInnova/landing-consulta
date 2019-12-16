import React, { Fragment, useState, useEffect } from "react"
import Firebase from "components/FirebaseConfig"

const Varios = () => {
  const [idPlace, setIdPlace] = useState("100")
  const [Place, setPlace] = useState(null)
  const [Lugares, setLugares] = useState(null)

  useEffect(() => {
    newData()
  }, [])

  const newData = () => {
    var db = Firebase.firestore()
    db.collection("Resultados")
      .where("idPlace", "==", idPlace)
      .get()
      .then(function(querySnapshot) {
        querySnapshot.forEach(function(doc) {
          let data = doc.data()
          console.log("DATA:", data)
          setPlace(data)
        })
      })
      .catch(function(error) {
        console.log("Error getting documents: ", error)
      })
  }

  const cargaData = () => {
    Place.intitucional.map(function(item, index) {
      item.respuestas.push({ respuesta: "Nulo" })
      item.respuestas.push({ respuesta: "Blanco" })
      item.respuestas.map(function(res, indexRes) {
        if (res.nulos === 0) delete res.nulos
        if (res.blancos === 0) delete res.blancos
        res.porcentaje = 0
        res.numeroVotos = 0
        return res
      })
      item.lugares.map(function(res, indexRes) {
        res.respuestas.map(function(resLugares, rin) {
          resLugares.porcentaje = 0
          resLugares.numeroVotos = 0
          return res
        })

        return res
      })
      return item
    })

    Place.social.map(function(item, index) {
      item.respuestas.push({ respuesta: "Nulo" })
      item.respuestas.push({ respuesta: "Blanco" })
      item.respuestas.map(function(res, indexRes) {
        if (res.nulos === 0) delete res.nulos
        if (res.blancos === 0) delete res.blancos
        res.porcentaje = 0
        res.numeroVotos = 0
        return res
      })
      item.lugares.map(function(res, indexRes) {
        res.respuestas.map(function(resLugares, rin) {
          resLugares.porcentaje = 0
          resLugares.numeroVotos = 0
          return res
        })

        return res
      })
      return item
    })
    Place.comunal.map(function(item, index) {
      item.respuestas.push({ respuesta: "Nulo" })
      item.respuestas.push({ respuesta: "Blanco" })
      item.respuestas.map(function(res, indexRes) {
        if (res.nulos === 0) delete res.nulos
        if (res.blancos === 0) delete res.blancos
        res.porcentaje = 0
        res.numeroVotos = 0
        return res
      })
      item.lugares.map(function(res, indexRes) {
        res.respuestas.map(function(resLugares, rin) {
          resLugares.porcentaje = 0
          resLugares.numeroVotos = 0
          return res
        })

        return res
      })
      return item
    })
    console.log("Seteo limpio de resultados", Place)

    var db = Firebase.firestore()
    db.collection("Resultados")
      .add(Place)
      .then(function(docRef) {
        console.log("Document written with ID: ", docRef.id)
      })
      .catch(function(error) {
        console.error("Error adding document: ", error)
      })
  }

  return <div>{Place ? <button onClick={cargaData}>sdsd</button> : "Cargando..."}</div>
}
export default Varios
