import { useState, useEffect } from "react";

const useFetch = (url) => {
  const [data, setData] = useState(null);
  const [isPending, setIsPending] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    //   This Is just to show the loading until the fetch call happens. It is not reccomended.
    setTimeout(() => {
      fetch(url)
        .then((response) => {
          // This error is to handle the wrong endpoints
          if (!response.ok) {
            throw Error("Could not fetch the data from that source");
          }
          return response.json();
        })

        .then((data) => {
          setData(data);
          setIsPending(false);
          setError(null);
        })
        // This is for network error or server is off
        .catch((err) => {
          setIsPending(false);
          setError(err.message);
        }, 2000);
    });
  }, [url]);

  return { data, isPending, error };
};

export default useFetch;
