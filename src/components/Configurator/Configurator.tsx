import React, { useState } from "react";
import ReactDOMServer from "react-dom/server";
import Widget from "../Widget";
import { Hotel, Options } from "../../types";
import styles from "./Configurator.module.css";

type Props = {
  hotel: Hotel | null;
};

const Configurator = ({ hotel }: Props) => {
  const [options, setOptions] = useState<Options>({
    showName: true,
    showBgImage: false,
    showAddress: true,
    fontColor: "black"
  });

  const handleChange: React.ChangeEventHandler<HTMLInputElement> = e => {
    const { target } = e;
    const value = target.type === "checkbox" ? target.checked : target.value;
    const name = target.name;

    setOptions({
      ...options,
      [name]: value
    });
  };

  const handleCopyHtml = () => {
    const tree = ReactDOMServer.renderToString(
      <Widget options={options} hotel={hotel} />
    );

    navigator.clipboard.writeText(tree).then(
      function() {
        console.log("Copying to clipboard was successful!");
      },
      function(err) {
        console.error("Could not copy text: ", err);
      }
    );
  };

  return (
    <div className={styles.container}>
      <div className={styles.options}>
        <div className={styles.section}>
          <div className={styles.title}>
            <span>Name</span>
            <span>
              <input
                type="checkbox"
                name="showName"
                id="showName"
                checked={options.showName}
                onChange={handleChange}
              />
              <label htmlFor="showName">Enabled</label>
            </span>
          </div>
          <div className={styles.inputs}>
            <div className={styles.inputContainer}>
              <input
                type="radio"
                id="blackFont"
                name="fontColor"
                value="black"
                checked={options.fontColor === "black"}
                onChange={handleChange}
              />
              <label htmlFor="blackFont">Black font</label>
            </div>
            <div className={styles.inputContainer}>
              <input
                type="radio"
                id="whiteFont"
                name="fontColor"
                value="white"
                checked={options.fontColor === "white"}
                onChange={handleChange}
              />
              <label htmlFor="whiteFont">White font</label>
            </div>
          </div>
        </div>
        <div className={styles.section}>
          <div className={styles.title}>
            <span>Background image</span>
            <span>
              <input
                type="checkbox"
                name="showBgImage"
                id="showBgImage"
                checked={options.showBgImage}
                onChange={handleChange}
              />
              <label htmlFor="showBgImage">Enabled</label>
            </span>
          </div>
        </div>
        <div className={styles.section}>
          <div className={styles.title}>
            <span>Address</span>
            <span>
              <input
                type="checkbox"
                name="showAddress"
                id="showAddress"
                checked={options.showAddress}
                onChange={handleChange}
              />
              <label htmlFor="showAddress">Enabled</label>
            </span>
          </div>
          <div className={styles.inputs}>
            <div className={styles.inputContainer}>
              <input
                type="radio"
                id="city"
                name="format"
                value="city"
                onChange={handleChange}
              />
              <label htmlFor="city">City</label>
            </div>
            <div className={styles.inputContainer}>
              <input
                type="radio"
                id="formatted"
                name="format"
                value="formatted"
                onChange={handleChange}
              />
              <label htmlFor="formatted">Formatted</label>
            </div>
          </div>
        </div>
      </div>
      <Widget options={options} hotel={hotel} />
      <div className={styles.htmlButtonContainer}>
        <button onClick={handleCopyHtml}>Copy HTML code</button>
      </div>
    </div>
  );
};

export default Configurator;
