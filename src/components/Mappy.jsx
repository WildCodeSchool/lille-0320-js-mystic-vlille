import React from "react";
import "./Mappy.scss";
import { Map, TileLayer, Marker, Popup } from "react-leaflet";
import { Icon } from "leaflet";
import axios from "axios";
import LocateControl from "./geo-local";

const iconeFull = new Icon({
  iconUrl: "/full.png",
  iconSize: [35, 49.58],
});

const iconeHalf = new Icon({
  iconUrl: "/half.png",
  iconSize: [35, 49.58],
});

const iconeQuarter = new Icon({
  iconUrl: "/quater.png",
  iconSize: [35, 49.58],
});

const iconeTroisQuart = new Icon({
  iconUrl: "/trois.png",
  iconSize: [35, 49.58],
});

const iconeEmpty = new Icon({
  iconUrl: "/empty.png",
  iconSize: [35, 49.58],
});

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
    const changeIcon = (station) => {
      const percentage =
        station.fields.nbvelosdispo /
        (station.fields.nbvelosdispo + station.fields.nbplacesdispo);
      if (percentage === 0) {
        return iconeEmpty;
      }
      if (percentage > 0 && percentage <= 0.25) {
        return iconeQuarter;
      }
      if (percentage > 0.25 && percentage <= 0.5) {
        return iconeHalf;
      }
      if (percentage > 0.5 && percentage <= 0.75) {
        return iconeTroisQuart;
      } else {
        return iconeFull;
      }
    };
    const locateOptions = {
      // for geo-locater//
      position: "topleft", // for geo-locater//
      strings: {
        title: "your location", // for geo-locater//
      },

      onActivate: () => {}, // for geo-locater//
    };

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
              icon={changeIcon(station)}
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
        <LocateControl options={locateOptions} />
      </Map>
    );
  }
}
