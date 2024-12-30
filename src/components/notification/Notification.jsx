import { ToastContainer } from 'react-toastify'
import "react-toastify/dist/ReactToastify.css"

const Notification = () => {
  return (
    <div className='notification'>
        <ToastContainer postition="bottom-right"/>
    </div>
  )
}

export default Notification