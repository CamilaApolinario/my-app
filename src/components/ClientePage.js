import React, { useEffect, useState } from 'react';
import ClienteForm from './ClienteForm';
import ClienteList from './ClienteList';
import { Container, Typography } from '@mui/material';

const ClientePage = () => {
  const [clientes, setClientes] = useState([]);
  const [clienteToEdit, setClienteToEdit] = useState(null);

  useEffect(() => {
    fetch('https://localhost:7169/api/Cliente')
      .then((response) => response.json())
      .then((data) => setClientes(data));
  }, []);

  const handleAddCliente = (cliente) => {
    fetch('https://localhost:7169/api/Cliente', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(cliente),
    })
      .then((response) => response.json())
      .then((data) => {
        setClientes([...clientes, data]);
      });
  };

  const handleEditCliente = (id, cliente) => {
    fetch(`https://localhost:7169/api/Cliente/${id}`, {
      method: 'PUT',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(cliente),
    })
      .then((response) => response.json())
      .then((data) => {
        const updatedClientes = clientes.map((c) => {
          if (c.id === data.id) {
            return data;
          }
          return c;
        });
        setClientes(updatedClientes);
        setClienteToEdit(updatedClientes);
      });
  };

  const handleDeleteCliente = (id) => {
    fetch(`https://localhost:7169/api/Cliente/${id}`, {
      method: 'DELETE',
    })
      .then(() => {
        const updatedClientes = clientes.filter((c) => c.id !== id);
        setClientes(updatedClientes);
      });
  };

  const handleEditClick = (cliente) => {
    setClienteToEdit(cliente);
  };

  return (
    <Container>
      <Typography variant="h3">Cadastro de Clientes</Typography>
      &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
      <ClienteForm
        onAddCliente={handleAddCliente}
        onEditCliente={handleEditCliente}
        clienteToEdit={clienteToEdit}
      />
      <ClienteList
        clientes={clientes}
        onEditClick={handleEditClick}
        onDeleteClick={handleDeleteCliente}
      />
    </Container>
  );
};

export default ClientePage;


