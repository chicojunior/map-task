import React, { PropTypes } from 'react';
import { renderToStaticMarkup } from 'react-dom/server';
import url from 'url';
import express from 'express';
import webpack from 'webpack';

import Layout from './components/Layout/Layout.js'

import config from './webpack.config.dev.js';

/**
 * Render the entire web page to a string. We use render to static markup here
 * to avoid react hooking on to the document HTML that will not be managed by
 * React. The body prop is a string that contains the actual document body,
 * which react will hook on to.
 *
 * We also take this opportunity to prepend the doctype string onto the
 * document.
 *
 * @param {object} props
 * @return {string}
 */
const renderDocumentToString = props =>
  '<!doctype html>' + renderToStaticMarkup(<Layout />);

const app = express();
const compiler = webpack(config);

app.use(require('webpack-dev-middleware')(compiler, {
  noInfo: true,
  publicPath: config.output.publicPath,
}));

app.use(require('webpack-hot-middleware')(compiler));

app.use( express.static( require('path').join(__dirname, 'public') ) );

app.get('*', (req, res) => {
  const html = renderDocumentToString({
    bundle: config.output.publicPath + 'app.js',
  });
  res.send(html);
});

const { port } = url.parse('http:' + config.output.publicPath);

app.listen(port, 'localhost', err => {
  if (err) {
    console.error(err);
    return;
  }
  console.log(`Dev server listening at http://localhost:${port}`);
});
