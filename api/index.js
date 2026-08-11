export default async (req, res) => {
  const { reqHandler } = await import('../dist/E-commerce01/server/server.mjs');
  return reqHandler(req, res);
};
