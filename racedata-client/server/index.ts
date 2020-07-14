import express, { Request, Response } from 'express';
import next from 'next';
import { parse } from 'url';

const port = parseInt(process.env.PORT, 10) || 3000;
const dev = process.env.NODE_ENV !== 'production';
const app = next({ dev });
const handle = app.getRequestHandler();

app.prepare().then(() => {
  const server = express();

  server.get('/', (req: Request, res: Response) => {
    const parsedUrl = parse(req.url, true);
    const { pathname, query } = parsedUrl;

    return app.render(req, res, pathname, query);
  });

  server.get('/main', (req: Request, res: Response) => {
    const parsedUrl = parse(req.url, true);
    const { pathname, query } = parsedUrl;

    return app.render(req, res, pathname, query);
  });

  server.all('*', (req: Request, res: Response) => {
    return handle(req, res);
  });

  server.listen(port, (err) => {
    if (err) throw err;
    console.log(`> Ready on http://localhost:${port}`);
  });
})