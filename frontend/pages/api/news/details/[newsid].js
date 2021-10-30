import { client } from 'libs/client';

export default async function casestudy(req, res) {

  const newsid = req.query.newsid;
  const newsResponse = await client.get({
    endpoint: "news",
    queries: {
      filters: `id[equals]${newsid}`
    }
  });

  res.status(200).json(newsResponse);
}