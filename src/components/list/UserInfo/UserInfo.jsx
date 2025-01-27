import "./userInfo.css"
import { useUserStore } from "../../../lib/userStore";
import { getAuth, signOut } from "../../../lib/firebase"
import { toast } from "react-toastify";
import React, { useState } from "react";
import EditAccount from './editAccount/EditAccount';

const Userinfo = () => {

  const auth = getAuth();
  const { currentUser } = useUserStore();
  const [isEditing, setIsEditing] = useState(false);

  function handleSignOut() {
    signOut(auth)
      .then(() => {
        toast.success("You have been signed out.")
      })
      .catch((error) => {
        toast.error(`Error signing out:${error.message}`);
      });
  } 

  return (
    <div className='userInfo'>
      <div className="user">
        <img src={currentUser.avatar || "./avatar.png"} alt="" />
        <h2>{currentUser.username}</h2>
      </div>
      <div className="icons">
        <img src={isEditing ? "./minus.png" : "./edit.png"} alt="" onClick={()=>setIsEditing(!isEditing)}/>
        <img src="./signOut.png" alt="" onClick={handleSignOut} className="logOut"/>
      </div>
        {isEditing && (
        <EditAccount
          userId={currentUser.id}
          currentUsername={currentUser.username || ""}
          currentBio={currentUser.bio || ""}
          onClose={() => setIsEditing(!isEditing)}
        />
      )}
    </div>
  )
}

export default Userinfo