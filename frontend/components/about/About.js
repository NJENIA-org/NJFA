import styles from "./About.module.css"
import Grid from '@mui/material/Grid';
import ListItem from '@mui/material/ListItem';
import ListItemText from '@mui/material/ListItemText';
import { List } from "@mui/material";

export default function About({ about }) {
    return (
        <Grid container spaceing={1}>
            <Grid item xs={5} md={3} >
                <div className={styles.about}>
                    <h1>About</h1>
                </div>
            </Grid>
            <Grid item xs={7} md={9}>
                <List sx={{ maxHeight: 200, overflow: 'auto' }} disablePadding>

                    {about.map((item) => (
                        <ListItem disablePadding>
                            <ListItemText primary={item.catch_copy} primaryTypographyProps={{
                                fontSize: 25,
                                fontWeight: 900,
                                letterSpacing: 0,
                            }} />
                        </ListItem>
                    ))}
                </List>
            </Grid>

        </Grid>

    )
}