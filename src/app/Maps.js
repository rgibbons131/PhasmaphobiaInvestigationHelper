//import styles from "./evidenceCheckbox.module.css";
"use client";
import { useState } from "react";
import Image from "next/image";
import styles from "./maps.module.css";
import tanglewood from "./images/Tanglewood.webp";

export default function Maps({ display }) {
  // console.log("maps");
  // console.log(display);
  const [map, setMap] = useState("none");
  return (
    <section className={display ? styles.maps : styles.hidden}>
      <ul className={styles.selector}>
        <li
          onClick={() => {
            setMap("tanglewood");
          }}
        >
          6 TangleWood
        </li>
        <li
          onClick={() => {
            setMap("ridgeview");
          }}
        >
          10 Ridgeview
        </li>
        <li
          onClick={() => {
            setMap("willow");
          }}
        >
          13 Willow Street
        </li>
        <li
          onClick={() => {
            setMap("edgefield");
          }}
        >
          42 Edgefield
        </li>
        <li
          onClick={() => {
            setMap("bleasdale");
          }}
        >
          Bleasdale Farmhouse
        </li>
        <li
          onClick={() => {
            setMap("highschool");
          }}
        >
          Brownstone Highschool
        </li>
        <li
          onClick={() => {
            setMap("diner");
          }}
        >
          Nell's Diner
        </li>
        <li
          onClick={() => {
            setMap("grafton");
          }}
        >
          Grafton Farmhouse
        </li>
        <li
          onClick={() => {
            setMap("maple");
          }}
        >
          Maple Lodge Campwood
        </li>
        <li
          onClick={() => {
            setMap("lighthouse");
          }}
        >
          Point Hope
        </li>
        <li
          onClick={() => {
            setMap("prison");
          }}
        >
          Prison
        </li>
        <li
          onClick={() => {
            setMap("sunnyMeadows");
          }}
        >
          Sunny Meadows
        </li>
        <li
          onClick={() => {
            setMap("woodwind");
          }}
        >
          Camp Woodwind
        </li>
      </ul>
      <Image
      alt="Tanglewood Map"
        width={1208}
        height={800}
        className={map == "tanglewood" ? styles.image : styles.hidden}
        src={require("./images/Tanglewood.webp")}
      />
      <Image
          alt="Nell's Diner Map"
        width={925}
        height={1199}
        className={map == "diner" ? styles.image : styles.hidden}
        src={require("./images/Rooms_Nells_Diner.webp")}
      />
      <Image
        alt="Ridgeview Map"
        width={1206}
        height={1395}
        className={map == "ridgeview" ? styles.image : styles.hidden}
        src={require("./images/10_Ridgeview_Court_-_Floorplan.webp")}
      />
      <Image
        alt="Willow Street Map"
        width={1277}
        height={859}
        className={map == "willow" ? styles.image : styles.hidden}
        src={require("./images/13_Willow_Street_-_Floorplan.webp")}
      />
      <Image
        alt="Bleasdale Map"
        width={1382}
        height={1342}
        className={map == "bleasdale" ? styles.image : styles.hidden}
        src={require("./images/Bleasdale_Farmhouse_-_Floorplan.webp")}
      />
      <Image
        alt="Brownstone Highschool Map"
        width={2656}
        height={3344}
        className={map == "highschool" ? styles.bigImage : styles.hidden}
        src={require("./images/Brownstone_High_School_-_Floorplan.webp")}
      />
      <Image
        alt="Grafton Map"
        width={1662}
        height={874}
        className={map == "grafton" ? styles.image : styles.hidden}
        src={require("./images/Rooms_Grafton_updated.webp")}
      />
      <Image
        alt="Maple Lodge Map"
        width={1879}
        height={1430}
        className={map == "maple" ? styles.image : styles.hidden}
        src={require("./images/Maple_Lodge_Campsite_-_Floorplan.webp")}
      />
      <Image
        alt="Point Hope Map"
        width={1832}
        height={1899}
        className={map == "lighthouse" ? styles.bigImage : styles.hidden}
        src={require("./images/Point_Hope_-_Floorplan.webp")}
      />
      <Image
        alt="Sunny Meadows Map"
        width={3720}
        height={2556}
        className={map == "sunnyMeadows" ? styles.bigImage : styles.hidden}
        src={require("./images/Sunny_Meadows_Mental_Institution_-_Full_Map_Floorplan.webp")}
      />
      <Image
        alt="Camp Woodwind Map"
        width={1082}
        height={806}
        className={map == "woodwind" ? styles.image : styles.hidden}
        src={require("./images/Woodwind_-_Floorplan.webp")}
      />
      <Image
        alt="Prison Map"
        width={3994}
        height={2039}
        className={map == "prison" ? styles.bigImage : styles.hidden}
        src={require("./images/Prison_-_Floorplan.webp")}
      />
      <Image
        alt="Edgefield Map"
        width={1167}
        height={1391}
        className={map == "edgefield" ? styles.image : styles.hidden}
        src={require("./images/42_Edgefield_Road_-_Floorplan.webp")}
      />
    </section>
  );
}
