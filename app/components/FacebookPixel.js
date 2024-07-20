// components/FacebookPixel.js
'use client';

import { useEffect } from 'react';
import Script from 'next/script';

const FacebookPixel = ({ pixelId }) => {
  useEffect(() => {
    if (!pixelId) {
      console.warn('Facebook Pixel ID is not provided.');
      return;
    }

    window.fbq = window.fbq || function() {
      window.fbq.callMethod ? window.fbq.callMethod.apply(window.fbq, arguments) : window.fbq.queue.push(arguments);
    };

    window.fbq.push = window.fbq;
    window.fbq.loaded = true;
    window.fbq.version = '2.0';
    window.fbq.queue = [];
    window.fbq('init', pixelId);
    window.fbq('track', 'PageView');
  }, [pixelId]);

  return (
    
    <>
      <Script id="facebook-pixel">
        {`
         
        !function(f,b,e,v,n,t,s)
        {if(f.fbq)return;n=f.fbq=function(){n.callMethod?
        n.callMethod.apply(n,arguments):n.queue.push(arguments)};
        if(!f._fbq)f._fbq=n;n.push=n;n.loaded=!0;n.version='2.0';
        n.queue=[];t=b.createElement(e);t.async=!0;
        t.src=v;s=b.getElementsByTagName(e)[0];
        s.parentNode.insertBefore(t,s)}(window, document,'script',
        'https://connect.facebook.net/en_US/fbevents.js');
        fbq('init', '424213247242337');
        fbq('track', 'PageView');
        </script>
        <noscript><img height="1" width="1" style="display:none"
        src="https://www.facebook.com/tr?id=424213247242337&ev=PageView&noscript=1"
        /></noscript>

        `}
      </Script>
      <noscript>
        <img height="1" width="1" style={{ display: 'none' }}
             src={`https://www.facebook.com/tr?id=${pixelId}&ev=PageView&noscript=1`} />
      </noscript>
    </>
  );
};


export default FacebookPixel;
