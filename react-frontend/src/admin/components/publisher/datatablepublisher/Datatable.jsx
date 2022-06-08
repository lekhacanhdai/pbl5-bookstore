import { DataGrid } from "@mui/x-data-grid";
import { Link } from "react-router-dom";
import { useEffect, useState } from "react";
import BookService from "../../../../service/BookService";
import NewPublisher from "../newpublisher/NewPublisher";
import DetailPublisher from "../detailpublisher/DetailPublisher";

const DatatablePublisher = () => {

  const [publishers, setPublishers] = useState([]);
  const [publisher, setPublisher] = useState([]);
  const [openmodaladd, setOpenmodalAdd] = useState(false);
  const [openmodalupdate, setOpenmodalUpdate] = useState(false);

  console.log(openmodalupdate)


  const handleModalAdd = () => {
    setOpenmodalAdd(true);
  };
  
  // useEffect(() => {

  // },[])

  const handleModalView = async (id) => {
    // await BookService.getPublisherbyId(id)
    // .then((res) => {
    //   setOpenmodalUpdate(true);
    //   console.log(openmodalupdate);
    //   setPublisher(res.data)
    //   console.log(res.data);
    // })
    // console.log(openmodalupdate)
    setOpenmodalUpdate(true);
  };

  const handleDelete = async (id) =>{
    await BookService.deletePublisherById(id);
    setPublishers(publishers.filter(item => item.id != id));
  }
  
  useEffect(() => {
    BookService.getAllPublisher()
      .then((res) => {
        setPublishers(res.data);
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

  const actionColumn = [
    {
      field: "action",
      headerName: "Hành động",
      flex: 1.5,
      renderCell: (params) => {
        return (
          <div className="cellAction">
              <div className="viewButton" onClick={() => handleModalView(params.row.id)}>
                Xem</div>
              <div
              className="deleteButton"
              onClick={() => handleDelete(params.row.id)}
            >
              Xóa
            </div>
          </div>
        );
      },
    },
  ];

  return (
    <div className="datatable">
      {openmodalupdate && <DetailPublisher 
        closeModal={setOpenmodalUpdate} 
        name={publisher.name}
        id={publisher.id}
      />}
      <div className="datatableTitle">
        Thêm nhà xuất bản
        <button 
          className="link" 
          onClick={handleModalAdd}
        >
          Thêm  
        </button>
        {openmodaladd && <NewPublisher closeModal={setOpenmodalAdd} />}
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
