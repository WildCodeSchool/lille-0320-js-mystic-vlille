import React from "react";
import "./List.scss";
import Cb from "../icons/Cb";

export default function List({ stations, stationState }) {
  const changeIcon = (station) => {
    const percentage =
      station.fields.nbvelosdispo /
      (station.fields.nbvelosdispo + station.fields.nbplacesdispo);
    if (percentage === 0) {
      return "/empty.png";
    }
    if (percentage > 0 && percentage <= 0.25) {
      return "/quater.png";
    }
    if (percentage > 0.25 && percentage <= 0.5) {
      return "/half.png";
    }
    if (percentage > 0.5 && percentage <= 0.75) {
      return "/trois.png";
    } else {
      return "/full.png";
    }
  };

  return (
    <div>
      {stations
        .sort((st1, st2) => {
          return st1.distance - st2.distance;
        })
        .map((station) => {
          return (
            <div className="contain">
              {!stationState(station) && (
                <div className="list">
                  <div className="image">
                    <img alt="jauge" src={changeIcon(station)} />
                  </div>
                  <div className="title">
                    <h2
                      key={station.fields.libelle}
                      position={[
                        station.fields.localisation[0],
                        station.fields.localisation[1],
                      ]}
                    >
                      {station.fields.nom}
                    </h2>
                    <p>{station.distance} km</p>
                  </div>
                  <div className="mesListes">
                    <div>
                      <p>Nombres vélos: {station.fields.nbvelosdispo}</p>
                      <p>Nombres places: {station.fields.nbplacesdispo}</p>
                    </div>
                    <p>{station.fields.type === "AVEC TPE" && <Cb />}</p>
                  </div>
                </div>
              )}{" "}
            </div>
          );
        })}
      )}
    </div>
  );
}
