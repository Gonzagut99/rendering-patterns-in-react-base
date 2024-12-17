import { useEffect, useState } from "react";
import { DataItem, DataPresenter } from "./DataPresenter";

export const DataContainer = () => {
  const [data, setData] = useState<DataItem[]>([]);
  const [error, setError] = useState<string|null>(null);
  const [loading, setLoading] = useState<boolean>(true);
  useEffect(() => {
    const fetchData = async () => {
      try{
        const response = await fetch("/data/data.json");
        if (!response.ok) {
          throw new Error("Failed to fetch data");
        }
        const data = await response.json();
        setData(data);
      }catch (error) {
        console.log("Failed to fetch data");
        setError(`Failed to fetch data: ${error}`);
      } finally {
        console.log("Data fetch completed");
        setLoading(false);
      }
    }
    fetchData();
  }
  , []);
  return (
    <div>
      {loading && <p>Loading...</p>}
      {error && <p>{error}</p>}
      <DataPresenter data={data}></DataPresenter>
    </div>
  );
};
