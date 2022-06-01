import "./datatable.scss";
import { DataGrid } from "@mui/x-data-grid";
import { Link } from "react-router-dom";
import { useEffect, useState } from "react";
import BookService from "../../../service/BookService";

const DatatablePublisher = () => {

    const [publishers, setPublisher] = useState([]);

    useEffect(() => {
        BookService.getAllPublisher()
        .then((res) => {
            setPublisher(res.data)
        })
        .catch((err) => console.log(err));
    },[])

  const userColumns = [
    { field: "id", headerName: "ID", width: 70 },
    {
      field: "name",
      headerName: "Name publisher",
      width: 200,
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
      width: 200,
      renderCell: (params) => {
        return (
          <div className="cellAction">
            <Link to="/admin/user/single" >
              <div className="viewButton">View</div>
            </Link>
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
        Add New Publisher
        <Link to="/admin/publisher/new" className="link">
          Add New
        </Link>
      </div>
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