import styles from "./News.module.css"
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';

export default function News({ news }) {
    console.log(news)
    return (
        // <Box sx={{ flexGrow: 1 }}>
            <Grid container spaceing={1}>
                <Grid item xs={5} md={3}>
                    News
                </Grid>

                <Grid item xs={7} md={9}>
                    <Grid container spaceing={1}>
                        <Grid item xs={5} md={3}>
                            date
                        </Grid>
                        <Grid item xs={7} md={9}>
                            title
                        </Grid>
                    </Grid>
                </Grid>
            </Grid>
        // </Box>

    )
}