import { Icon } from "leaflet";

const iconeFull = new Icon({
  iconUrl: "/full.png",
  iconSize: [35, 49.58],
});

const iconeHalf = new Icon({
  iconUrl: "/half.png",
  iconSize: [35, 49.58],
});

const iconeQuarter = new Icon({
  iconUrl: "/quarter.png",
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

const iconeGrey = new Icon({
  iconUrl: "/grey.png",
  iconSize: [35, 49.58],
});

export {
  iconeEmpty,
  iconeGrey,
  iconeFull,
  iconeHalf,
  iconeQuarter,
  iconeTroisQuart,
};
