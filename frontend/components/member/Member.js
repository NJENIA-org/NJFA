import { Grid } from "@mui/material"
import { Avatar } from "@mui/material"
import { Typography } from "@mui/material"
export default function Member({ members }) {
  return (
    members.map((item) => (
      <Grid container spaceing={1} sx={{ pb: "5%" }}>
        <Grid item xs={3} md={3}>
          <Avatar variant="square" alt={item.firstname} src={item.image.url} sx={{ width: 150, height: 150 }} />
        </Grid>
        <Grid item xs={9} md={9}>
          <Typography variant="subtitle1" sx={{ "white-space": "pre-line"}} >
            <b>
            {`${item.lastname}　${item.firstname}`} <br />
            {`${item.role}`}<br />
            {`${item.profile}`}
            </b>
          </Typography>
        </Grid>
      </Grid>
    ))
  )
}