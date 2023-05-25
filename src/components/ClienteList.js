import React from 'react';
import { Button } from '@mui/material';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';

const ClienteList = ({ clientes, onEditClick, onDeleteClick }) => {
  return (
    <TableContainer component={Paper}>
      <Table sx={{ minWidth: 650 }} aria-label="simple table">
        <TableHead>
          <TableRow>            
            <TableCell>Nome</TableCell>
            <TableCell align="right">Porte da empresa</TableCell>
            <TableCell align="right">Editar</TableCell>
            <TableCell align="right">Excluir</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {clientes.map((row) => (
            <TableRow
              key={row.id}>
              <TableCell component="th" scope="row">
                {row.nome}
              </TableCell>
              <TableCell align="right">{row.porteDaEmpresa}</TableCell>
              <TableCell align="right"><Button variant="contained" color="success" onClick={() => onEditClick(row)}>Editar</Button></TableCell>
              <TableCell align="right"><Button variant="contained" color="warning" onClick={() => onDeleteClick(row.id)}>Excluir</Button></TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
};

export default ClienteList;