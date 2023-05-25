import React, { useState } from 'react';
import { FormControl, Typography, Select, MenuItem, Button, TextField  } from '@mui/material';

const ClienteForm = ({ onAddCliente, onEditCliente, clienteToEdit }) => {
  const [nome, setNome] = useState('');
  const [porteDaEmpresa, setPorteDaEmpresa] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    
    if (clienteToEdit) {
      // Cliente em modo de edição
      onEditCliente(clienteToEdit.id, { nome, porteDaEmpresa });
    } else {
      // Novo cliente
      onAddCliente({ nome, porteDaEmpresa });
    }

    setNome('');
    setPorteDaEmpresa('');
  };

  return (
    <FormControl fullWidth>
      <Typography >
        <TextField fullWidth id="outlined-basic" label="Nome" variant="outlined" value={nome}
          onChange={(e) => setNome(e.target.value)}/>  
        <Typography>Porte da Empresa:</Typography> 
        <Select
          fullWidth
          value={porteDaEmpresa} 
          onChange={(e) => setPorteDaEmpresa(e.target.value)}>
          <MenuItem  value="pequena">Pequena</MenuItem >
          <MenuItem  value="média">Média</MenuItem >
          <MenuItem  value="grande">Grande</MenuItem >
        </Select>
      </Typography >
      &nbsp;
      <Button onClick={handleSubmit} type="submit" variant="contained">{clienteToEdit ? 'Editar' : 'Adicionar'}</Button>
      &nbsp;&nbsp;&nbsp;
    </FormControl>
  );
};

export default ClienteForm;