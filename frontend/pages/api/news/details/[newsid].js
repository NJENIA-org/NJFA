import { client } from 'libs/client';

export default async function casestudy(req, res){
  console.log("News Details Test");
  console.log(req.query);
  // console.log(req.headers);
  const newsid = req.query.newsid;
  const newsResponse = await client.get({
    endpoint: "news",
    queries:{
      filters: `id[equals]${newsid}` 
    }
  });

  res.status(200).json(newsResponse);
}