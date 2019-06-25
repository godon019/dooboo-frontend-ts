const webpack = require('webpack');
const path = require('path');

module.exports = {
  entry: {
    app: './src/App.tsx',
  },
  output: {
    path: path.resolve(__dirname, './dist'),
    filename: 'bundle.js',
    publicPath: '/',
  },
  plugins: [
    // new webpack.optimize.UglifyJsPlugin(),
  ],
  resolve: {
    modules: [
      './node_modules',
      './functions',
    ],
    extensions: ['.ts', '.tsx', '.js', 'jsx'],
  },
  module: {
    rules: [
      {
        test: /\.ts(x?)$/,
        use: [
          {
            loader: 'babel-loader',
            query: {
              cacheDirectory: true,
              presets: [
                '@babel/preset-env',
                '@babel/preset-react',
              ],
              plugins: [
                '@babel/plugin-proposal-function-sent',
                '@babel/plugin-proposal-export-namespace-from',
                '@babel/plugin-proposal-numeric-separator',
                '@babel/plugin-proposal-throw-expressions',
                ['@babel/plugin-proposal-class-properties', { 'loose': true }],
                [
                  '@babel/plugin-transform-runtime',
                  {
                    'helpers': true,
                    'regenerator': false
                  }
                ]
              ]
            },
          },
          {
            loader: 'ts-loader',
          },
        ],
        exclude: [/node_modules/]
      },
      {
        test: /\.js(x?)$/,
        use: [
          {
            loader: 'babel-loader',
            query: {
              cacheDirectory: true,
              presets: [
                '@babel/preset-env',
                '@babel/preset-react',
                '@babel/preset-flow'
              ],
              plugins: [
                [
                  '@babel/plugin-transform-runtime',
                  {
                    'helpers': true,
                    'regenerator': false
                  }
                ]
              ]
            },
          },
        ],
        exclude: [/node_modules/]
      },
      {
        test: /\.(png|jpg|gif)$/,
        use: [
          {
            loader: 'file-loader',
            options: {}
          }
        ]
      }
    ]
  },
};
