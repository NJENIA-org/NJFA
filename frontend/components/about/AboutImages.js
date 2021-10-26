import styles from "./AboutImages.module.css"
import { ImageList } from "@mui/material";
import { ImageListItem } from "@mui/material";

export default function AboutImages({ aboutImages }) {
    return (
        <div className={styles.imagelist}>
            <ImageList sx={{ width: 900, height: 300 }} cols={4} rowHeight={100}>
                {aboutImages.map((item) => (
                    <div className={styles.imagelistitem}>
                        <ImageListItem key={item.image.url}>
                            <img
                                src={`${item.image.url}?w=300&h=300&fit=crop&auto=format`}
                                alt={item.tech_name}
                                loading="lazy"
                            />
                        </ImageListItem>
                    </div>

                ))}
            </ImageList>
        </div>



    );
}

