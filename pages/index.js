import React, { useEffect, useState } from "react";
import Head from 'next/head'

const HomePage = () => {
  const [clientSideRendered, setClientSideRendered] = useState(false);

  useEffect(() => {
    setClientSideRendered(true);
  }, []);

  return (
    <>
      {clientSideRendered &&
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
            <a-box position="0 1 0" rotation="0 45 0" color="tomato" depth="0.5" height="0.5" width="0.5"></a-box>
          </a-nft>

          <a-entity camera></a-entity>
  
        </a-scene>
      }
    </>
  );
};

export default HomePage;
