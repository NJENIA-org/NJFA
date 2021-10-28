import { client } from '../../../../libs/client';

export default async function casecards(req, res){
  console.log("case cards API Test");
  console.log(req.query);
  // console.log(req.headers);
  const offset = req.query.offset;
  const CASE_NUM_PER_PEGE = process.env.CASE_NUM_PER_PEGE;

  const caseStudy = await client.get({
    endpoint: "casestudy",
    queries:{
      limit: CASE_NUM_PER_PEGE,
      offset: Number(offset)
    }
  });

  let filtersCaseIDsQuery = '';
  // console.log(caseStudy);
  for (const i in caseStudy.contents) {
    filtersCaseIDsQuery = `${filtersCaseIDsQuery}casestudy_id[equals]${caseStudy.contents[i].id}`;
    if (i != caseStudy.contents.length - 1) {
      filtersCaseIDsQuery += '[or]';
    }
  }

  const caseStudyImages = await client.get({
    endpoint: "casestudy_image",
    queries: {
      filters: filtersCaseIDsQuery,
      fields: 'casestudy_id,category,image'
    }
  });

  const caseStudies = [];
  for (const c of caseStudy.contents) {
    caseStudies.push({
      id: c.id,
      title: c.title,
      summary: c.summary,
      details: c.details,
      createdAt: c.createdAt,
      images: caseStudyImages.contents.filter((im) => im.casestudy_id.id == c.id)
    });
  }

  res.status(200).json({
    case: caseStudies,
    totalCount: caseStudy.totalCount
  });
}