import Grid from '@mui/material/Grid';
import { Typography } from "@mui/material";

export default function About({ about }) {
    console.log(about)
    return (

        <Grid container spaceing={1}>
            <Grid item xs={12} md={3} >
                <Typography component="h2" variant="h4" align="left" sx={{ fontSize: "5vh", fontWeight: "bold", margin: "0 0 10px 0" }}>About</Typography>
            </Grid>
            <Grid item xs={12} md={9} sx={{letterSpacing:0}}>
                <Typography component="h2" variant="h4" align="left" sx={{ fontSize: "5vmin", fontWeight: "bold", margin: "0 0 10px 0" }}>{about[0].catch_copy}</Typography>
            </Grid>

        </Grid>

    )
}