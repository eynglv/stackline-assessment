import { useState, useEffect, useMemo } from "react"
import { Box } from "@mui/material"

import ItemOverview from './ItemOverview'


const HomePage = (): JSX.Element => {
    const [data, setData] = useState(null);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState<Error | null>(null);

    useEffect(() => {
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



    if (loading) return <div>Loading...</div>;
    if (error) return <div>Error: {error.message}</div>;


    return (
        <Box sx={{ width: '100%', height: '100%', p: 5 }}>
            <ItemOverview title={title} subtitle={subtitle} image={image} tags={tags} />
        </Box>
    )
}

export default HomePage