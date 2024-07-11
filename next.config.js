const webpack = require('webpack');
const dotenv = require('dotenv').config({ path: './project.env' }); // Load environment variables from project.env

module.exports = {
  webpack: (config) => {
    const env = Object.keys(dotenv.parsed).reduce((acc, key) => {
      acc[`process.env.${key}`] = JSON.stringify(dotenv.parsed[key]);
      return acc;
    }, {});

    config.plugins.push(new webpack.DefinePlugin(env));

    return config;
  },
};
