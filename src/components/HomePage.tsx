import { useState, useEffect, useMemo } from "react";
import { Box } from "@mui/material";

import ItemOverview from './ItemOverview';
import SalesGraph from './SalesGraph';
import SalesTable from "./SalesTable";


const HomePage = (): JSX.Element => {
    const [data, setData] = useState(null);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState<Error | null>(null);

    useEffect(() => {
        // stubbed API call
        const fetchData = async () => {
            try {
                const response = await fetch('/data.json');
                if (!response.ok) {
                    throw new Error('Network response was not ok');
                }
                const result = await response.json();
                setData(result[0]);
            }
            catch (error) {
                setError(error as Error);
            } finally {
                setLoading(false);
            }
        };

        fetchData();
    }, []);

    const title = useMemo(() => {
        if (data !== null) {
            return (
                data['title']
            );
        }
    }, [data]);

    const subtitle = useMemo(() => {
        if (data !== null) {
            return (
                data['subtitle']
            );
        }
    }, [data]);

    const image = useMemo(() => {
        if (data !== null) {
            return (
                data['image']
            );
        }
    }, [data]);

    const tags = useMemo(() => {
        if (data !== null) {
            return (
                data['tags']
            );
        }
    }, [data]);


    const sales = useMemo(() => {
        if (data !== null) {
            return (
                data['sales']
            );
        }
    }, [data]);



    if (loading) return <div>Loading...</div>;
    if (error) return <div>Error: {error.message}</div>;


    return (
        <Box sx={{ width: '100%', height: '100%', p: 5 }}>
            <Box sx={{ width: '100%', height: '100%', display: 'flex' }}>
                <ItemOverview title={title} subtitle={subtitle} image={image} tags={tags} />
                <Box sx={{ ml: 5, display: 'flex', flexDirection: 'column', width: '100%' }}>
                    <SalesGraph sales={sales} />
                    <SalesTable sales={sales} />
                </Box>
            </Box>
        </Box>
    )
}

export default HomePage