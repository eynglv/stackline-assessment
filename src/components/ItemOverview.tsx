import { Box, Chip, Typography } from "@mui/material";

type ItemOverviewProps = {
    title?: string;
    image?: string;
    subtitle?: string;
    tags?: string[];
}


const ItemOverview = ({ title, image, subtitle, tags }: ItemOverviewProps): JSX.Element => (
    <Box sx={{
        height: '100%',
        width: '20%',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        backgroundColor: 'secondary.light'
    }}>
        <Box sx={{ maxWidth: '80%', py: 2 }}>
            <img src={image} alt={title} object-fit="contain" width="100%" />
        </Box>
        <Typography variant="subtitle1" sx={{ fontWeight: 'bold', color: 'text.primary' }}>{title}</Typography>
        <Box sx={{ maxWidth: '70%', textAlign: 'center', pb: 2 }}>
            <Typography variant="subtitle2" sx={{ color: 'text.secondary' }}>{subtitle}</Typography>
        </Box>
        <Box sx={{ width: '100%', backgroundColor: 'text.secondary', height: '1px', mb: 2 }} />
        <Box sx={{ maxWidth: "90%" }}>
            {tags?.map((tag) => (
                <Chip label={tag} variant="outlined" sx={{ m: 0.5, borderRadius: 0.6 }} key={tag} />
            ))}
        </Box>
        <Box sx={{ width: '100%', backgroundColor: 'text.secondary', height: '1px', mt: 2 }} />

    </Box>
);

export default ItemOverview;