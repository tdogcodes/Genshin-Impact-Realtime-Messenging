import { toast } from 'react-toastify'
import './logIn.css'
import { useState } from 'react'

const LogIn = () => {
const [avatar, setAvatar] = useState({file: null, url: ""})

const handleAvatar = (e) => {
  if(e.target.files[0]){
    setAvatar({
      file: e.target.files[0], 
      url: URL.createObjectURL(e.target.files[0])
    })
  }
}

const handleLogin = (e) => { 
  e.preventDefault();
  toast.success("Hellooo")
}

  return (
    <div className='logIn'>
      <div className="item">
        <h2>Welcome back</h2>
          <form onSubmit={handleLogin}>
            <input type='text' placeholder='Email' name="email"/>
            <input type='text' placeholder='Password' name="password"/>
            <button>Sign in</button>
          </form>
      </div>
      <div className="separator"></div>
      <div className="item">
        <h2>Create Account</h2>
        <form>
          <label htmlFor="file">Upload a profile picture
          <img src={avatar.url || "./avatar.png"} alt="" />
          <input type="file" id="file" style={{display: "none"}} onChange={handleAvatar}/></label>
          <input type='text' placeholder='Username ' name="username"/>
          <input type='text' placeholder='Email' name="email"/>
          <input type='password' placeholder='Password' name="password"/>
          <button>Sign Up</button>
        </form>
      </div>
    </div>
  )
}

export default LogIn