import { useState, useEffect } from "react";
import { AutocompleteHotels } from "../types";

function handleResponse(response: any) {
  if (!response.ok) throw Error(response.statusText);

  return response.json();
}

function useAutocompleteApi() {
  const [isLoaded, setLoaded] = useState(false);
  const [error, setError] = useState<Error | null>(null);
  const [hotels, setHotels] = useState<AutocompleteHotels>([]);

  useEffect(() => {
    fetch(
      "http://my-json-server.typicode.com/radek-shake/react-endpoints/autocomplete"
    )
      .then(handleResponse)
      .then(
        data => {
          setLoaded(true);
          setHotels(data);
        },
        error => {
          setLoaded(true);
          setError(error);
        }
      );
  }, []);

  return { isLoaded, error, hotels };
}

export default useAutocompleteApi;
