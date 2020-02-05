import React from "react";
import styles from "./App.module.css";
import HotelSearchWrapper from "../HotelSearchWrapper";

const App = () => (
  <div className={styles.container}>
    <h1>Hotel widget generator</h1>
    <HotelSearchWrapper />
  </div>
);

export default App;
