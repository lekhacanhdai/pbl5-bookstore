import "./revenue.scss"
import Sidebar from "../../components/sidebar/Sidebar"
import Datatable from "../../components/datatablerevenue/datatable/Datatable"

const Revenue = () => {
  return (
    <div className="list">
      <Sidebar/>
      <div className="listContainer">
        <Datatable/>
      </div>
    </div>
  )
}

export default Revenue