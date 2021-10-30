import { Grid } from "@mui/material"

export default function Member({ members }) {
  return (
    <Grid container spaceing={1}>
      <Grid item xs={4} md={4} >
        members
      </Grid>

      <Grid item xs={8} md={8}>

      </Grid>
    </Grid>
  )
}