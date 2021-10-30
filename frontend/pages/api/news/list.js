import { client } from 'libs/client';

export default async function listNews(req, res) {
  const newsResponse = await client.get({
    endpoint: "news",
    queries: {
      limit: req.query.limit
    }
  });

  res.status(200).json(newsResponse);
}