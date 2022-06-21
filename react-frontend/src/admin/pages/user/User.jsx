import "./user.scss"
import Sidebar from "../../components/sidebar/Sidebar"
import Datatable from "../../components/datatableusers/Datatable"

const User = () => {
  return (
    <div className="list">
      <Sidebar/>
      <div className="listContainer">
        <Datatable/>
      </div>
    </div>
  )
}

export default User