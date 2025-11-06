import { useState } from "react";
import axiosApi from "../utils/axiosApi";

const useDelete = (url: string) => {
  const [data, setData] = useState<any>(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const deleteData = async () => {
    setLoading(true);
    setError(null);
    try {
      const res = await axiosApi.delete(url);
      
      setData(res?.data);
      return res?.data;
    } catch (err: any) {
      setError(err.message || "Error al enviar datos");
      throw err;
    } finally {
      setLoading(false);
    }
  };

  return { data, loading, error, deleteData };
};

export default useDelete;
