import { Avatar, Button } from '@material-ui/core'
import React from 'react'
import "./TweetBox.css"

function TweetBox() {
  return (
    <div className='tweetBox'>
        <form>
            <div className='tweetBox__input'>
                <Avatar src="https://pbs.twimg.com/profile_images/592668340553920512/1_ODVnxf_400x400.jpg" />
                <input placeholder="What's Happening?" type="text" />
                
            </div>
            <input placeholder="Enter Image URL" className="tweetBox__imageInput" type="text" />
            <Button className='tweetBox__tweetButton'>Tweet</Button>
        </form>
    </div>
  )
}

export default TweetBox