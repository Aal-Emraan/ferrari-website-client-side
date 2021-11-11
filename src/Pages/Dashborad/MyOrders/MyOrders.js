import React, { useEffect, useState } from 'react';
import useAuth from '../../../hooks/useAuth';
import { styled } from '@mui/material/styles';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell, { tableCellClasses } from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import { Button } from '@mui/material';

const StyledTableCell = styled(TableCell)(({ theme }) => ({
    [`&.${tableCellClasses.head}`]: {
      backgroundColor: theme.palette.common.black,
      color: theme.palette.common.white,
    },
    [`&.${tableCellClasses.body}`]: {
      fontSize: 14,
    },
  }));
  
  const StyledTableRow = styled(TableRow)(({ theme }) => ({
    '&:nth-of-type(odd)': {
      backgroundColor: theme.palette.action.hover,
    },
    // hide last border
    '&:last-child td, &:last-child th': {
      border: 0,
    },
  }));

const MyOrders = () => {
    const {user} = useAuth();
    const [myOrders, setMyOrders] = useState([]);
    useEffect(() => {
        fetch(`http://localhost:5000/myorders/${user.email}`)
        .then(res => res.json())
        .then(data => setMyOrders(data))
    },[])

    const deleteOrder = id => {
        const confirmatin = window.confirm('Are you sure?');
        if(confirmatin){
            fetch(`http://localhost:5000/deleteorder/${id}`, {
                method: 'DELETE'
            })
            .then(res => res.json())
            .then(data => alert('Order canceled'))
        }
        
    }
    return (
        <TableContainer component={Paper}>
      <Table aria-label="customized table">
        <TableHead>
          <TableRow>
            <StyledTableCell>Car Name</StyledTableCell>
            <StyledTableCell align="right">Ordered by</StyledTableCell>
            <StyledTableCell align="right">Cost</StyledTableCell>
            <StyledTableCell align="right">Email</StyledTableCell>
            <StyledTableCell align="right">Address</StyledTableCell>
            <StyledTableCell align="right">Status</StyledTableCell>
            <StyledTableCell align="right">Cancel Order</StyledTableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {myOrders.map((row) => (
            <StyledTableRow key={row._id}>
              <StyledTableCell component="th" scope="row">
                {row.car}
              </StyledTableCell>
              <StyledTableCell align="right">{row.name}</StyledTableCell>
              <StyledTableCell align="right">{row.cost}$</StyledTableCell>
              <StyledTableCell align="right">{row.email}</StyledTableCell>
              <StyledTableCell align="right">{row.address}</StyledTableCell>
              <StyledTableCell align="right">{row?.status}</StyledTableCell>
              <Button variant="contained" onClick={() => deleteOrder(row._id)}>Cancel Order</Button>
            </StyledTableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
    );
};

export default MyOrders;