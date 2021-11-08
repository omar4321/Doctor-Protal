import { Container, Grid } from '@mui/material';
import React from 'react';
import chair from '../../../images/chair.png';
import Calender from '../../Shared/Navber/Calender/Calender';

const AppointmentHeader = () => {
  const [date, setDate] = React.useState(new Date());
  return (
    <div>
      <Container>
        <Grid container spacing={2}>
          <Grid item xs={12} md={6}>
            <Calender date={date} setDate={setDate}></Calender>
          </Grid>
          <Grid item xs={12} md={6}>
            <img style={{ width: '100%' }} src={chair} alt="chair" />
          </Grid>
        </Grid>
      </Container>
    </div>
  );
};

export default AppointmentHeader;
