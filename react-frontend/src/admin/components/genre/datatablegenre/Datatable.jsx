import "./datatable.scss";
import { DataGrid } from "@mui/x-data-grid";
import { Link } from "react-router-dom";
import { useEffect, useState } from "react";
import BookService from "../../../../service/BookService";

const DatatableGenre = () => {
  const [genres, setGenres] = useState([]);

  useEffect(() => {
    BookService.getAllGenre()
      .then((res) => {
        setGenres(res.data);
      })
      .catch((err) => console.log(err));
  }, []);

  const userColumns = [
    { field: "id", headerName: "ID", flex: 0.5 },
    {
      field: "name",
      headerName: "Thể loại",
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
            <Link to="/admin/user/single">
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
        Thêm thể loại
        <Link to="/admin/genre/new" className="link">
          Thêm
        </Link>
      </div>
      <DataGrid
        className="datagrid"
        rows={genres}
        columns={userColumns.concat(actionColumn)}
        pageSize={10}
        rowsPerPageOptions={[10]}
        disableSelectionOnClick
      />
    </div>
  );
};

export default DatatableGenre;
