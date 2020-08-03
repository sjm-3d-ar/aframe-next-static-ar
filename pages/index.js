import React, { useEffect, useState } from 'react';
import Head from 'next/head'

const HomePage = () => {
  const [appRendered, setAppRendered] = useState(false);
  useEffect(() => {
    require('aframe');
    setAppRendered(true);
  }, []);

  return (
    <>
      {appRendered &&
        <a-scene>
          <a-box position="0 0.5 -3" rotation="0 45 0" color="#4CC3D9"></a-box>
        </a-scene>
      }
    </>
  );
};

export default HomePage;
