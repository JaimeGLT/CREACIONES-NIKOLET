import { useEffect, useState } from "react"
import axiosApi from "../utils/axiosApi";

export const getHook = <T = any>(url: string) => {
    const [data, setData] = useState<T | null>(null);
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState<string | null>(null);

    const fetchData = async () => {
        setLoading(true);
        setError(null);

        try {
            const res = await axiosApi.get(url);
            setData(res.data);
        } catch (err: any) {
            setError(err.message || "Error al obtener datos");
        } finally {
            setLoading(false);
        }
    };

    useEffect(() => {
        fetchData();
    }, [url]);


    return { data, loading, error, refetch: fetchData };
};