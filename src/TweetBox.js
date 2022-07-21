import { Avatar, Button } from '@material-ui/core'
import React,{useState}from 'react'
import "./TweetBox.css"
import db from "./firebase"

function TweetBox() {
  const [tweetMessage,setTweetMessage]=useState('');
  const [tweetImage,setTweetImage]=useState('');

  const sendTweet=e=>{
    e.preventDefault();

    db.collection('posts').add({
      displayName:"Amit Kewot",
      username:"AmitKewot",
      verified:true,
      text:tweetMessage,
      image:tweetImage,
      avatar:"https://pbs.twimg.com/profile_images/592668340553920512/1_ODVnxf_400x400.jpg",
    })

    setTweetImage("");
    setTweetMessage("");
  }
  return (
    <div className='tweetBox'>
        <form>
            <div className='tweetBox__input'>
                <Avatar src="https://pbs.twimg.com/profile_images/592668340553920512/1_ODVnxf_400x400.jpg" />
                <input
                 onChange={(e)=>setTweetMessage(e.target.value)}
                 value={tweetMessage}
                 placeholder="What's Happening?" 
                 type="text" 

                 />
                
            </div>
            <input 
              value={tweetImage}
              placeholder="Opptional: Enter Image URL" 
              className="tweetBox__imageInput" 
              onChange={(e)=>setTweetImage(e.target.value)}
              type="text" 
            />
            <Button onClick={sendTweet} type="submit" className='tweetBox__tweetButton'>Tweet</Button>
        </form>
    </div>
  )
}

export default TweetBox