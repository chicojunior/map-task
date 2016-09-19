import React from 'react';
import $ from 'jquery';

const Html = (props) => (
  <html lang="en">
    <head>
      <meta charSet="utf-8" />
      <meta httpEquiv="X-UA-Compatible" content="IE=edge" />
      <meta name="viewport" content="width=device-width, minimum-scale=1.0" />
      <title>Jiu Jitsu Gyms</title>

      <link rel="stylesheet" href="https://unpkg.com/leaflet@1.0.0-rc.3/dist/leaflet.css" />
      <link rel="stylesheet" href="https://fonts.googleapis.com/css?family=Roboto:300,300italic,700,700italic" />
      <link rel="stylesheet" href="http://yui.yahooapis.com/pure/0.6.0/pure-min.css" />
      <link rel="stylesheet" href="http://yui.yahooapis.com/pure/0.6.0/grids-responsive-min.css" />
      <link rel="stylesheet" href="/app.css" />

    </head>
    <body>

      <div id="root" dangerouslySetInnerHTML={{ __html: props.body }} />

      <script src="/app.js"/>
      <script src="https://unpkg.com/leaflet@1.0.0-rc.3/dist/leaflet.js"></script>
      <script src="https://unpkg.com/react-leaflet/dist/react-leaflet.min.js"></script>



    </body>
  </html>
);

export default Html;
