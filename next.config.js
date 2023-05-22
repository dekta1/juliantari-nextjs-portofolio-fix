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
        use: [
          {
            loader: 'style-loader',
          },
          {
            loader: 'css-loader',
            options: {
              importLoaders: 1,
            },
          },
        ],
      });
      return config;
    },
  }
  
  module.exports = nextConfig 

