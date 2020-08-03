import React, { useEffect, useState } from 'react';
import Head from 'next/head'

const HomePage = () => {
  const [appRendered, setAppRendered] = useState(false);
  useEffect(() => {
    // require('aframe');
    setAppRendered(true);
  }, []);

  return (
    <>
      <Head>
          <meta charSet="utf-8" />
          <meta name="viewport" content="width=device-width, initial-scale=1" />
          <title>A-Frame Next.js AR.js</title>

          <script src='https://cdn.jsdelivr.net/gh/aframevr/aframe@1c2407b26c61958baa93967b5412487cd94b290b/dist/aframe-master.min.js'></script>
          <script src='https://raw.githack.com/AR-js-org/AR.js/master/aframe/build/aframe-ar-nft.js'></script>
      </Head>

      {appRendered &&
        <>
          <div className="arjs-loader">
            <div>Loading, please wait...</div>
          </div>
          <a-scene
            vr-mode-ui="enabled: false;"
            renderer="logarithmicDepthBuffer: true;"
            embedded
            arjs="trackingMethod: best; sourceType: webcam;debugUIEnabled: false;"
          >
            <a-nft
              type="nft"
              url="https://arjs-cors-proxy.herokuapp.com/https://avo-content-dev.s3.amazonaws.com/campaign-manager/markers/greenlight/greenlight"
              smooth="true"
              smoothCount="10"
              smoothTolerance=".01"
              smoothThreshold="5"
              emitevents="true"
            >
              <a-box
                position="0 0 0"
                rotation="0 45 0"
                color="#4CC3D9"
                depth="0.25"
                height="0.25"
                width="0.5"
              />
            </a-nft>
            <a-entity camera />
          </a-scene>
        </>
      }
      <style jsx global>
        {`
          .arjs-loader {
            height: 100%;
            width: 100%;
            position: absolute;
            top: 0;
            left: 0;
            background-color: rgba(0, 0, 0, 0.8);
            z-index: 9999;
            display: flex;
            justify-content: center;
            align-items: center;
          }

          .arjs-loader div {
            text-align: center;
            font-size: 1.25em;
            color: white;
          }
        `}
      </style>
    </>
  );
};

export default HomePage;
