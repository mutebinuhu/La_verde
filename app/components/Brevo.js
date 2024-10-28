"use client"
import React , { useEffect } from "react";

export default function Brevo() {
    useEffect(() => {
        (function(d, w, c) {
          w.BrevoConversationsID = '667adecb87ffbb19ac36a4b0';
          w[c] = w[c] || function() {
            (w[c].q = w[c].q || []).push(arguments);
          };
          var s = d.createElement('script');
          s.async = true;
          s.src = 'https://conversations-widget.brevo.com/brevo-conversations.js';
          if (d.head) d.head.appendChild(s);
        })(document, window, 'BrevoConversations');
      }, []);
  return (
    <div>
        {/* Add your Brevo conversations code here */}
        <div className="brevo-conversations"></div>
    </div>
  
  )
}
