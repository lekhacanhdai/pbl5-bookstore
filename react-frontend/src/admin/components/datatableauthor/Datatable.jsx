import "./datatable.scss";
import { DataGrid } from "@mui/x-data-grid";
import { Link } from "react-router-dom";
import { useEffect, useState } from "react";
import BookService from "../../../service/BookService";
import NewAuthor from "../newauthor/NewAuthor";
import DetailAuthor from "../detailauthor/Detailauthor";

const DatatableAuthor = () => {

  const [authors, setAuthors] = useState([]);
  const [openmodaladd, setOpenmodalAdd] = useState(false);
  const [openmodalupdate, setOpenmodalUpdate] = useState(false);

  const handleModalAdd = () => {
    setOpenmodalAdd(true);
  }

  const handleModalUpdate = () => {
    setOpenmodalUpdate(true);
  }

  useEffect(() => {
      BookService.getAllAuthor()
      .then((res) => {
          setAuthors(res.data)
          console.log(res.data)
      })
      .catch((err) => console.log(err));
  },[]);

  const userColumns = [
    { field: "id", headerName: "ID", width: 70 },
    {
        field: "companyName",
        headerName: "Company Name",
        width: 300,
      },
    {
      field: "firstName",
      headerName: "First Name",
      width: 250,
    },
    {
      field: "lastName",
      headerName: "Last Name",
      width: 280,
    },
  ];
  

  const handleDelete = (id) => {
    setAuthors(authors.filter((item) => item.id !== id));
  };

  const actionColumn = [
    {
      field: "action",
      headerName: "Hành động",
      width: 200,
      renderCell: (params) => {
        return (
          <div className="cellAction">
              <div className="viewButton" onClick={handleModalUpdate}>View</div>
              
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
        Add New Author
        <button className="link" onClick={handleModalAdd}>Add New</button>
        {openmodaladd && <NewAuthor closeModal={setOpenmodalAdd}/>}
      </div>
      {openmodalupdate && <DetailAuthor closeModal={setOpenmodalUpdate}/>}
      <DataGrid
        className="datagrid"
        rows={authors}
        columns={userColumns.concat(actionColumn)}
        pageSize={10}
        rowsPerPageOptions={[10]}
        disableSelectionOnClick
      />
    </div>
  );
};

export default DatatableAuthor;