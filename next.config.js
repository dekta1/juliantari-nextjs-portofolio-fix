/** @type {import('next').NextConfig} */
const nextConfig = {
    webpack: (config) => {
      config.resolve.alias = {
        ...config.resolve.alias,
        'react-icons/md': 'react-icons/lib/md',
        'react-icons/fa': 'react-icons/lib/fa',
      };
  
      return config;
    },
  }
  
  module.exports = nextConfig 

