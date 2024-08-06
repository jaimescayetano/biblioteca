// LandbotChat.js
import React, { useEffect } from 'react';

const LandbotChat = () => {
  useEffect(() => {
    const script = document.createElement('script');
    script.type = 'text/javascript';
    script.async = true;
    script.src = 'https://cdn.landbot.io/landbot-3/landbot-3.0.0.js';
    script.onload = () => {
      new Landbot.Livechat({
        configUrl: 'https://storage.googleapis.com/landbot.site/v3/H-2573073-LTQP2O2F5QXEN86O/index.json',
      });
    };
    document.body.appendChild(script);

    return () => {
      document.body.removeChild(script);
    };
  }, []);

  return null;
};

export default LandbotChat;
