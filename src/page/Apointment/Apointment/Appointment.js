import React from 'react';
import Navber from '../../Shared/Navber/Navber';
import AppointmentHeader from '../AppointmentHeader/AppointmentHeader';
import AvailableAppointments from '../AvailableAppointments/AvailableAppointments';

const Appointment = () => {
  const [date, setDate] = React.useState(new Date());
  return (
    <div>
      <Navber></Navber>
      <AppointmentHeader date={date} setDate={setDate}></AppointmentHeader>
      <AvailableAppointments date={date}></AvailableAppointments>
    </div>
  );
};

export default Appointment;
