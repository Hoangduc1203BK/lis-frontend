import React from "react";
import { Link } from "react-router-dom";
import Button from "@mui/material/Button";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";
import Typography from "@mui/material/Typography";
import  "./FormMachine.scss";
import TextField from "@mui/material/TextField";
import AdapterDateFns from "@mui/lab/AdapterDateFns";
import LocalizationProvider from "@mui/lab/LocalizationProvider";
import DateTimePicker from "@mui/lab/DateTimePicker";
import Service from "../Shared/Machine.service";
import { useState,useEffect,useMemo } from "react";
import Handle from './Handel';

import { CoPresentTwoTone } from "@mui/icons-material";
const lib=new Handle();
export default function FormMachine() {
  const [start, setStart] = useState(()=>{
    let date = new Date();
    let month=date.getMonth();
    let year=date.getFullYear();
    return new Date(year,month,'01')
  });
  const [end, setEnd] = useState(new Date());
  const [rows, setRow] = useState([])
  console.log('hello')
  useMemo(async()=>{
    const response = await Service.getImage(lib.ConvertDate(start.toLocaleDateString(),start.toLocaleTimeString()),lib.ConvertDate(end.toLocaleDateString(),end.toLocaleTimeString()));
    setRow(response.data)
  },[])

  const handleClick=async()=>{
    const response = await Service.getImage(lib.ConvertDate(start.toLocaleDateString(),start.toLocaleTimeString()),lib.ConvertDate(end.toLocaleDateString(),end.toLocaleTimeString()));
    setRow(response.data)}


  return (
    <div>
      <Typography
        style={{ marginBottom: 50, marginTop: 20 }}
        variant="h3"
        component="h4"
        align="center"
      >
        Quản lý máy lâm sàng
      </Typography>
      <ul style={{ display: "flex", justifyContent: "space-around" }}>
        <Button variant="contained">Filter</Button>
        <LocalizationProvider dateAdapter={AdapterDateFns}>
          <DateTimePicker
            label="Start"
            value={start}
            onChange={(newValue) => {
              setStart(newValue);
            }}
            renderInput={(params) => <TextField {...params} />}
          />
        </LocalizationProvider>
        <LocalizationProvider dateAdapter={AdapterDateFns}>
          <DateTimePicker
            label="End"
            value={end}
            onChange={(newValue) => {
              setEnd(newValue);
            }}
            renderInput={(params) => <TextField {...params} />}
          />
        </LocalizationProvider>
        <Button onClick={handleClick} variant="contained">Tìm kiếm</Button>
      </ul>
      <TableContainer component={Paper}>
        <Table sx={{ minWidth: 650 }} aria-label="simple table">
          <TableHead>
            <TableRow>
              <TableCell>Tên máy</TableCell>
              <TableCell align="center">Tồn kho</TableCell>
              <TableCell align="center">Lần cập nhật cuối cùng</TableCell>
            </TableRow>
          </TableHead>
          <TableBody
            className="table"
          >
            {/* {rows.map((row) => (
              <TableRow
                key={row.name}
                sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
              >
                <TableCell component="th" scope="row">
                  <Link to="/app/machine/image">{row.name}</Link>
                </TableCell>
                <TableCell align="center">{row.used}</TableCell>
                <TableCell align="center">{row.lastUpdated}</TableCell>
              </TableRow>
            ))} */}
            {rows.length!=0 &&(
              <TableRow
                sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
              >
                <TableCell component="th" scope="row">
                  <Link to="/app/machine/image">X-Quang</Link>
                </TableCell>
                <TableCell align="center">159</TableCell>
                <TableCell align="center">{lib.ReturnDate(rows[0].ctime)} : {rows.length} ảnh</TableCell>
              </TableRow>
            )}
          </TableBody>
        </Table>
      </TableContainer>
    </div>
  );
}
