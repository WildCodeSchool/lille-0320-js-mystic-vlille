import React from "react";
import "./List.scss";

export default function List({ stations }) {
  console.log(stations);
  return (
    <div>
      {stations.map((station) => {
        return (
          <div className="mesListes">
            <h2 key={station.fields.libelle}>{station.fields.nom}</h2>

            <p>Nombres vélos: {station.fields.nbvelosdispo}</p>
            <p>Nombres places: {station.fields.nbplacesdispo}</p>
          </div>
        );
      })}
    </div>
  );
}
