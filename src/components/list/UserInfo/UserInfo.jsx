import "./userInfo.css"
import { useUserStore } from "../../../lib/userStore";
import { getAuth, signOut} from "../../../lib/firebase"
import { toast } from "react-toastify";

const Userinfo = () => {

  const auth = getAuth();
  const { currentUser } = useUserStore();

  function handleSignOut() {
    signOut(auth)
      .then(() => {
        toast.success("You have been signed out.")
        // Optional: Redirect to a login page or show a message

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
        <img src="./more.png" alt="" />
        <img src="./edit.png" alt="" />
        <img src="./signOut.png" alt="" onClick={handleSignOut}/>
      </div>
    </div>
  )
}

export default Userinfo