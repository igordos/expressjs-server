import webpack from 'webpack';
import webpackDevMiddleware from 'webpack-dev-middleware';
import webpackHotServerMiddleware from 'webpack-hot-middleware';
import express from 'express';
import webpackConfig from '../../webpack.config';

const compiler = webpack(webpackConfig);
const app = express();

app.use(
  webpackDevMiddleware(compiler, {
    // noInfo: true,
    contentBase: './dist',
    hot: true,
    host: 'localhost',
    publicPath: webpackConfig.output.publicPath,
  }),
);
app.use(webpackHotServerMiddleware(compiler));

app.get('/', (req, res) => {
  res.send('start');
});

app.listen(3000, () => {
  console.log('Server started');
});
