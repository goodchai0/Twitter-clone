import React from 'react'
import './Feed.css'
import TweetBox from './TweetBox'
import Post from './Post'
function Feed() {
  return (
    <div className='feed'>
        <div className='feed__header'>
            <h2>Home</h2>
        </div>   

        {/* tweetbox */}
        <TweetBox/>
        <Post displayName="Amit Kewot"
          username="AmitKewot"
          verified={true}
          text="YOO its working"
          image="https://storage.googleapis.com/gweb-uniblog-publish-prod/original_images/tenor_1.gif"
          avatar="https://pbs.twimg.com/profile_images/592668340553920512/1_ODVnxf_400x400.jpg"
        />
        <Post/>
        <Post/>
        <Post/>
    </div>
  )
}

export default Feed