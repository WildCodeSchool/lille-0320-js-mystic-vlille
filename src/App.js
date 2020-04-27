import React from "react";
import Mappy from "./components/Mappy";
import axios from "axios";
import BottomAppBar from "./components/BottomAppBar";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import List from "./components/List";
import { useState, useEffect } from "react";
import NavBar from "./components/NavBar";

export default function App() {
  const [stations, setStations] = useState([]);

  useEffect(() => {
    getVlilleLocalisation();
  }, []);

  const getVlilleLocalisation = () => {
    axios
      .get(
        "https://opendata.lillemetropole.fr/api/records/1.0/search/?dataset=vlille-realtime&rows=244&facet=libelle&facet=nom&facet=commune&facet=etat&facet=type&facet=etatconnexion"
      )
      .then((response) => response.data)
      .then((data) => {
        setStations(data.records);
      });
    setTimeout(() => {
      getVlilleLocalisation();
    }, 2 * 1000 * 60);
  };

  return (
    <Router>
      <NavBar />
      <Switch>
        <Route exact path="/">
          <Mappy stations={stations} />
        </Route>
        <Route path="/list">
          <List stations={stations} />
        </Route>
      </Switch>

      <BottomAppBar />
    </Router>
  );
}
