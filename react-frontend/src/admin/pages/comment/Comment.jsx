import "./comment.scss"
import Sidebar from "../../components/sidebar/Sidebar";
import Navbar from "../../components/navbar/Narbav";

const Comment = () => {
  return (
    <div className="comment">
        <Sidebar />
        <div className="commentContainer">
            <Navbar />
        </div>
    </div>
  )
}

export default Comment