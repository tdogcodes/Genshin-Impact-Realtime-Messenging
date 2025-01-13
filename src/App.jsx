import { useEffect } from 'react';
import Chat from './components/chat/Chat';
import Detail from './components/detail/Detail';
import List from './components/list/List';
import LogIn from './components/login/LogIn';
import Notification from './components/notification/Notification';
import { onAuthStateChanged } from 'firebase/auth';
import { auth } from "./lib/firebase";
import { useUserStore } from "./lib/userStore";
import { useChatStore } from "./lib/chatStore";

const App = () => {
  const { currentUser, isLoading, fetchUserInfo } = useUserStore();
  const { chatId } = useChatStore();

  useEffect(() => {
    const unSub = onAuthStateChanged(auth, (user) => {
      if (user) {
        fetchUserInfo(user?.uid);
      } else {
        fetchUserInfo(null);
      }
    });

    return () => {
      unSub();
    };
  }, [fetchUserInfo]);

  if (isLoading) return <div className="loading">Loading...</div>;

  console.log("Current User:", currentUser);  // Log currentUser
  console.log("Chat ID:", chatId);            // Log chatId

  return (
    <div className="container">
      {currentUser ? (
        <>
          <List />
          {chatId && <Chat />}
          {chatId && <Detail />}
        </>
      ) : (
        <LogIn />
      )}
      <Notification />
    </div>
  );
};

export default App;