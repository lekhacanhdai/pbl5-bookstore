import "./genre.scss"
import Sidebar from "../../components/sidebar/Sidebar"
import Navbar from "../../components/navbar/Narbav"
import Datatable from "../../components/datatablegenre/Datatable"



const Genre = () => {
  
  return (
    <div className="list">
      <Sidebar/>
      <div className="listContainer">
        <Navbar/>
        <Datatable/>        
      </div>
    </div>
  )
}

export default Genre