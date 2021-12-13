import * as React from 'react';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import Typography from '@mui/material/Typography';
function createData(name, unit, publiser, rest, note) {
    return { name, unit, publiser, rest, note };
  }
  
  const rows = [
    createData('Frozen yoghurt', 159, 6.0, 24, 4.0),
    createData('Ice cream sandwich', 237, 9.0, 37, 4.3),
    createData('Eclair', 262, 16.0, 24, 6.0),
    createData('Cupcake', 305, 3.7, 67, 4.3),
    createData('Gingerbread', 356, 16.0, 49, 3.9),
  ];
  
  export default function FormExam() {
    return (
        <div>
          <Typography style={{marginBottom:50,marginTop:20}} variant="h3" component="h4" align="center">Kho vật tư</Typography>
      <TableContainer component={Paper}>
        <Table sx={{ minWidth: 650 }} aria-label="simple table">
          <TableHead>
            <TableRow>
              <TableCell >Tên</TableCell>
              <TableCell align="center">Tồn kho</TableCell>
              <TableCell align="center">Nhà sản xuất</TableCell>
              <TableCell align="center">Đơn vị</TableCell>
              <TableCell align="center">Ghi chú</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {rows.map((row) => (
              <TableRow
                key={row.name}
                sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
              >
                <TableCell component="th" scope="row" >
                  {row.name}
                </TableCell>
                <TableCell align="center">{row.rest}</TableCell>
                <TableCell align="center">{row.publiser}</TableCell>
                <TableCell align="center">{row.unit}</TableCell>
                <TableCell align="center">{row.note}</TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
        </div>
    );
  }