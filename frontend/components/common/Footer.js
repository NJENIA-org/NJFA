import * as React from 'react';
import PropTypes from 'prop-types';
import Box from '@mui/material/Box';
import Container from '@mui/material/Container';
import Typography from '@mui/material/Typography';
import Link from '@mui/material/Link';
import Stack from '@mui/material/Stack';

function Copyright({ copyright }) {
  return (
    <Typography variant="body2" color="text.secondary" align="center">
      {`Copyright © ${copyright} ${new Date().getFullYear()}.`}
    </Typography>
  );
}

function Footer(props) {
  const { description, title, copyright, socials } = props;

  return (
    <Box component="footer" sx={{ bgcolor: 'background.paper', py: 6, "text-align": "center" }}>
      <Container maxWidth="lg" >
        {socials.map((social) => (
          <Link
            variant="body1"
            href={social.url}
            key={social.name}
            sx={{ display: "inline-block" }}
          >
            <Stack direction="row" spacing={1} alignItems="center">
              <social.icon />
              <span>{social.name}</span>
            </Stack>
          </Link>
        ))}
        <Typography variant="h6" align="center" gutterBottom>
          {title}
        </Typography>
        <Typography
          variant="subtitle1"
          align="center"
          color="text.secondary"
          component="p"
        >
          {description}
        </Typography>
        <Copyright copyright={copyright} />
      </Container>
    </Box>
  );
}

Footer.propTypes = {
  description: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
};

export default Footer;