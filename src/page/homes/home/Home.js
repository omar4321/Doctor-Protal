import React from 'react';

import Navber from '../../Shared/Navber/Navber';
import Apppobanner from '../Appointmentbanner/Apppobanner';
import Services from '../Services/Services';
import Topbanner from '../Topbanner/Topbanner';

const Home = () => {
  return (
    <div>
      <Navber></Navber>
      <Topbanner> </Topbanner>
      <Services></Services>
      <Apppobanner> </Apppobanner>
    </div>
  );
};

export default Home;
