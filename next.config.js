/** @type {import('next').NextConfig} */
const nextConfig = {
    webpack: (config) => {
      config.resolve.alias = {
        ...config.resolve.alias,
        'react-icons/md': 'react-icons/lib/md',
        'react-icons/fa': 'react-icons/lib/fa',
      };
      config.module.rules.push({
        test: /\.css$/,
        use: ['css-loader'],
      });
      return config;
    },
  }
  
  module.exports = nextConfig 

