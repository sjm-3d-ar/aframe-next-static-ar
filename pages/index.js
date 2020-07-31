import React, { useEffect, useState } from 'react';
import Head from 'next/head'

const HomePage = () => {
  const [appRendered, setAppRendered] = useState(false);
  useEffect(() => {
    require('aframe');
    setAppRendered(true);
  }, []);

  return (
    <div style={{ height: '100%', width: '100%' }}>
      <Head>
          <meta charSet="utf-8" />
          <meta name="viewport" content="width=device-width, initial-scale=1" />
          <title>A-Frame Next.js AR.js</title>
      </Head>

      {appRendered &&
        <a-scene>
          <a-box
            position="-1 0.5 -3"
            rotation="0 45 0"
            color="#4CC3D9"
            depth="0.25"
            height="0.25"
            width="0.5"
          />
          <a-sphere position="0 1.25 -5" radius="1.25" color="#EF2D5E" />
          <a-cylinder position="1 0.75 -3" radius="0.5" height="1.5" color="#FFC65D" />
          <a-plane
            position="0 0 -4"
            rotation="-90 0 0"
            width="4"
            height="4"
            color="#7BC8A4"
          />
          <a-sky color="#ECECEC" />
        </a-scene>
      }
    </div>
  );
};

export default HomePage;
