import express from 'express';
const app = express();
import router from './routes/apies';
import { logger } from './middlewares/logger';

//middlewares

app.use(logger);
app.use(router);

const port = 3000;
app.listen(port, () => {
    console.log('server is working on http://127.0.0.1:' + port);
});

export default app;
