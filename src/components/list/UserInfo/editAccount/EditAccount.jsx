import "./editAccount.css";
import React, { useState } from "react";
import { toast } from "react-toastify";
import { doc, updateDoc } from "firebase/firestore";
import { db } from "../../../../lib/firebase";

const EditAccount = ({ userId, currentBio, currentUsername, onClose }) => {
  const [newBio, setNewBio] = useState(currentBio);
  const [newUsername, setNewUsername] = useState(currentUsername);

  const handleSave = async () => {
    if (newBio.trim() && newUsername.trim()) {
      try {
        const userDocRef = doc(db, "users", userId);
        await updateDoc(userDocRef,
          { bio: newBio,
            username: newUsername
          });
        toast.success("Bio updated successfully!");
        onClose();
      } catch (error) {
        toast.error(`Error updating bio: ${error.message}`);
      }
    } else {
      toast.error("Bio cannot be empty!");
    }
  };

  return (
    <div className="modal">
      <div className="modal-content">
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
