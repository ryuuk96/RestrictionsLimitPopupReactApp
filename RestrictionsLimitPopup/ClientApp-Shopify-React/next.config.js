require("dotenv").config();
const withCSS = require('@zeit/next-css');
const withImages = require('next-images')
const webpack = require('webpack');

const apiKey = JSON.stringify(process.env.REACT_APP_SHOPIFY_API_KEY);

module.exports = withCSS(withImages({
  webpack: (config) => {
    const env = { API_KEY: apiKey };
    config.plugins.push(new webpack.DefinePlugin(env));
    return config;
  },
}));