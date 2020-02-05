import { useState, useEffect } from "react";
import { Hotel } from "../types";

function handleResponse(response: any) {
  if (!response.ok) throw Error(response.statusText);

  return response.json();
}

function useHotelApi(hotelId: number) {
  const [isLoaded, setLoaded] = useState(false);
  const [error, setError] = useState<Error | null>(null);
  const [hotel, setHotel] = useState<Hotel | null>(null);

  useEffect(() => {
    fetch(
      `https://my-json-server.typicode.com/radek-shake/react-endpoints/hotels/${hotelId}`
    )
      .then(handleResponse)
      .then(
        data => {
          setLoaded(true);
          setHotel(data);
        },
        error => {
          setLoaded(true);
          setError(error);
        }
      );
  }, [hotelId]);

  return { isLoaded, error, hotel };
}

export default useHotelApi;
