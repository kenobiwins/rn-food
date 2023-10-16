import React, { useEffect, useState } from "react";
import yelp from "../api/yelp";

export default function useResults() {
  const [results, setResults] = useState([]);
  const [errorMessage, setErrorMessage] = useState("");

  const searchApi = async (searchInitial) => {
    try {
      const response = await yelp.get("/search", {
        params: {
          limit: 50,
          term: searchInitial,
          location: "san jose",
        },
      });
      setResults(response.data.businesses);
    } catch (error) {
      console.log("error ==>", error);
      setErrorMessage("something went wrong");
    }
  };

  useEffect(() => {
    searchApi("pasta");
  }, []);

  return { results, errorMessage, searchApi };
}
