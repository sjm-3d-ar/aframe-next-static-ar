import React, { useEffect, useState } from "react";
import Head from 'next/head'

import BodyPortal from '../src/components/BodyPortal';

const HomePage = () => {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  return (
    <>
      <Head>
        <meta charSet="UTF-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta httpEquiv="x-ua-compatible" content="ie=edge" />
        <meta name="apple-mobile-web-app-capable" content="yes" />
        <title>next-aframe-image</title>
      </Head>

      {mounted && (
        <BodyPortal>
          <a-scene
            vr-mode-ui="enabled: false;"
            renderer="logarithmicDepthBuffer: true;"
            embedded
            arjs="trackingMethod: best; sourceType: webcam; debugUIEnabled: false;"
          >
            <a-nft
              type="nft"
              url="https://arjs-cors-proxy.herokuapp.com/https://avo-content-dev.s3.amazonaws.com/campaign-manager/markers/greenlight/greenlight"
              smooth="true"
              smoothCount="10"
              smoothTolerance="0.01"
              smoothThreshold="5"
            >
              <a-box position="0 0 0" rotation="0 0 0" color="tomato" depth="10" height="10" width="10"></a-box>
            </a-nft>

            <a-entity camera></a-entity>    
          </a-scene>
        </BodyPortal>
      )}
    </>
  );
};

export default HomePage;
