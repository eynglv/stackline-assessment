import { useState, useEffect, useMemo } from "react";
import { Box } from "@mui/material";

import ItemOverview from './ItemOverview';
import SalesGraph from './SalesGraph';
import SalesTable from "./SalesTable";
import jsonData from '../api/data.json'


const HomePage = (): JSX.Element => {
    const [data, setData] = useState<any | null>(null);

    useEffect(() => {
        // stubbed API call
        const fetchData = () => {
            setData(jsonData[0])
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