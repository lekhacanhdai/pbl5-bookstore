import { DataGrid } from "@mui/x-data-grid";
import { Link } from "react-router-dom";
import { useState } from "react";
import './datatable.scss';

const DatatableRevenue = () => {

  const userRows = [
    {
      id: 1,
      username: "Snow",
      email: "1snow@gmail.com",
      age: 35,
    },
    {
      id: 2,
      username: "Jamie Lannister",
      email: "2snow@gmail.com",
      age: 42,
    },
    {
      id: 3,
      username: "Lannister",
      email: "3snow@gmail.com",
      age: 45,
    },
    {
      id: 4,
      username: "Stark",
      email: "4snow@gmail.com",
      age: 16,
    },
    {
      id: 5,
      username: "Targaryen",
      email: "5snow@gmail.com",
      age: 22,
    },
    {
      id: 6,
      username: "Melisandre",
      email: "6snow@gmail.com",
      age: 15,
    },
    {
      id: 7,
      username: "Clifford",
      email: "7snow@gmail.com",
      age: 44,
    },
    {
      id: 8,
      username: "Frances",
      email: "8snow@gmail.com",
      age: 36,
    },
    {
      id: 9,
      username: "Roxie",
      email: "snow@gmail.com",
      age: 65,
    },
    {
      id: 10,
      username: "Roxie",  
      email: "snow@gmail.com",
      age: 65,
    },
  ];

  const userColumns = [
    { field: "id", headerName: "ID", width: 70 },
    {
      field: "user",
      headerName: "Title",
      width: 230,
      renderCell: (params) => {
        return (
          <div className="cellWithImg">
            {params.row.username}
          </div>
        );
      },
    },
    {
      field: "email",
      headerName: "Email",
      width: 230,
    },
    {
      field: "price",
      headerName: "Total",
      width: 150,
    },
    {
      field: "target",
      headerName: "Target",
      width: 150,
    },
    {
      field: "lastweek",
      headerName: "Last week",
      width: 150,
    },
    {
      field: "lastmonth",
      headerName: "Last month",
      width: 150,
    },
  ];

  const [data, setData] = useState(userRows);

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
      <DataGrid
        className="datagrid"
        rows={data}
        columns={userColumns.concat(actionColumn)}
        pageSize={10}
        rowsPerPageOptions={[10]}
        disableSelectionOnClick
      />
    </div>
  );
};

export default DatatableRevenue;