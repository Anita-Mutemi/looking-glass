import { createProxyMiddleware as proxy } from 'http-proxy-middleware';

export default function (app) {
  app.use(
    ['/', '/login', '/auth', '/v1', '/projects', '/me', '/v1/projects'],
    proxy({
      target: 'https://desolate-harbor-30841-707d8d470803.herokuapp.com',
      changeOrigin: true,
    }),
  );
}
