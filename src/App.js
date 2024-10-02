import React, { useState, useEffect } from 'react';
import { DataGrid } from '@mui/x-data-grid';
import { TextField } from '@mui/material';
import data from './data.json';
import './App.css'; // Import the CSS file

function App() {
  const [searchTerm, setSearchTerm] = useState('');
  const [filteredData, setFilteredData] = useState(data);

  useEffect(() => {
    const filtered = data.filter((row) =>
     row.customer.toLowerCase().includes(searchTerm.toLowerCase()) ||
        row.id.toString().includes(searchTerm) ||
        row.totalSpent.includes(searchTerm) ||
        row.news.toString().includes(searchTerm) ||
        row.orders.toString().includes(searchTerm) ||
        row.segments.includes(searchTerm) ||
        row.lastSeen.includes(searchTerm) ||
        row.latestPurchase.includes(searchTerm)
    );
    setFilteredData(filtered);
  }, [searchTerm]);

  const columns = [
    { field: 'id', headerName: 'ID', width: 70 },
    { field: 'customer', headerName: 'Customer Name', width: 200 },
    { field: 'lastSeen', headerName: 'Last Activity', width: 150 },
    { field: 'orders', headerName: 'Orders', width: 100 },
    { field: 'totalSpent', headerName: 'Total Spent', width: 150 },
    { field: 'latestPurchase', headerName: 'Latest Purchase', width: 200 },
    { field: 'news', headerName: 'News', width: 150 },
    { field: 'segments', headerName: 'Segment', width: 150 }
  ];

  return (
    <div className="container">
      <div className="datagrid-header">Customer Data</div>
      <TextField
        className="search-box"
        label="Search"
        variant="outlined"
        style={{ color: 'white' }}
        value={searchTerm}
        onChange={(e) => setSearchTerm(e.target.value)}
      />
      <div className="datagrid">
        <DataGrid
          rows={filteredData}
          columns={columns}
          pageSize={10}
          rowsPerPageOptions={[10]}
          checkboxSelection
          style={{color:"black", backgroundColor:"#cadcf27a"}}
        />
      </div>
      <div className="datagrid-footer">Data last updated: 2024</div>
    </div>
  );
}

export default App;
