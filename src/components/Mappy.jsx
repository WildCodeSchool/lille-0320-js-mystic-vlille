import React from "react";
import "./Mappy.scss";
import { Map, TileLayer, Marker, Popup } from "react-leaflet";
import * as data from "./data.json";
import axios from "axios";

export default class Mappy extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      stations: [],
    };
  }

  componentDidMount() {
    this.getVlilleLocalisation();
  }

  getVlilleLocalisation = () => {
    axios
      .get(
        "https://opendata.lillemetropole.fr/api/records/1.0/search/?dataset=vlille-realtime&facet=libelle&facet=nom&facet=commune&facet=etat&facet=type&facet=etatconnexion"
      )
      .then((response) => response.data)
      .then((data) => {
        this.setState({ stations: data.records });
      });
  };

  render() {
    return (
      <Map center={[50.62925, 3.057256]} zoom={16}>
        <TileLayer
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
          attribution='&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
        />
        {this.state.stations.map((station) => {
          console.log(station);
          return (
            <Marker
              key={station.fields.libelle}
              position={[
                station.fields.localisation[0],
                station.fields.localisation[1],
              ]}
            />
          );
        })}
      </Map>
    );
  }
}
