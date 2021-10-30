import { ImageList } from "@mui/material";
import { ImageListItem } from "@mui/material";
import { Grid } from "@mui/material";

export default function AboutImages({ aboutImages }) {
    return (
        <Grid container spaceing={1}>
            <Grid item xs={12} md={3}>
            </Grid>
            <Grid item xs={12} md={9}>
                <ImageList cols={3}>
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

