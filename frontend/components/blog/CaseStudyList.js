import * as React from 'react';
import PropTypes from 'prop-types';
import { Button } from '@mui/material';
import Typography from '@mui/material/Typography';
import Grid from '@mui/material/Grid';
import Card from '@mui/material/Card';
import CardActionArea from '@mui/material/CardActionArea';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Pagination from '@mui/material/Pagination';

import useSWR from 'swr';
import { useState } from 'react';

const CASE_NUM_PER_PEGE = 2;

const fetcher = async (offset) => {
  console.log("offset:")
  console.log(offset);

  const baseUrl = `/api/casestudy/cards/${offset}`;
  let caseResponse = await fetch(baseUrl);
  caseResponse = await caseResponse.json();
  return caseResponse;
}

function CaseStudyList() {
  const [pageIndex, setPageIndex] = useState(1);

  const { data, error } = useSWR((CASE_NUM_PER_PEGE * pageIndex - CASE_NUM_PER_PEGE).toString(), fetcher);
  if (!data) return <div>loading...</div>
  if (error) return <div>failed.</div>

  const getCategoryImageUrl = (imagesArray, category) => {
    const targetImage = imagesArray.filter(im => im.category == category);
    if (targetImage.length != 0) {
      return targetImage[0].image.url;
    }
    return '';
  }

  return (
    <>
      {data.case.map((c) => (
        <Grid item xs={12} md={12}>
          <CardActionArea component="a" href={`/casestudy/${c.id}`}>
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
              {getCategoryImageUrl(c.images, "summary_image") != '' &&
                <CardMedia
                  component="img"
                  sx={{ width: 160, display: { xs: 'none', sm: 'block' } }}
                  image={getCategoryImageUrl(c.images, "summary_image")}
                  alt={c.title}
                />
              }
            </Card>
          </CardActionArea>
        </Grid>
      ))}
      <Grid item >
        <Pagination
          count={Math.round(data.totalCount / CASE_NUM_PER_PEGE)}
          page={pageIndex}
          onChange={(e, page) => { console.log(`page:${page}`); setPageIndex(page) }}
          showFirstButton
          showLastButton
          sx={{ justifyContent: 'center'}}
        />
      </Grid>
    </>
  );

}

// FeaturedPost.propTypes = {
//   case: PropTypes.shape({
//     id: PropTypes.string.isRequired,
//     summary: PropTypes.string.isRequired,
//     images: PropTypes.array.isRequired,
//     title: PropTypes.string.isRequired,
//     createdAt: PropTypes.string.isRequired
//   }).isRequired,
// };

export default CaseStudyList;