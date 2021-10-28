import * as React from 'react';
import Typography from '@mui/material/Typography';
import Grid from '@mui/material/Grid';
import Paper from '@mui/material/Paper';
import Box from '@mui/material/Box';

export default function Member({ members }) {
  return (
    <>
      {members.map((member) => (
        <Grid item xs={12} md={12}>
          <Paper>
            <Box>
              <Grid container spacing={1}>
                <Grid item xs={2} md={3}>
                  <Grid >
                    {/* <img src={member.image.url} style={{ width: "-webkit-fill-available" }} /> */}
                    <img src={member.image.url} />
                  </Grid>
                </Grid>
                <Grid item xs={10} md={9}>
                  <Grid container spacing={1}>
                    <Grid item xs={12} md={12}>
                      <Grid container spacing={1}>
                        <Grid item xs={1} md={1}>
                          <Typography variant="subtitle1">
                            {`Name:`}
                          </Typography>
                        </Grid>
                        <Grid item xs={11} md={11}>
                          <Typography variant="subtitle1">
                            {`${member.lastname} ${member.firstname}`}
                          </Typography>
                        </Grid>
                      </Grid>
                    </Grid>
                    <Grid item xs={12} md={12}>
                      <Grid container spacing={1}>
                        <Grid item xs={1} md={1}>
                          <Typography variant="subtitle1">
                            {`Role:`}
                          </Typography>
                        </Grid>
                        <Grid item xs={11} md={11}>
                          <Typography variant="subtitle1">
                            {member.role}
                          </Typography>
                        </Grid>
                      </Grid>
                    </Grid>
                    <Grid item xs={12} md={12}>
                      <Grid container spacing={1}>
                        <Grid item xs={1} md={1}>
                          <Typography variant="subtitle1">
                            {`Profile:`}
                          </Typography>
                        </Grid>
                        <Grid item xs={11} md={11}>
                          <Typography variant="subtitle1" sx={{ "white-space": "pre-line"}}>
                            {`${member.profile}`}
                          </Typography>
                        </Grid>
                      </Grid>
                    </Grid>
                  </Grid>
                </Grid>
              </Grid>
            </Box>
          </Paper>
        </Grid>
      ))}
    </>
  )
}