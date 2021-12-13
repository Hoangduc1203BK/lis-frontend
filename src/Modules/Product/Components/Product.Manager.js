import TextField from "@mui/material/TextField";
import Autocomplete from "@mui/material/Autocomplete";
import Button from "@mui/material/Button";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";
import Typography from "@mui/material/Typography";
import AdapterDateFns from "@mui/lab/AdapterDateFns";
import LocalizationProvider from "@mui/lab/LocalizationProvider";
import DateTimePicker from "@mui/lab/DateTimePicker";
import { useState,useEffect } from "react";
const top100Films = [{ label: "Diluent" }, { label: "Lyse" }];
function createData(name, inventory, useful_used, used, another, rest) {
  return { name, inventory, useful_used, used, another, rest };
}

const rows = [
  createData("Diluent", 200, 100, 50, 20),
  createData("Lyse", 200, 100, 50, 20),
];
export default function ProductManager() {
  let [start, setStart] = useState(new Date());
  const [end, setEnd] = useState(new Date());
  useEffect(()=>{
    console.log(start.toLocaleDateString(),start.toLocaleTimeString());
  },[start.toLocaleTimeString()])
  return (
    <div>
      <Typography
        style={{ marginBottom: 50, marginTop: 20 }}
        variant="h3"
        component="h4"
        align="center"
      >
        Quản lý vật tư tiêu hao
      </Typography>
      <ul
        style={{
          display: "flex",
          justifyContent: "space-around",
          marginBottom: 50,
        }}
      >
        <Autocomplete
          disablePortal
          id="combo-box-demo"
          options={top100Films}
          sx={{ width: 200 }}
          renderInput={(params) => (
            <TextField {...params} label="Tên hóa chất" />
          )}
        />
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
        <Button variant="contained">Tìm kiếm</Button>
      </ul>
      <TableContainer component={Paper}>
        <Table sx={{ minWidth: 650 }} aria-label="simple table">
          <TableHead>
            <TableRow>
              <TableCell>Tên hóa chất</TableCell>
              <TableCell align="center">Tồn kho</TableCell>
              <TableCell align="center">Tiêu hao hữu ích</TableCell>
              <TableCell align="center">Tiêu hao vô ích</TableCell>
              <TableCell align="center">Trường hợp khác</TableCell>
              <TableCell align="center">Lượng còn lại</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {rows.map((row) => (
              <TableRow
                key={row.name}
                sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
              >
                <TableCell component="th" scope="row">
                  {row.name}
                </TableCell>
                <TableCell align="center">{row.used}</TableCell>
                <TableCell align="center">{row.inventory}</TableCell>
                <TableCell align="center">{row.useful_used}</TableCell>
                <TableCell align="center">{row.used}</TableCell>
                <TableCell align="center">{row.another}</TableCell>
                <TableCell align="center">{row.rest}</TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
    </div>
  );
}
