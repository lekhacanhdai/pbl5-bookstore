import Navbar from "../../components/navbar/Narbav";
import Sidebar from "../../components/sidebar/Sidebar";
import "./order.scss";

const Order = () => {
  return (
    <div className="order">
      <Sidebar />
      <div className="orderContainer">
        <Navbar />
      </div>
    </div>
  )
}

export default Order