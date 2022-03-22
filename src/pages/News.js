import React, {useState, useEffect} from "react";
import axios from "axios";
import NewsItem from "../components/NewsItem";

const News = () => {
    const [articles, setArticles] = useState([]);

    useEffect(() => {
        const getArticles = async () => {
            // set query to covid 19
            const response = await axios.get('https://newsapi.org/v2/everything?q=covid%2019&apiKey=df16a3ddd0b142dfbe54d63f22b3879c');
            setArticles(response.data.articles);
        }
        getArticles();
    }, [])
    return (
        <div>
            <h1 className="head-text">COVID-19 NEWS</h1>
            <div className='all-news'>
                {articles.map(article => {
                    return (
                        <NewsItem
                            title={article.title}
                            description={article.description}
                            url={article.url}
                            urlToImage={article.urlToImage}
                            author={article.author}
                            publishedAt={article.publishedAt}
                            source={article.source.name}
                        />
                    )
                })}
            </div>
        </div>
    )
}

export default News;