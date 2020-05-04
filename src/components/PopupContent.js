import React from "react";
import Popup from "reactjs-popup";

export default ({ close }) => (
  <div className="modal">
    <a className="close" onClick={close}>
      &times;
    </a>
    <h2> Welcome !! </h2>
    <div>
      {" "}
      Hi traveler! Here is my home sweet home and secondarily my spaceship. As
      my guest, you can choose our next destination. But only on Earth. Sorry
      little human, you can't go anywhere but your blue planet. (otherwise you
      die)
      <br />
      With these two buttons (on bottom), you can pick a destination. You can
      choose a country or just let the random makes you a surprise :)
    </div>
    <div className="actions">
      <Popup
        trigger={<button className="button"> Trigger </button>}
        position="top center"
        closeOnDocumentClick
      >
        <span>
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Beatae magni
          omnis delectus nemo, maxime molestiae dolorem numquam mollitia,
          voluptate ea, accusamus excepturi deleniti ratione sapiente!
          Laudantium, aperiam doloribus. Odit, aut.
        </span>
      </Popup>
    </div>
  </div>
);
