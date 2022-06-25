import "./table.scss";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";
import { useEffect, useState } from "react";
import BookService from "../../../service/BookService";

const List = () => {
  const [rows, setRows] = useState([])

  useEffect(() => {
    BookService.getDashboardOrder()
      .then((res) => {
        console.log(res.data)
        setRows(res.data.map((obj) => ({
          orderId: obj.orderId,
          username: obj.username,
          dateOrder: obj.dateOrder,
          amount: obj.amount,
          paymentStatus: obj.paymentStatus ? "Đã thanh toán" : "Chưa thanh toán"
        })))
      })
      .catch(err => console.log(err))
  }, [])

  useEffect(() => {
    rows.forEach(row => {
      row.dateOrder = row.dateOrder.substring(0, 10)
    })
  }, [rows])

  return (
    <TableContainer component={Paper} className="table">
      <Table sx={{ minWidth: 650 }} aria-label="simple table">
        <TableHead>
          <TableRow>
            <TableCell className="tableCell">Id</TableCell>
            <TableCell className="tableCell">Tên </TableCell>
            <TableCell className="tableCell">Thời gian</TableCell>
            <TableCell className="tableCell">Tổng tiền</TableCell>
            <TableCell className="tableCell">Trạng thái</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {rows.map((row) => (
            <TableRow key={row.id}>
              <TableCell className="tableCell">{row.orderId}</TableCell>
              <TableCell className="tableCell"> {row.username}</TableCell>
              <TableCell className="tableCell">{row.dateOrder.substring(0,10)}</TableCell>
              <TableCell className="tableCell">{row.amount}</TableCell>
              <TableCell className="tableCell">{row.paymentStatus}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
};

export default List;