import "./editAccount.css";
import React, { useState } from "react";
import { toast } from "react-toastify";
import { doc, updateDoc } from "firebase/firestore";
import { db } from "../../../../lib/firebase";

const EditAccount = ({ userId, currentBio, onClose }) => {
  const [newBio, setNewBio] = useState(currentBio);

  const handleSave = async () => {
    if (newBio.trim()) {
      try {
        const userDocRef = doc(db, "users", userId);
        await updateDoc(userDocRef, { bio: newBio });
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
