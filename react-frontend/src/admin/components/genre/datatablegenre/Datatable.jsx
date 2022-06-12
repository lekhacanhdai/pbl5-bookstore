import "./datatable.scss";
import { DataGrid } from "@mui/x-data-grid";
import { Link } from "react-router-dom";
import { useEffect, useState } from "react";
import BookService from "../../../../service/BookService";
import NewGenre from "../newgenre/NewGenre";

const DatatableGenre = () => {

  const [genres, setGenres] = useState([]);
  const [genre, setGenre] = useState([])
  const [openmodaladd, setOpenmodalAdd] = useState(false);

  const handleModalAdd = () => {
    setOpenmodalAdd(true)
  }
  
  const handleModalView = () => {

  }
  
  const handleDelete =  async (id) => {
    await BookService.deleteAuthorById(id);
    setGenres(genres.filter(item => item.id != id));
  };

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


  const actionColumn = [
    {
      field: "action",
      headerName: "Hành động",
      flex: 1.5,
      renderCell: (params) => {
        return (
          <div className="cellAction">
            <div className="viewButton" onClick={() => handleModalView(params.row.id)}>
              View
            </div>

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
        Quản lí danh mục
        <button className="link" onClick={handleModalAdd}>
          Thêm 
        </button>
        {openmodaladd && <NewGenre
          closeModal={setOpenmodalAdd}
          name={genre.name}
        />}
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
