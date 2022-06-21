import "./book.scss"
import Sidebar from "../../components/sidebar/Sidebar"
import Datatable from "../../components/datatablebooks/Datatable"

const Book = () => {
  return (
    <div className="list">
      <Sidebar/>
      <div className="listContainer">
        <Datatable/>        
      </div>
    </div>
  )
}

export default Book