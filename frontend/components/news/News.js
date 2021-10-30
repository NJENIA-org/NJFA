import * as React from 'react';
import styles from "./News.module.css"
import Grid from '@mui/material/Grid';
import ListItem from '@mui/material/ListItem';
import ListItemText from '@mui/material/ListItemText';
import { List, Button, Link, Typography } from "@mui/material";

import useSWR from 'swr';
import { useState } from "react";

const NEWS_NUM_PER_PEGE = 2;

const newsListFetcher = async (url) => {
    let newsResponse = await fetch(url);
    newsResponse = await newsResponse.json();

    return newsResponse;
}

export default function News() {
    const [limit, setLimit] = useState(1);
    const { data, error } = useSWR(
        `/api/news/list?${new URLSearchParams({ limit: (limit * NEWS_NUM_PER_PEGE).toString() })}`,
        newsListFetcher
    );
    if (!data) return <div>loading...</div>
    if (error) return <div>failed.</div>

    const news = data.contents;
    const totalCount = data.totalCount;

    return (
        <div className={styles.area}>
            <Grid container spaceing={1}>
                <Grid item xs={12} md={3} >
                    <Typography component="h2" variant="h4" align="left" sx={{ fontSize: "4vmin", fontWeight: "bold", margin: "0 0 10px 0" }}>News</Typography>
                </Grid>

                <Grid item xs={12} md={9}>
                    <List sx={{ maxHeight: 200, overflow: 'auto' }} disablePadding>
                        <Grid container spaceing={1}>
                            <Grid item xs={12} md={3}>
                                {news.map((item) => (
                                    <ListItem disablePadding>
                                        <ListItemText primary={new Date(item.publishedAt).toLocaleDateString()} primaryTypographyProps={{
                                            fontSize: "2vmin",
                                            fontWeight: 'normal',
                                            letterSpacing: 0,
                                        }} />
                                    </ListItem>
                                ))}
                            </Grid>
                            <Grid item xs={12} md={9}>
                                {news.map((item) => (
                                    <ListItem disablePadding>
                                        <Link href={`/news/${item.id}`}>
                                            <ListItemText primary={item.title} primaryTypographyProps={{
                                                fontSize: "2vmin",
                                                fontWeight: 'normal',
                                                letterSpacing: 0,
                                            }} />
                                        </Link>
                                    </ListItem>
                                ))}
                                {(limit * NEWS_NUM_PER_PEGE) < totalCount &&
                                    <Typography onClick={() => setLimit(limit + 1)} sx={{
                                        fontSize: "2vmin",
                                        fontWeight: 'normal',
                                        letterSpacing: 0,
                                        'text-decoration': 'underline',
                                        color: '#556cd6'
                                    }} >More Loading...
                                    </Typography>
                                }
                            </Grid>
                        </Grid>
                    </List>

                </Grid>
            </Grid>
        </div>

    )
}