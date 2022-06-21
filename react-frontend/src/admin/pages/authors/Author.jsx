import "./author.scss"
import Sidebar from "../../components/sidebar/Sidebar"
import Datatable from "../../components/author/datatableauthor/Datatable"

const Author = () => {
  return (
    <div className="list">
      <Sidebar/>
      <div className="listContainer">
        <Datatable />
      </div>
    </div>
  )
}

export default Author