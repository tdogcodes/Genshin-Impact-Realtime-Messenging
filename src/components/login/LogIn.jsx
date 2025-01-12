import { toast } from 'react-toastify'
import './logIn.css'
import { useState } from 'react'
import { createUserWithEmailAndPassword} from 'firebase/auth'
import { auth } from "../../lib/firebase";  // Import the auth instance


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

const handleRegister = async (e) => {
  e.preventDefault();
  const formData = new FormData(e.target);
  const {username, email, password} = Object.fromEntries(formData);
  console.log(username);
  try{
    const user = await createUserWithEmailAndPassword( auth, email, password);
    console.log("User registered:", user); 
  }catch(err){
    console.log(err);
    toast.error(err.message);
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
        <form onSubmit={handleRegister}>
          <label htmlFor="file">Upload a profile picture
            <img src={avatar.url || "./avatar.png"} alt="" />
            <input type="file" id="file" style={{display: "none"}} onChange={handleAvatar}/>
          </label>
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