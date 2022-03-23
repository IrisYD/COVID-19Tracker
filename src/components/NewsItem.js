import React from "react";
import './NewsItem.css';

const NewsItem = ({title, description, url, urlToImage, author, publishedAt, source}) => {
    return (
        <div className="news">
            <h1 className="news-title">
                <a href={url} className="url">{title}</a>
            </h1>
            <img className="news-img" src={urlToImage} alt={urlToImage}/>
            <p className="news-description">{description}</p>
            <span className="news-author">
                {author}
            </span>
            <br/>
            {/*the time article is published*/}
            <span className="news-published">
                {publishedAt}
            </span>
            <span className="news-source">
                {source}
            </span>
        </div>
    )
}

export default NewsItem;