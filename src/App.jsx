import Chat from './components/chat/Chat';
import Detail from './components/detail/Detail';
import List from './components/list/List';
import LogIn from './components/login/LogIn';

const App = () => {

  const user = true;

  return (
    <div className='container'>
      { user ?
      (<>
        <List />
        <Chat />
        <Detail />
      </>) : (<LogIn />) }
    </div>
  )
}

export default App;