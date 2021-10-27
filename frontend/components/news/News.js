import styles from "./News.module.css"
import Grid from '@mui/material/Grid';
import ListItem from '@mui/material/ListItem';
import ListItemText from '@mui/material/ListItemText';
import { List } from "@mui/material";

function formatTime(time) {
    var result = time.split('T')
    return result[0]
}

export default function News({ news }) {
    return (
        <div className={styles.area}>
            <Grid container spaceing={1}>
                <Grid item xs={5} md={3} >
                    <div className={styles.news}>
                        <h1>News</h1>
                    </div>
                </Grid>

                <Grid item xs={7} md={9}>
                    <List sx={{ maxHeight: 200, overflow: 'auto' }} disablePadding>
                        <Grid container spaceing={1}>
                            <Grid item xs={5} md={3}>
                                {news.map((item) => (
                                    <ListItem disablePadding>
                                        <ListItemText primary={formatTime(item.publishedAt)} primaryTypographyProps={{
                                            fontSize: 20,
                                            fontWeight: 'normal',
                                            letterSpacing: 0,
                                        }} />
                                    </ListItem>
                                ))}
                            </Grid>
                            <Grid item xs={7} md={9}>
                                {news.map((item) => (
                                    <ListItem disablePadding>
                                        <ListItemText primary={item.title} primaryTypographyProps={{
                                            fontSize: 20,
                                            fontWeight: 'normal',
                                            letterSpacing: 0,
                                        }} />
                                    </ListItem>
                                ))}
                            </Grid>
                        </Grid>
                    </List>
                </Grid>
            </Grid>
        </div>

    )
}