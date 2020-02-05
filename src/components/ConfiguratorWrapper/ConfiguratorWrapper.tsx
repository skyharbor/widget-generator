import React from "react";
import useHotelApi from "../../hooks/useHotelApi";
import Configurator from "../Configurator";

type Props = {
  hotelId: number;
};

const ConfiguratorWrapper = ({ hotelId }: Props) => {
  const { hotel, error, isLoaded } = useHotelApi(hotelId);

  if (error) {
    return <div>Error: {error.message}</div>;
  } else if (!isLoaded) {
    return <div>Loading...</div>;
  } else {
    return <Configurator hotel={hotel} />;
  }
};

export default ConfiguratorWrapper;
