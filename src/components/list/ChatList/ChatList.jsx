import './chatList.css'
import { useState } from 'react'

const ChatList = () => {
  const [addMode, setAddMode] = useState(false)
  return (
    <div className='chatList'>
      <div className="search">
        <div className="searchBar">
          <img src="./search.png" alt="" className="searchIcon" />
          <input type="text" placeholder="Search"/>
        </div>
        <img src={addMode ? "./minus.png" : "./plus.png"} alt="plus" className="add" onClick={()=> setAddMode((prev) => !prev)} />
      </div>
      <div className="item">
        <img src="./avatar.png" alt="avatar" />
        <div className="texts">
          <span>Jane Doe</span>
          <p>Helloo!!!</p>
        </div>
      </div>
      <div className="item">
        <img src="./avatar.png" alt="avatar" />
        <div className="texts">
          <span>Jane Doe</span>
          <p>Helloo!!!</p>
        </div>
      </div>
      <div className="item">
        <img src="./avatar.png" alt="avatar" />
        <div className="texts">
          <span>Jane Doe</span>
          <p>Helloo!!!</p>
        </div>
      </div>
      <div className="item">
        <img src="./avatar.png" alt="avatar" />
        <div className="texts">
          <span>Jane Doe</span>
          <p>Helloo!!!</p>
        </div>
      </div>
      <div className="item">
        <img src="./avatar.png" alt="avatar" />
        <div className="texts">
          <span>Jane Doe</span>
          <p>Helloo!!!</p>
        </div>
      </div>
    </div>
  )
}

export default ChatList