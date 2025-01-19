import "./editAccount.css";
import React, { useState } from "react";
import { toast } from "react-toastify";
import { doc, updateDoc } from "firebase/firestore";
import { db } from "../../../../lib/firebase";
import upload from "../../../../lib/upload";

const EditAccount = ({ userId, currentBio, currentUsername, currentAvatar, onClose }) => {
  const [newBio, setNewBio] = useState(currentBio);
  const [newUsername, setNewUsername] = useState(currentUsername);
  const [newAvatar, setNewAvatar] = useState(null);
  const [avatarPreview, setAvatarPreview] = useState(currentAvatar || "./avatar.png");

  const handleSave = async () => {
    if (newBio.trim() && newUsername.trim()) {
      try {
        let avatarUrl = currentAvatar;

        if (newAvatar) {
          avatarUrl = await upload(newAvatar);
        }

        const userDocRef = doc(db, "users", userId);
 
        const updateData = {
          bio: newBio,
          username: newUsername,
        };
        
        if (avatarUrl) {
          updateData.avatar = avatarUrl;
        }

        await updateDoc(userDocRef, updateData);

        toast.success("Profile updated successfully!");
        onClose();
      } catch (error) {
        toast.error(`Error updating profile: ${error.message}`);
      }
    } else {
      toast.error("Username and bio cannot be empty!");
    }
  };

  const handleAvatarChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      setNewAvatar(file);
      setAvatarPreview(URL.createObjectURL(file));
    }
  };

  return (
    <div className="modal">
      <div className="modal-content">
      <p>Edit Profile Pic</p>
        <img src={avatarPreview} alt="Profile" />
        <label for="uploadImg"> Upload Image
        <input id="uploadImg" type="file" accept="image/*" onChange={handleAvatarChange}/></label>
      <p>Edit Username</p>
        <textarea
          value={newUsername}
          onChange={(e) => setNewUsername(e.target.value)}
          placeholder="Update your username..."
        />
        <p>Edit Bio</p>
        <textarea
          value={newBio}
          onChange={(e) => setNewBio(e.target.value)}
          placeholder="Update your bio..."
        />
        <div className="modal-actions">
          <button className="save" onClick={handleSave}>Save</button>
          <button className="close" onClick={onClose}>Close</button>
        </div>
      </div>
    </div>
  );
};

export default EditAccount;
