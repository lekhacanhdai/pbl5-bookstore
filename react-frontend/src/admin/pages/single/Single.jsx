import "./single.scss";
import Sidebar from "../../components/sidebar/Sidebar";
import Chart from "../../components/chart/Chart";
import List from "../../components/table/Table";

const Single = () => {
  const handleChange = () => {

  }

  return (
    <div className="single">
      <Sidebar />
      <div className="singleContainer">
        <div className="top">
          <div className="left">
            <div className="editButton">Edit</div>
            <h1 className="title">Information</h1>
            <div className="item">
              <img
                src="https://images.pexels.com/photos/733872/pexels-photo-733872.jpeg?auto=compress&cs=tinysrgb&dpr=3&h=750&w=1260"
                alt=""
                className="itemImg"
              />
              <div className="details">
                <h1 className="itemTitle">Lươn Ngọc Đạt</h1>
                <div className="detailItem">
                  <span className="itemKey">Email:</span>
                  <input 
                    type="text" 
                    onChange={handleChange}
                  />
                </div>
                <div className="detailItem">
                  <span className="itemKey">Phone:</span>
                  <input 
                    type="text" 
                    onChange={handleChange}
                  />
                </div>
                <div className="detailItem">
                  <span className="itemKey">Address:</span>
                  <input 
                    type="text" 
                    onChange={handleChange}
                  />
                </div>
                <div className="detailItem">
                  <span className="itemKey">Country:</span>
                  <input 
                    type="text" 
                    onChange={handleChange}
                  />
                </div>
              </div>
            </div>
          </div>
          <div className="right">
            <Chart aspect={3 / 1} title="User Spending ( Last 6 Months)" />
          </div>
        </div>
        <div className="bottom">
          <h1 className="title">Giao dịch gần nhất</h1>
          <List/>
        </div>
      </div>
    </div>
  );
};

export default Single;