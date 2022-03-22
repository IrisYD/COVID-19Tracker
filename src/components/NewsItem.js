import React from "react";
import './NewsItem.css';

const NewsItem = ({title, description, url, urlToImage, author, publishedAt, source}) => {
    return (
        // <div className="news">
        //     <div className="news-item">
        //         <img className="news-img" src={urlToImage} alt={urlToImage}/>
        //         <h3>
        //             <a href={url}>{title}</a>
        //         </h3>
        //         <p>{description}</p>
        //     </div>
        // </div>
        <div className="news">
            {/*<h1 className="news-title">{title}</h1>*/}
            <h1 className="news-title">
                <a href={url}>{title}</a>
            </h1>
            <img className="news-img" src={urlToImage} alt={urlToImage}/>
            <p className="news-description">{description}</p>
            <span className="news-author">
                {author}
            </span>
            <br/>
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