import React, {useState,useEffect} from "react";
import { useParams } from 'react-router'
import parse from "remark-parse";
import remark2react from "remark-react";
import unified from "unified";

const Article = () => {
  const {slug} = useParams();

const [articleData, setArticleData] = useState();


useEffect(() => {
  callToApi(slug, setArticleData)
},[])
console.log("ARTICLE DATA", setArticleData);
 if (articleData) {
    return (
      <article className="w-screen">
        <div
          style={{
            backgroundImage: `url(http://localhost:1337${articleData.image.formats.medium.url})`,
          }}
          className="w-full h-96 bg-cover bg-center"
        />
        <div className="container mx-auto py-4">
          <h1 className="text-center font-bold text-4xl pb-2">
            {articleData.title}
          </h1>
          <div className="px-12">
            {
              unified()
                .use(parse)
                .use(remark2react)
                .processSync(articleData.content).result
            }
          </div>
        </div>
      </article>
    );
  }
  return <></>;
};

const callToApi = async (slug, setArticleData) => {
  const response = await fetch(`http://localhost:1337/articles/${slug}`)
  //image.formats.large.url
  const data = await response.json()
    console.log(data)
  setArticleData(data)
}

export default Article;