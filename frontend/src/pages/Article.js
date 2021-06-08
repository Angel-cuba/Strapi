import React, {useState,useEffect} from "react";
import { useParams } from 'react-router'

const Article = () => {
  const {slug} = useParams();

const {articleData, setArticleData} = useState();

useEffect(() => {
  callToApi(slug, setArticleData)
},[])

  return (<>
  <h1>Hola artículo No {slug}</h1>
  
  </>)
};

const callToApi = async (slug, setArticlesData) => {
  const response = await fetch(`http://localhost:1337/articles/${slug}`)
  const data = await response.json()

  setArticlesData(data)
}

export default Article;