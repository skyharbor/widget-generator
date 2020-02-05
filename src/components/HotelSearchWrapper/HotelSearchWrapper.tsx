import React from "react";
import useAutocompleteApi from "../../hooks/useAutocompleteApi";
import HotelSearch from "../HotelSearch";

const HotelSearchWrapper = () => {
  const { hotels, error, isLoaded } = useAutocompleteApi();

  if (error) {
    return <div>Error: {error.message}</div>;
  } else if (!isLoaded) {
    return <div>Loading...</div>;
  } else {
    return <HotelSearch hotels={hotels} />;
  }
};

export default HotelSearchWrapper;
