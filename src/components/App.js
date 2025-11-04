import React, { useEffect, useState } from "react";
import './../styles/App.css';

const App = () => {
  const [data, setData] = useState(null);
  const [error, setError] = useState(null);

  useEffect(() => {
    fetch("https://dummyjson.com/products")
      .then((res) => {
        if (!res.ok) {
          throw new Error(`HTTP error! Status: ${res.status}`);
        }
        return res.json();
      })
      .then((json) => setData(json))
      .catch((err) => setError(err.message));
  }, []);

  return (
    <div>
      {/* Do not remove the main div */}
      {error ? (
        <p>An error occurred: {error}</p>
      ) : data ? (
        <>
          <h1>Data Fetched from API</h1>
          <pre>{JSON.stringify(data, null, 2)}</pre>
        </>
      ) : (
        <p>Loading...</p>
      )}
    </div>
  );
};

export default App;

