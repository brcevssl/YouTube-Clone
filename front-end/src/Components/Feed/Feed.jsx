import { Link } from 'react-router-dom';
import { useState, useEffect } from 'react';
import "./Feed.css";
import { API_KEY } from "../../data";
import moment from 'moment';
import { getTransformedValues } from '../../data';


const Feed = ( { category } ) => {

    const [data, setData] = useState([]);

    const fetchData = async () => {
        const response = await fetch(`https://youtube.googleapis.com/youtube/v3/videos?part=snippet%2CcontentDetails%2Cstatistics&chart=mostPopular&maxResults=6&regionCode=US&videoCategoryId=${category}&key=${API_KEY}`);
        const data = await response.json();
        setData(data.items);
    }

    useEffect(() => {
        fetchData();
    }, [category]);

  return (
    <div className="feed">
        {data.map((item, index) => {
            const publishedAt = new Date(item.snippet.publishedAt);
            const views = getTransformedValues(item.statistics.viewCount);
            const title = getTransformedValues(item.snippet.title);

            return (
                <Link to = {`watch/${item.snippet.categoryId}/${item.id}`} className='card' key={index}>
                    <img src={item.snippet.thumbnails.medium.url} alt="thumbnail" />
                    <h2>{title}</h2>
                    <h3>{item.snippet.channelTitle}</h3>
                    <p>{views} views &bull; {moment(publishedAt).fromNow()}</p>
                </Link>
            )
        })}
    </div>
  )
}

export default Feed