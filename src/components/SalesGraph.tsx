import { LineChart } from '@mui/x-charts/LineChart';
import { Box, Typography } from "@mui/material";

type Sales = {
    weekEnding: string;
    retailSales: number;
    wholesaleSales: number;
    unitsSold: number;
    retailerMargin: number;
}

type SalesGraphProps = {
    sales?: Sales[]
}

const SalesGraph = ({ sales }: SalesGraphProps): JSX.Element => {

    const customize = {
        legend: { hidden: true },
        disableHighlight: true,
        disableLineItemHighlight: true,
    }

    return (
        <Box sx={{
            height: '50%',
            backgroundColor: 'secondary.light',
            p: 2,
            width: '90%'
        }}>
            <Typography variant="subtitle1">Retail Sales</Typography>
            <LineChart
                xAxis={[
                    {
                        dataKey: 'weekEnding',
                        scaleType: 'utc',
                        data: sales?.map((sale) => new Date((sale.weekEnding))),
                    }
                ]}
                yAxis={
                    [
                        { min: -500000, max: 1500000 }
                    ]
                }
                leftAxis={null}
                series={
                    [
                        {
                            data: sales?.map((sale) => sale.retailSales), showMark: false,
                        },
                        {
                            data: sales?.map((sale) => sale.wholesaleSales), showMark: false,
                        },
                    ]
                }
                dataset={sales}
                {...customize}
            />
        </Box>
    )
}

export default SalesGraph