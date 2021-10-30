import { client } from 'libs/client';

export default async function listnews(req, res){
  console.log(req.query)
  const newsResponse = await client.get({
    endpoint: "news",
    queries:{
      limit: req.query.limit
    }
  });
  // console.log(newsResponse);
  res.status(200).json(newsResponse);
}