import * as React from 'react';
import PropTypes from 'prop-types';
import Typography from '@mui/material/Typography';
import Grid from '@mui/material/Grid';
import Card from '@mui/material/Card';
import CardActionArea from '@mui/material/CardActionArea';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';

function FeaturedPost(props) {
  // const { post } = props;
  const c = props.case;
  let summaryImageUrl = '';
  // const { case: any } = props;

  let summaryImage = c.images.filter( im => im.category == "summary_image");
  if(summaryImage.length != 0){
    summaryImageUrl = summaryImage[0].image.url;
  }
  console.log(summaryImage.length);

  return (
    <Grid item xs={12} md={12}>
      <CardActionArea component="a" href="#">
        <Card sx={{ display: 'flex' }}>
          <CardContent sx={{ flex: 1 }}>
            <Typography component="h2" variant="h5">
              {c.title}
            </Typography>
            <Typography variant="subtitle1" color="text.secondary">
              {c.createdAt}
            </Typography>
            <Typography variant="subtitle1" paragraph>
              {c.summary}
            </Typography>
            <Typography variant="subtitle1" color="primary">
              Continue reading...
            </Typography>
          </CardContent>
          {summaryImageUrl != '' && 
          <CardMedia
            component="img"
            sx={{ width: 160, display: { xs: 'none', sm: 'block' } }}
            image={summaryImageUrl}
            alt={c.title}
          />
          }
        </Card>
      </CardActionArea>
    </Grid>
  );
}

FeaturedPost.propTypes = {
    case: PropTypes.shape({
      id: PropTypes.string.isRequired,
      summary: PropTypes.string.isRequired,
      images: PropTypes.array.isRequired,
      title: PropTypes.string.isRequired,
      createdAt: PropTypes.string.isRequired
    }).isRequired,
  };

// FeaturedPost.propTypes = {
//   post: PropTypes.shape({
//     date: PropTypes.string.isRequired,
//     description: PropTypes.string.isRequired,
//     image: PropTypes.string.isRequired,
//     imageLabel: PropTypes.string.isRequired,
//     title: PropTypes.string.isRequired,
//   }).isRequired,
// };

export default FeaturedPost;