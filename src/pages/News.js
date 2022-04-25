import React, {useState, useEffect} from "react";
import axios from "axios";
import NewsItem from "../components/NewsItem";

const News = () => {
    const [articles, setArticles] = useState([]);

    // fetch news related to Covid-19 from API
    useEffect(() => {
        const getArticles = async () => {
            // set query to covid
            const response = await axios.get('https://newsapi.org/v2/everything?q=covid&apiKey=df16a3ddd0b142dfbe54d63f22b3879c');
            setArticles(response.data.articles);
        }
        getArticles();
    }, [])
    return (
        <div>
            <div className='all-news'>
                {articles.map((article, index) => {
                    return (
                        <div
                            data-testid={`news-item-${index}`}
                            key={index}
                        >
                            <NewsItem
                                title={article.title}
                                description={article.description}
                                url={article.url}
                                urlToImage={article.urlToImage}
                                author={article.author}
                                publishedAt={article.publishedAt}
                                source={article.source.name}

                            />
                        </div>
                    )
                })}
            </div>
        </div>
    )
}

export default News;