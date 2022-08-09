import { useEffect, useState } from "react";
import useSWR from "swr";

const fetcher = (url) => fetch(url).then((res) => res.json());

function LastSalesPage() {
  const [sales, setSales] = useState();
  // const [isLoading, setIsLoading] = useState(false);

  const { data, error } = useSWR(
    "https://c3n7-games.firebaseio.com/sales.json",
    fetcher
  );

  useEffect(() => {
    if (data) {
      const transformedSales = [];

      for (const key in data) {
        transformedSales.push({
          id: key,
          username: data[key].username,
          volume: data[key].volume,
        });
      }

      setSales(transformedSales);
    }
  }, [data]);

  /*useEffect(() => {
    setIsLoading(true);
    fetch("https://c3n7-games.firebaseio.com/sales.json")
      .then((response) => response.json())
      .then((data) => {
        const transformedSales = [];

        for (const key in data) {
          transformedSales.push({
            id: key,
            username: data[key].username,
            volume: data[key].volume,
          });
        }

        setSales(transformedSales);
        setIsLoading(false);
      });
  }, []);*/

  if (error) {
    return <p>Failed to load</p>;
  }

  if (!data) {
    return <p>Loading...</p>;
  }

  if (!sales) {
    return <p>No Sales...</p>;
  }

  return (
    <ul>
      {sales.map((sale) => (
        <li key={sale.id}>
          {sale.username} - ${sale.volume}
        </li>
      ))}
    </ul>
  );
}

export default LastSalesPage;
