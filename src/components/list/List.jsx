import './list.css'
import UserInfo from './UserInfo/UserInfo.jsx'
import ChatList from './ChatList/ChatList.jsx'

const List = () => {
  return (
    <div className='list'>
      <UserInfo />
      <ChatList />
    </div>
  )
}

export default List