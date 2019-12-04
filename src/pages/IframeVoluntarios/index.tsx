import React from "react";
import Iframe from 'react-iframe'

import "./styles.css";


const IframeVoluntarios: React.FC = () => {

  return (
    <Iframe
        url='https://docs.google.com/forms/d/e/1FAIpQLSfxtp_NtB0_plHIS3DhF0oiC4ZzC2d5b2Vty5LiC1OL5_9fcA/viewform'
        id='myId'
        className='iframe'
        frameBorder={0}
        display='inline'
        position='relative'
      />
  );
};

export default IframeVoluntarios;
