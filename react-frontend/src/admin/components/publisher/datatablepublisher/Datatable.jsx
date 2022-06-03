import "./datatable.scss";
import { DataGrid } from "@mui/x-data-grid";
import { Link } from "react-router-dom";
import { useEffect, useState } from "react";
import BookService from "../../../../service/BookService";
import NewPublisher from "../newpublisher/NewPublisher";
import DetailPublisher from "../detailpublisher/DetailPublisher";

const DatatablePublisher = () => {

  const [publishers, setPublisher] = useState([]);
  const [openmodaladd, setOpenmodalAdd] = useState(false);
  const [openmodalupdate, setOpenmodalUpdate] = useState(false);


  const handleModalAdd = () => {
    setOpenmodalAdd(true);
  };
  
  const handleModalView = () => {
    setOpenmodalUpdate(true);
  };

  useEffect(() => {
    BookService.getAllPublisher()
      .then((res) => {
        setPublisher(res.data);
      })
      .catch((err) => console.log(err));
  }, []);

  const userColumns = [
    { field: "id", headerName: "ID", flex: 0.5 },
    {
      field: "name",
      headerName: "Tên nhà xuất bản",
      flex: 12.5
    },
  ];

  const [data, setData] = useState();

  const handleDelete = (id) => {
    setData(data.filter((item) => item.id !== id));
  };

  const actionColumn = [
    {
      field: "action",
      headerName: "Hành động",
      flex: 1.5,
      renderCell: (params) => {
        return (
          <div className="cellAction">
              <div className="viewButton" onClick={handleModalView}>
                View</div>
              <div
              className="deleteButton"
              onClick={() => handleDelete(params.row.id)}
            >
              Delete
            </div>
          </div>
        );
      },
    },
  ];

  return (
    <div className="datatable">
      <div className="datatableTitle">
        Thêm nhà xuất bản
        <button className="link" onClick={handleModalAdd}>
          Thêm  
        </button>
        {openmodaladd && <NewPublisher closeModal={setOpenmodalAdd} />}
      </div>
        {openmodalupdate && <DetailPublisher closeModal={setOpenmodalUpdate} />}
      <DataGrid
        className="datagrid"
        rows={publishers}
        columns={userColumns.concat(actionColumn)}
        pageSize={10}
        rowsPerPageOptions={[10]}
        disableSelectionOnClick
      />
    </div>
  );
};

export default DatatablePublisher;
