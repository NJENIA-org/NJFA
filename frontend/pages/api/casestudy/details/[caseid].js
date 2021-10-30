import { client } from 'libs/client';

export default async function casestudy(req, res){
  const caseid = req.query.caseid;
  const caseStudy = await client.get({
    endpoint: "casestudy",
    queries:{
      filters: `id[equals]${caseid}` 
    }
  });

  res.status(200).json(caseStudy);
}