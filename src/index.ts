import express from 'express';
import router from './routes/router';
import logger from './middlewares/logger';
import ratelimiterMw from './middlewares/ratelimiter.mw';
import notfoundMw from './middlewares/notfound.mw';
import errorMw from './middlewares/error.mw';

const app = express();

//middlewares
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.set('view engine', 'ejs');
app.use(express.static('./public'));
app.use(logger);
app.use(ratelimiterMw());
app.use(router);

app.use(notfoundMw);
app.use(errorMw);

const port = 3000;
app.listen(port, () => {
  console.log('server is working on http://127.0.0.1:%s', port);
});

export default app;
