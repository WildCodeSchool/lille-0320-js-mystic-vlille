import React from "react";
import "./List.scss";

export default function List({ stations, stationState }) {
  const changeDistance = (station) => {
    let article = "km";
    if (station.distance < 1) {
      station.distance = Math.round(station.distance * 1000);
      article = "m";
    }
    station.distance = `${station.distance}  ${article}`;
    return station.distance;
  };
  return (
    <div>
      {stations
        .sort((st1, st2) => {
          return st1.distance - st2.distance;
        })
        .map((station) => {
          return (
            <div key={station.fields.libelle} className="contain">
              {!stationState(station) && (
                <div className="list">
                  <div className="velo-park">
                    <div>
                      <img src="./velo.png" alt="velo" />
                      <p>{station.fields.nbvelosdispo} vélos</p>
                    </div>
                    <div>
                      <img src="./parking.png" alt="parking à vélos" />
                      <p>{station.fields.nbplacesdispo} places</p>
                    </div>
                  </div>
                  <div className="title">
                    <h2
                      position={[
                        station.fields.localisation[0],
                        station.fields.localisation[1],
                      ]}
                    >
                      {station.fields.nom}
                    </h2>
                    <p>{changeDistance(station)}</p>
                  </div>
                  <div className="mesListes">
                    {station.fields.type === "AVEC TPE" ? (
                      <img src="./card_ok.png" alt="cb acceptée" />
                    ) : (
                      <img src="card_refusee.png" alt="cb refusée" />
                    )}
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
