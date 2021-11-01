import * as React from 'react';
import { ImageList } from "@mui/material";
import { ImageListItem } from "@mui/material";
import { Grid } from "@mui/material";
import { useTheme } from '@mui/material/styles';
import useMediaQuery from '@mui/material/useMediaQuery';

export default function AboutImages({ aboutImages }) {
    let colsNumResult = 2;
    const theme = useTheme();
    if(useMediaQuery(theme.breakpoints.up('md'))){
        colsNumResult = 3;
    }

    return (
        <Grid container spaceing={1}>
            <Grid item xs={12} md={3}>
            </Grid>
            <Grid item xs={12} md={9}>
                <ImageList cols={colsNumResult}>
                    {aboutImages.map((item) => (
                        <ImageListItem sx={{ width: "100%", height: "auto" }}>
                            <img
                                src={item.image.url}
                                alt={item.tech_name}
                                loading="lazy"
                            />
                        </ImageListItem>
                    ))}
                </ImageList>
            </Grid>
        </Grid>
    );
}

