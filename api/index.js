export default async (req, res) => {
  if (!req.headers.host) {
    req.headers.host = req.headers['x-forwarded-host'] || 'e-commerce-alpha-ten-99.vercel.app';
  }
  const { reqHandler } = await import('../dist/E-commerce01/server/server.mjs');
  return reqHandler(req, res);
};
