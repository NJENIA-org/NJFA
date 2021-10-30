import * as React from 'react';
import { Link, Divider } from '@mui/material';
import Typography from '@mui/material/Typography';
import Grid from '@mui/material/Grid';
import CardMedia from '@mui/material/CardMedia';
import Pagination from '@mui/material/Pagination';
import useSWR from 'swr';
import { useState } from 'react';

const CASE_NUM_PER_PEGE = 2;

const caseFetcher = async (url) => {
  let caseResponse = await fetch(url);
  caseResponse = await caseResponse.json();

  return caseResponse;
}

function CaseStudyList() {
  const [pageIndex, setPageIndex] = useState(1);

  const { data, error } = useSWR(`/api/casestudy/cards/${(CASE_NUM_PER_PEGE * pageIndex - CASE_NUM_PER_PEGE).toString()}`, caseFetcher);
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
    <Grid container spacing={4} justifyContent='center'>
      {data.case.map((c) => (
        <>
          <Grid key={c.id} item xs={12} md={7}>
            <Grid container spacing={1}>
              <Grid item xs={12} md={12}>
                <Typography component="h2" variant="h5" sx={{ fontWeight: "bold" }}>
                  {c.title}
                </Typography>
              </Grid>
              <Grid item xs={12} md={12}>
                <Typography variant="h6" color="text.secondary">
                  {(new Date(c.createdAt)).toLocaleDateString()}
                </Typography>
              </Grid>
              <Grid item xs={12} md={12}>
                <Typography variant="h6" paragraph>
                  {c.summary}
                </Typography>
              </Grid>
            </Grid>
          </Grid>
          <Grid item xs={12} md={5}>
            <CardMedia
              component="img"
              sx={{ width: "100%", display: { xs: 'block', sm: 'block' } }}
              image={getCategoryImageUrl(c.images, "summary_image") != '' ? getCategoryImageUrl(c.images, "summary_image") : 'njenia.png'}
              alt={c.title}
            />
          </Grid>
          <Grid item xs={12} md={12}>
            <Link href={`/casestudy/${c.id}`} >
              <Typography variant="h6" color="primary">
                {"More Details..."}
              </Typography>
            </Link>
          </Grid>
          <Grid item xs={12} md={12}>
            <Divider />
          </Grid>
        </>
      ))
      }
      <Grid item >
        <Pagination
          count={Math.round(data.totalCount / CASE_NUM_PER_PEGE)}
          page={pageIndex}
          onChange={(e, page) => { setPageIndex(page) }}
          showFirstButton
          showLastButton
          sx={{ justifyContent: 'center' }}
        />
      </Grid>
    </Grid>
  );

}

export default CaseStudyList;