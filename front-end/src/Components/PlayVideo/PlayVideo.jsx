import { useState, useEffect } from "react";
import "./PlayVideo.css";
import like from "../../assets/like.png";
import dislike from "../../assets/dislike.png";
import share from "../../assets/share.png";
import user_profile from "../../assets/user_profile.jpg";
import verified from "../../assets/verified.png";
import { API_KEY } from "../../data";
import { getTransformedValues } from "../../data";
import moment from "moment";

const PlayVideo = ({ videoId }) => {
    const [apiData, setApiData] = useState(null);
    const [channelData, setChannelData] = useState(null);

    const fetchVideoData = async () => {
        const response = await fetch(`https://youtube.googleapis.com/youtube/v3/videos?part=snippet%2CcontentDetails%2Cstatistics&id=${videoId}&key=${API_KEY}`);
        const data = await response.json();
        setApiData(data.items[0]);
    };

    const fetchChannelData = async () => {
        const response = await fetch(`https://youtube.googleapis.com/youtube/v3/channels?part=snippet&id=${apiData.snippet.channelId}&key=${API_KEY}`);
        const data = await response.json();
        setChannelData(data.items[0]);
    };

    useEffect(() => {
        fetchVideoData();
    }, []);

    useEffect(() => {
        fetchChannelData();
    }, [apiData]);

    return (
        <div className='play-video'>
            <iframe src={`https://www.youtube.com/embed/${videoId}?autoplay=1&mute=1`}></iframe>
            <h3>{apiData ? apiData.snippet.title : null}</h3>
            <div className='play-video-info'>
                <p>{apiData ? getTransformedValues(apiData.statistics.viewCount) : null} views &bull; {apiData ? moment(apiData.snippet.publishedAt).fromNow() : null}</p>
                <div>
                    <span>
                        <img src={like} alt="like" />
                        {apiData ? getTransformedValues(apiData.statistics.likeCount) : null}
                    </span>
                    <span>
                        <img src={dislike} alt="dislike" />
                    </span>
                    <span>
                        <img src={share} alt="share" />
                        Share
                    </span>
                </div>
            </div>
            <hr />
            <div className='publisher'>
                <img src="{channelData ? channelData.snippet.thumbnails.default.url : null}" alt="profile picture" />
                <div>
                    <p>{apiData ? apiData.snippet.channelTitle : null}<img src={verified} alt="verified" /></p>
                    <span>
                        {/* {channelData ? channelData.statistics.subscriberCount : null} */} Subscribers
                    </span>
                </div>
                <button>Subscribe</button>
            </div>
            <div className='vid-description'>
                <p>{apiData ? apiData.snippet.description.slice(0, 250) : "No description"}</p>
                <hr />
                <h4>{apiData ? apiData.statistics.commentCount : null} Comments</h4>
                <div className='comment'>
                    <img src={user_profile} alt="user_profile" />
                    <div>
                        <h3>Username <span>1 day ago</span></h3>
                        <p></p>
                        <div className='comment-action'>
                            <img src={like} alt="like" />
                            <span>102</span>
                            <img src={dislike} alt="dislike" />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default PlayVideo;
