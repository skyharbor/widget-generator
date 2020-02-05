import React, { useState } from "react";
import styles from "./HotelSearch.module.css";
import ConfiguratorWrapper from "../ConfiguratorWrapper";
import { AutocompleteHotels, AutocompleteHotel } from "../../types";

type Props = {
  hotels: AutocompleteHotels;
};

const HotelSearch = ({ hotels }: Props) => {
  const [filteredHotels, setFilteredHotels] = useState<AutocompleteHotels>([]);
  const [value, setValue] = useState("");
  const [hotel, setHotel] = useState<AutocompleteHotel | null>(null);
  const [shouldRenderConfigurator, setShouldRenderConfigurator] = useState(
    false
  );
  const [shouldRenderHint, setShouldRenderHint] = useState(false);

  const handleChange: React.ChangeEventHandler<HTMLInputElement> = e => {
    const { value } = e.target;
    const filter = value.toUpperCase();

    setValue(value);
    setHotel(null);

    if (filter) {
      const filteredHotels = hotels.filter(
        hotel => !hotel.name.toUpperCase().search(filter)
      );

      setFilteredHotels(filteredHotels);
    } else {
      setFilteredHotels([]);
    }
  };

  const handleClick = (id: number) => {
    const hotel = filteredHotels.find(hotel => hotel.id === id);

    if (hotel) {
      setHotel(hotel);
      setValue(hotel.name);
      setShouldRenderHint(false);
    }
  };

  const handleClickNext = () => {
    if (hotel) {
      setShouldRenderConfigurator(true);
    } else {
      setShouldRenderHint(true);
    }
  };

  if (shouldRenderConfigurator && hotel)
    return <ConfiguratorWrapper hotelId={hotel.id} />;

  return (
    <div>
      <input
        type="text"
        placeholder="Hotel name (start typing)"
        onChange={handleChange}
        value={value}
      />
      <button onClick={handleClickNext}>Next</button>
      {shouldRenderHint && <div>Choose hotel from the list.</div>}
      {!!filteredHotels.length && (
        <div className={styles.list}>
          {filteredHotels.map(({ name, id }) => (
            <div
              className={styles.item}
              key={name}
              onClick={() => handleClick(id)}
            >
              {name}
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default HotelSearch;
