import './chat.css'
import EmojiPicker from 'emoji-picker-react'
import {React, useState} from 'react'

const Chat = () => {
const [open, setOpen] = useState(false);
const [text, setText] = useState("");

const handleEmoji = e => {
  setText(prev => prev + e.emoji);
  setOpen(false);
}

  return (
    <div className='chat'>
      <div className="top">
        <div className="user">
          <img src="./avatar.png" alt="userImg"/>
          <div className="texts">
            <span>Jane Doe</span>
            <p>Lorem ipsum dolor sit amet</p>
          </div>
        </div>
        <div className="icons">
          <img src="./phone.png"/>
          <img src="./video.png"/>
          <img src="./info.png"/>
        </div>
      </div>
      <div className="center">
        <div className="message">
          <img src="./avatar.png" alt="avatar"/>
          <div className="texts">
            <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Tempore non doloremque error adipisci aperiam, blanditiis, inventore maiores porro quaerat debitis consequatur, ducimus autem explicabo odio officiis. Pariatur recusandae itaque saepe!</p>
            <span>1 min ago</span>
          </div>
        </div>
        <div className="message own">
          <div className="texts">
            <img src=""/>
            <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Tempore non doloremque error adipisci aperiam, blanditiis, inventore maiores porro quaerat debitis consequatur, ducimus autem explicabo odio officiis. Pariatur recusandae itaque saepe!</p>
            <span>1 min ago</span>
          </div>
        </div>
        <div className="message">
          <img src="./avatar.png" alt="avatar"/>
          <div className="texts">
            <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Tempore non doloremque error adipisci aperiam, blanditiis, inventore maiores porro quaerat debitis consequatur, ducimus autem explicabo odio officiis. Pariatur recusandae itaque saepe!</p>
            <span>1 min ago</span>
          </div>
        </div>
        <div className="message own">
          <div className="texts">
            <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Tempore non doloremque error adipisci aperiam, blanditiis, inventore maiores porro quaerat debitis consequatur, ducimus autem explicabo odio officiis. Pariatur recusandae itaque saepe!</p>
            <span>1 min ago</span>
          </div>
        </div>
      </div>
      <div className="bottom">
        <div className="icons">
          <img src="./img.png" alt="img"/>
          <img src="./camera.png" alt="img"/>
          <img src="./mic.png" alt="img"/>
        </div>
        <input type="text" placeholder="Type a message..." value={text} onChange={(e)=>setText(e.target.value)}/>
        <div className="emoji">
          <img src="./emoji.png" alt="emoji" onClick={()=>setOpen(!open)}/>
          <div className="picker">
            <EmojiPicker open={open} onEmojiClick={handleEmoji}/>
          </div>
        </div>
        <button className="sendButton">Send</button>
      </div>
    </div>
  )
}

export default Chat