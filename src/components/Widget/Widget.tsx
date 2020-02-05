import React from "react";
import styles from "../Configurator/Configurator.module.css";
import { Hotel, Options } from "../../types";

type Props = {
  hotel: Hotel | null;
  options: Options;
};

const Widget = ({ hotel, options }: Props) => {
  const commonStyle = {
    border: "1px solid #000000",
    padding: "25px"
  };

  return (
    <div
      className={styles.widget}
      style={
        options.showBgImage
          ? {
              ...commonStyle,
              backgroundImage: `url(${hotel?.photo})`,
              backgroundSize: "cover"
            }
          : commonStyle
      }
    >
      {options.showName && (
        <h2 style={{ color: options.fontColor === "black" ? "#000" : "#fff" }}>
          {hotel?.name}
        </h2>
      )}
      {options.showAddress && (
        <h2 style={{ color: options.fontColor === "black" ? "#000" : "#fff" }}>
          {hotel?.address}
        </h2>
      )}
    </div>
  );
};

export default Widget;
