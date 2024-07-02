import { Box, Table, TableHead, TableRow, TableCell, TableBody } from '@mui/material'

type Sales = {
    weekEnding: string;
    retailSales: number;
    wholesaleSales: number;
    unitsSold: number;
    retailerMargin: number;
}

type SalesTableProps = {
    sales?: Sales[]
}


const SalesTable = ({ sales }: SalesTableProps): JSX.Element | null => {
    if (!sales) return null;

    const formattedNumber = (number: number) => (new Intl.NumberFormat('en-US', {
        style: 'currency',
        currency: 'USD',
        minimumFractionDigits: 0
    }).format(number));

    return (<Box sx={{
        backgroundColor: 'secondary.light',
        p: 2,
        height: '40%',
        mt: 4,
        width: '90%'
    }}>
        <Table sx={{ minWidth: 650 }} aria-label="simple table">
            <TableHead>
                <TableRow>
                    <TableCell>WEEK ENDING</TableCell>
                    <TableCell align="right">RETAIL SALES</TableCell>
                    <TableCell align="right">WHOLESALE SALES</TableCell>
                    <TableCell align="right">UNITS SOLD</TableCell>
                    <TableCell align="right">RETAILER MARGIN</TableCell>
                </TableRow>
            </TableHead>
            <TableBody>
                {sales.map((sale) => (
                    <TableRow
                        key={sale.weekEnding}
                        sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
                    >
                        <TableCell component="th" scope="row">
                            {sale.weekEnding}
                        </TableCell>
                        <TableCell align="right">{formattedNumber(sale.retailSales)}</TableCell>
                        <TableCell align="right">{formattedNumber(sale.wholesaleSales)}</TableCell>
                        <TableCell align="right">{sale.unitsSold}</TableCell>
                        <TableCell align="right">{formattedNumber(sale.retailerMargin)}</TableCell>
                    </TableRow>
                ))}
            </TableBody>
        </Table>
    </Box>)
}

export default SalesTable;