require("dotenv").config();
const json = require("../utilities/appConfig.json")
const withCSS = require('@zeit/next-css');
const webpack = require('webpack');

const apiKey =  json.apiKey;

module.exports = withCSS({
  webpack: (config) => {
    const env = { API_KEY: apiKey };
    config.plugins.push(new webpack.DefinePlugin(env));
    return config;
  },
});