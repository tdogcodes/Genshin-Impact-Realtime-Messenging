import { toast } from 'react-toastify'
import './logIn.css'
import { useState } from 'react'
import { createUserWithEmailAndPassword} from 'firebase/auth'
import { auth, db } from "../../lib/firebase"
import { doc, setDoc } from 'firebase/firestore'
import upload from "../../lib/upload";

const LogIn = () => {
const [avatar, setAvatar] = useState({file: null, url: ""})
const [loading, setLoading] = useState(false);

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
  setLoading(true);
  const formData = new FormData(e.target);
  const {username, email, password} = Object.fromEntries(formData);
  try {
    const res = await createUserWithEmailAndPassword(auth, email, password);
    const imgUrl = await upload(avatar.file);

    await setDoc(doc(db, "users", res.user.uid), {
      username,
      email,
      avatar: imgUrl,
      id: res.user.uid,
      blocked: [],
    });

    await setDoc(doc(db, "userchats", res.user.uid), {
      chats: [],
    });

  toast.success("Account Created! You can log in now.");

  }catch(err){
    console.log(err);
    toast.error(err.message);
  } finally{
    setLoading(false);
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
            <button disabled={loading}>{loading ? "Loading" : "Sign in"}</button>
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
          <button disabled={loading}>{loading ? "Loading" : "Sign up"}</button>
        </form>
      </div>
    </div>
  )
}

export default LogIn