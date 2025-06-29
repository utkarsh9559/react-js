import { useEffect, useState } from "react";

function useCurrencyInfo(currency) {
  const [data, setData] = useState({});

  useEffect(() => {
    async function fetchCurrencyData() {
      try {
        const res = await fetch(
          `https://api.frankfurter.app/latest?from=${currency}`
        );
        const json = await res.json();
        setData(json.rates); // <- use the "rates" object
      } catch (error) {
        console.error("Failed to fetch currency info:", error);
        setData({});
      }
    }

    fetchCurrencyData();
  }, [currency]);

  return data;
}

export default useCurrencyInfo;

