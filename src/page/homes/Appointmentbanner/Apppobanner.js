import React from 'react';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import doctor from '../../../images/doctor.png';
import bg from '../../../images/appointment-bg.png';
import { Button, Typography } from '@mui/material';

const appoiBg = {
  background: `url(${bg})`,
  marginTop: 180,
  backgroundPosition: 'center' /* Center the image */,
  backgroundRepeat: 'no-repeat' /* Do not repeat the image */,
  backgroundSize: ' cover',
  backgroundColor: 'rgba(45,58,74,0.9)',
  backgroundBlendMode: 'darken , luminosity',
};

const Apppobanner = () => {
  return (
    <div>
      <Box style={appoiBg} sx={{ flexGrow: 1 }}>
        <Grid container spacing={2}>
          <Grid item xs={12} md={6}>
            <img
              src={doctor}
              alt=""
              style={{ width: 400, marginTop: '-120px' }}
            />
          </Grid>
          <Grid
            item
            xs={12}
            md={6}
            variant="h5"
            sx={{
              display: 'flex',
              justifyContent: 'flex-start',
              alignItems: 'center',
              textAlign: 'left',
            }}
          >
            <Box>
              {' '}
              <Typography
                variant="h6"
                sx={{ mb: 5 }}
                style={{ color: '#5CE7ED' }}
              >
                Appointment
              </Typography>
              <Typography variant="h4" style={{ color: 'white' }}>
                Make an Appointment Today
              </Typography>
              <Typography
                variant="h6"
                sx={{ my: 5 }}
                style={{ color: 'white', fontSize: 14, fontWeight: 300 }}
              >
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Sequi
                facere totam aliquam praesentium vel. Amet veniam odio vero
                doloremque laborum.
              </Typography>
              <Button
                variant="contained"
                style={{ backgroundColor: '#0c7175' }}
              >
                Learn More
              </Button>
            </Box>
          </Grid>
        </Grid>
      </Box>
    </div>
  );
};

export default Apppobanner;
