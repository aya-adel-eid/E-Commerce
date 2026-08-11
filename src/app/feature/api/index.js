export default async (req, res) => {
  const { reqHandler } = await import('../dist/my-app/server/server.mjs');
  return reqHandler(req, res);
};
