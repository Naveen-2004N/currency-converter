import { useEffect, useState } from "react"
function useCurrencyInfo(currency) {
    const [data, setData] = useState({});
    useEffect(() => {
        // Using the latest version of the currency API for better reliability
        fetch(`https://cdn.jsdelivr.net/npm/@fawazahmed0/currency-api@latest/v1/currencies/${currency}.json`)
            .then((res) => res.json())
            .then((res) => setData(res[currency]))
            .catch((error) => console.error("Failed to fetch currency data:", error));
    }, [currency]);
    return data;
}
export default useCurrencyInfo