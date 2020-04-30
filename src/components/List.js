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

  console.log(stations);
  return (
    <div>
      {stations.map((station) => {
        return (
          <div>
            {!stationState(station) && (
              <div className="list">
                <h2
                  key={station.fields.libelle}
                  position={[
                    station.fields.localisation[0],
                    station.fields.localisation[1],
                  ]}
                >
                  {station.fields.nom}
                </h2>
                <div className="mesListes">
                  <p>Nombres vélos: {station.fields.nbvelosdispo}</p>
                  <p>{distance(station)} km</p>
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
