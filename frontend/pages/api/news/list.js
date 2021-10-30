import { client } from 'libs/client';

export default async function listnews(req, res) {
  const newsResponse = await client.get({
    endpoint: "news",
    queries: {
      limit: req.query.limit
    }
  });

  res.status(200).json(newsResponse);
}