import React from "react";
import "./List.scss";

export default function List({ stations, stationState }) {
  console.log(stations);
  return (
    <div>
      {stations.map((station) => {
        return (
          <div>
            {!stationState(station) && (
              <div className="list">
                <h2 key={station.fields.libelle}>{station.fields.nom}</h2>
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
