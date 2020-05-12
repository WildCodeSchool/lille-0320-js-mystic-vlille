import React from "react";
import { Map, TileLayer, Marker, Popup } from "react-leaflet";
import {
  iconeEmpty,
  iconeGrey,
  iconeFull,
  iconeHalf,
  iconeQuarter,
  iconeTroisQuart,
} from "./styles/Icon";
import LocateControl from "./geo-local";
import "./Mappy.scss";

export default function Mappy({ stations, stationState }) {
  const changeIcon = (station) => {
    const percentage =
      station.fields.nbvelosdispo /
      (station.fields.nbvelosdispo + station.fields.nbplacesdispo);
    if (
      (station.fields.nbvelosdispo === 0 &&
        station.fields.nbplacesdispo === 0) ||
      station.fields.etatconnexion === "DISCONNECTED" ||
      station.fields.etat === "OUT_OF_SERVICE" ||
      station.fields.etat === "EN MAINTENANCE"
    ) {
      return iconeGrey;
    }

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
      {stations.map((station) => {
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
            {!stationState(station) && (
              <Popup
                className="popup"
                key={station.fields.libelle}
                position={[
                  station.fields.localisation[0],
                  station.fields.localisation[1],
                ]}
              >
                <h2 class="title_popup">{station.fields.nom}</h2>
                <div class="wrapper">
                  <div class="info_velos">
                    <img src="./velo.png" alt="velo" />
                    <p>{station.fields.nbvelosdispo} vélos</p>
                  </div>
                  <div class="info_velos">
                    <img src="./parking.png" alt="parking à vélos" />
                    <p>{station.fields.nbplacesdispo} places</p>
                  </div>
                </div>
                <div class="cb_popup">
                  {station.fields.type === "AVEC TPE" ? (
                    <>
                      <img
                        src="./card_ok.png"
                        alt="cb acceptée"
                        class="img_cb"
                      />
                      <p>CB disponible</p>
                    </>
                  ) : (
                    <>
                      <img
                        src="./card_refusee.png"
                        alt="cb refusée"
                        class="img_cb"
                      />
                      <p>CB indisponible</p>
                    </>
                  )}
                </div>
              </Popup>
            )}
          </Marker>
        );
      })}
      <LocateControl options={locateOptions} />
    </Map>
  );
}
