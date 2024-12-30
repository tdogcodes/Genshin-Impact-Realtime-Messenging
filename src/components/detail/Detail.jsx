import './detail.css'

const Detail = () => {
  return (
    <div className='detail'>
      <div className="user">
        <img src="./avatar.png" alt="avatar" />
        <h2>Jane Doe</h2>
        <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit.</p>
      </div>
      <div className="info">
        <div className="option">
          <div className="title">
            <span>Chat Settings</span>
            <img src="./arrowUp.png" alt="settings" />
          </div>
        </div>
        <div className="option">
          <div className="title">
            <span>Privacy & Help</span>
            <img src="./arrowUp.png" alt="settings" />
          </div>
        </div>
        <div className="option">
          <div className="title">
            <span>Shared Photos</span>
            <img src="./arrowDown.png" alt="settings" />
          </div>
          <div className="photos">
            <div className="photoItem">
              <div className="photoDetail">
                <img src="./avatar.png" alt="photo" />
                <span>Photo Title</span>
              </div>
              <img src="./download.png" alt="download" className="icon" />
            </div>
            <div className="photoItem">
              <div className="photoDetail">
                <img src="./avatar.png" alt="photo" />
                <span>Photo Title</span>
              </div>
              <img src="./download.png" alt="download" className="icon" />
            </div>
            <div className="photoItem">
              <div className="photoDetail">
                <img src="./avatar.png" alt="photo" />
                <span>Photo Title</span>
              </div>
              <img src="./download.png" alt="download" className="icon"/>
            </div>
          </div>
        </div>
        <div className="option">
          <div className="title">
            <span>Shared Files</span>
            <img src="./arrowUp.png" alt="settings" />            
          </div>
        </div>
        <button>Block User</button>
        <button className="logOut">Log Out</button>
      </div>
    </div>
  )
}

export default Detail