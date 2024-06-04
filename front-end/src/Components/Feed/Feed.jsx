import { Link } from 'react-router-dom';
import { useState, useEffect } from 'react';
import "./Feed.css";
import { API_KEY } from "../../data";


const Feed = ( { category } ) => {

    const [data, setData] = useState([]);

    const fetchData = async () => {
        const response = await fetch(`https://youtube.googleapis.com/youtube/v3/videos?part=snippet%2CcontentDetails%2Cstatistics&chart=mostPopular&maxResults=48&regionCode=US&videoCategoryId=${category}&key=${API_KEY}`);
        const data = await response.json();
        setData(data.items);
    }

    useEffect(() => {
        fetchData();
    }, [category]);

    const getViews = (views) => {
        if (views > 1000000) {
            return (views / 1000000).toFixed(1) + 'M';
        } else if (views > 1000) {
            return (views / 1000).toFixed(1) + 'K';
        }
        return views;
    }

    const getTime = (time) => {
        const now = new Date();
        const timeDiff = now.getTime() - time.getTime();
        const seconds = Math.ceil(timeDiff / 1000);
        const minutes = Math.ceil(seconds / 60);
        const hours = Math.ceil(minutes / 60);
        const days = Math.ceil(hours / 24);
        return days + ' days';
    }

  return (
    <div className="feed">
        {data.map((item, index) => {
            const publishedAt = new Date(item.snippet.publishedAt);
            const views = getViews(item.statistics.viewCount);
            const time = getTime(publishedAt);

            return (
                <Link to = {`watch/${item.snippet.categoryId}/${item.id}`} className='card' key={index}>
                    <img src={item.snippet.thumbnails.medium.url} alt="thumbnail" />
                    <h2>{item.snippet.title}</h2>
                    <h3>{item.channelTitle}</h3>
                    <p>{views} views &bull; {time} ago</p>
                </Link>
            )
        })}
    </div>
  )
}

export default Feed