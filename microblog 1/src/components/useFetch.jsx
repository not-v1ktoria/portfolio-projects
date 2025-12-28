import { useState, useEffect } from "react";

const useFetch = (url) => {
  const [data, setData] = useState(null);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState([]);

  useEffect(() => {
    const abortConst = new AbortController();
    setTimeout(() => {
      // simulate real fetch request
      const fetchBlogs = async () => {
        try {
          const res = await fetch(url, { signal: abortConst.signal });

          if (!res.ok) {
            throw Error("Could not fetch data");
          }

          const data = await res.json();
          setData(data);
          setIsLoading(false);
          setError(null);
        } catch (err) {
          if (err.name === "AbortError") {
          } else {
            setError(err.message);
            setIsLoading(false);
          }
        }
      };

      fetchBlogs();
    }, 1000);

    return () => abortConst.abort();
  }, [url]);

  return { data, isLoading, error };
};

export default useFetch;
