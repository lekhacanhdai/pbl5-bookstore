import Sidebar from "../../components/sidebar/Sidebar";
import "./order.scss";
import Datatable from "../../components/order/datatable/Datatable"

const Order = () => {
  return (
    <div className="order">
      <Sidebar />
      <div className="orderContainer">
      <Datatable/>
      </div>
    </div>
  )
}

export default Order