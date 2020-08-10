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
            <a-assets>
              <video
                id="bgVideo"
                crossOrigin="anonymous"
                playsInline
                autoPlay
                muted
                loop
                controls
                controlsList="nodownload"
                // src="/videos/bg.mp4"
                src="https://avo-content-dev.s3.amazonaws.com/videos/bg_1588085276090.mp4"
              />
            </a-assets>

            <a-nft
              type="nft"
              // url="https://arjs-cors-proxy.herokuapp.com/https://avo-content-dev.s3.amazonaws.com/campaign-manager/markers/greenlight/greenlight"
              url="https://arjs-cors-proxy.herokuapp.com/https://avo-content-dev.s3.amazonaws.com/campaign-manager/markers/abc_dental/abc_dental"
              smooth="true"
              smoothCount="10"
              smoothTolerance="0.01"
              smoothThreshold="5"
            >
              <a-video
                src="#bgVideo" 
                position="50 0 -50" 
                width="16" 
                height="9"
                scale="5 5"
                rotation="-90 0 0"
                play="true"
              />
            </a-nft>

            <a-entity camera></a-entity>    
          </a-scene>
        </BodyPortal>
      )}
    </>
  );
};

export default HomePage;
