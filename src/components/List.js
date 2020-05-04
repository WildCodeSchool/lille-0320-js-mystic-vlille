import React from "react";
import "./List.scss";

export default function List({ stations, stationState }) {
  const departLat = 50.630943;
  const departLong = 3.060299;

  const distance = (station) => {
    const result = Math.sqrt(
      (station.fields.localisation[0] - departLat) *
        111 *
        ((station.fields.localisation[0] - departLat) * 111) +
        (station.fields.localisation[1] - departLong) *
          70 *
          ((station.fields.localisation[1] - departLong) * 70)
    );
    return result.toFixed(3);
  };
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
      {stations.map((station) => {
        return (
          <div>
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
                  <p>{distance(station)} km</p>
                </div>
                <div className="mesListes">
                  <p>Nombres vélos: {station.fields.nbvelosdispo}</p>
                  <p>Nombres places: {station.fields.nbplacesdispo}</p>
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
