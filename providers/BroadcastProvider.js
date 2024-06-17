import React, { createContext, useContext, useEffect, useState } from 'react';
import { WebRTCAdaptor } from '@antmedia/webrtc_adaptor';

const BroadcastContext = createContext();

export const BroadcastProvider = ({ children }) => {
  const [webRTCAdaptor, setWebRTCAdaptor] = useState(null);

  useEffect(() => {
    const adaptor = new WebRTCAdaptor({
      websocket_url: "wss://your-domain.tld:5443/WebRTCAppEE/websocket",
      mediaConstraints: {
        video: true,
        audio: true,
      },
      peerconnection_config: {
        'iceServers': [{'urls': 'stun:stun1.l.google.com:19302'}]
      },
      sdp_constraints: {
        OfferToReceiveAudio: false,
        OfferToReceiveVideo: false,
      },
      localVideoId: "id-of-video-element", // <video id="id-of-video-element" autoplay muted></video>
      bandwidth: 900, // 900 kbps varsayılan, 'unlimited' olarak da ayarlanabilir
      dataChannelEnabled: true, // true veya false olarak ayarlanabilir
      callback: (info, obj) => {
        console.log("Callback: ", info, obj);
      },
      callbackError: function(error, message) {
        console.error("Error: ", error, message);
      },
    });

    setWebRTCAdaptor(adaptor);

    return () => {
      adaptor.stop();
    };
  }, []);

  return (
    <BroadcastContext.Provider value={{ webRTCAdaptor }}>
      {children}
    </BroadcastContext.Provider>
  );
};

export const useBroadcast = () => useContext(BroadcastContext);
