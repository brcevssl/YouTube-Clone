import React from 'react';
import "./PlayVideo.css";
import video1 from "../../assets/video.mp4";
import like from "../../assets/like.png";
import dislike from "../../assets/dislike.png";
import share from "../../assets/share.png";
import jack from "../../assets/jack.png";
import user_profile from "../../assets/user_profile.jpg";
import verified from "../../assets/verified.png";

const PlayVideo = () => {
  return (
    <div className='play-video'>
      <video src={video1} controls autoPlay muted></video>
      <h3>Video title</h3>
      <div className='play-video-info'>
        <p>15 657 views &bull; 2 days ago</p>
        <div>
          <span>
            <img src={like} alt="like" />
            1563
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
        <img src={jack} alt="jack" />
        <div>
          <p>Jack <img src={verified} alt="verified" /></p>
          <span>
            1M Subscribers
          </span>
        </div>
        <button>Subscribe</button>
      </div>
      <div className='vid-description'>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Doloremque, quisquam.</p>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Doloremque, quisquam.</p>
        <hr />
        <h4>130 Comments</h4>
        <div className='comment'>
          <img src={user_profile} alt="user_profile" />
          <div>
            <h3>Username <span>1 day ago</span></h3>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Doloremque, quisquam.</p>
            <div className='comment-action'>
              <img src={like} alt="like" />
              <span>102</span>
              <img src={dislike} alt="dislike" />
            </div>
          </div>
        </div>
        <div className='comment'>
          <img src={user_profile} alt="user_profile" />
          <div>
            <h3>Username <span>1 day ago</span></h3>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Doloremque, quisquam.</p>
            <div className='comment-action'>
              <img src={like} alt="like" />
              <span>102</span>
              <img src={dislike} alt="dislike" />
            </div>
          </div>
        </div>
        <div className='comment'>
          <img src={user_profile} alt="user_profile" />
          <div>
            <h3>Username <span>1 day ago</span></h3>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Doloremque, quisquam.</p>
            <div className='comment-action'>
              <img src={like} alt="like" />
              <span>102</span>
              <img src={dislike} alt="dislike" />
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default PlayVideo
