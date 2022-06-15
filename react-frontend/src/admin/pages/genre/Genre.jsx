import "./genre.scss"
import Sidebar from "../../components/sidebar/Sidebar"
import Datatable from "../../components/genre/datatablegenre/Datatable"

const Genre = () => {
  
  return (
    <div className="list">
      <Sidebar/>
      <div className="listContainer">
        <Datatable/>        
      </div>
    </div>
  )
}

export default Genre