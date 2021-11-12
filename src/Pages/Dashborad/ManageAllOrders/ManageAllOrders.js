import React, { useEffect, useState } from 'react';
import { styled } from '@mui/material/styles';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell, { tableCellClasses } from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import { Button, Typography } from '@mui/material';

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

const ManageAllOrders = () => {

    const [allOrders, setAllOrders] = useState([]);
    
    useEffect(() => {
        fetch('https://safe-scrubland-04558.herokuapp.com/allorders')
        .then(res => res.json())
        .then(data => setAllOrders(data))
    },[allOrders])

    const shippedOrder = id => {
            fetch(`https://safe-scrubland-04558.herokuapp.com/updatestatus/${id}`, {
                method: 'PUT'
            })
            .then(res => res.json())
            .then(data => alert('Item Shipped'))
        
    }

    const deleteOrder = id => {
        const confirmatin = window.confirm('Are you sure?');
        if(confirmatin){
            fetch(`https://safe-scrubland-04558.herokuapp.com/deleteorder/${id}`, {
                method: 'DELETE'
            })
            .then(res => res.json())
            .then(data => alert('Order canceled'))
        }
    }

    return (
        <TableContainer component={Paper}>
            <Typography variant="h4" align="center" sx={{mb:2}}>Manage All Orders</Typography>
      <Table aria-label="customized table">
        <TableHead>
          <TableRow>
            <StyledTableCell>Car Name</StyledTableCell>
            <StyledTableCell align="right">Ordered by</StyledTableCell>
            <StyledTableCell align="right">Cost</StyledTableCell>
            <StyledTableCell align="right">Email</StyledTableCell>
            <StyledTableCell align="right">Address</StyledTableCell>
            <StyledTableCell align="right">Status</StyledTableCell>
            <StyledTableCell align="right">Shipping Status</StyledTableCell>
            <StyledTableCell align="right">Cancel Order</StyledTableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {allOrders.map((row) => (
            <StyledTableRow key={row._id}>
              <StyledTableCell component="th" scope="row">
                {row.car}
              </StyledTableCell>
              <StyledTableCell align="right">{row.name}</StyledTableCell>
              <StyledTableCell align="right">{row.cost}$</StyledTableCell>
              <StyledTableCell align="right">{row.email}</StyledTableCell>
              <StyledTableCell align="right">{row.address}</StyledTableCell>
              <StyledTableCell align="right">{row?.status}</StyledTableCell>
              <StyledTableCell align="right"><Button variant="contained" onClick={() => shippedOrder(row._id)}>Shipped</Button></StyledTableCell>
              <StyledTableCell align="right"><Button variant="contained" onClick={() => deleteOrder(row._id)}>Cancel Order</Button></StyledTableCell>
            </StyledTableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
    );
};

export default ManageAllOrders;