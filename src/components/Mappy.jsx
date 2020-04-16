import React from "react";
import "./Mappy.scss";
import { Map, TileLayer, Marker, Popup } from "react-leaflet";
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
        "https://opendata.lillemetropole.fr/api/records/1.0/search/?dataset=vlille-realtime&rows=244&facet=libelle&facet=nom&facet=commune&facet=etat&facet=type&facet=etatconnexion"
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
          return (
            <Marker
              className="marker"
              key={station.fields.libelle}
              position={[
                station.fields.localisation[0],
                station.fields.localisation[1],
              ]}
            >
              <Popup
                className="popup"
                key={station.fields.libelle}
                position={[
                  station.fields.localisation[0],
                  station.fields.localisation[1],
                ]}
              >
                <h2>Station: {station.fields.nom}</h2>
                <p>Nombres vélos: {station.fields.nbvelosdispo}</p>
                <p>Nombres places: {station.fields.nbplacesdispo}</p>
              </Popup>
            </Marker>
          );
        })}
      </Map>
    );
  }
}
