// frontend/src/pages/AdminPanel.jsx
import React, { useState } from 'react';
import Papa from 'papaparse'; // to parse CSV file

const AdminPanel = () => {
  const [csvData, setCsvData] = useState([]);
  const [message, setMessage] = useState('');

  // handle file upload and parse with PapaParse
  const handleCSVUpload = (e) => {
    const file = e.target.files[0];

    if (!file) return;

    Papa.parse(file, {
      header: true, // first row will be column names
      skipEmptyLines: true,
      complete: (result) => {
        setCsvData(result.data);
        setMessage('CSV uploaded and parsed successfully');
      },
      error: (err) => {
        setMessage(`Error parsing CSV: ${err.message}`);
      },
    });
  };

  // send parsed data to backend API
  const handleUploadToBackend = async () => {
    try {
      const res = await fetch('http://localhost:5000/api/tables/upload', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(csvData),
      });

      const data = await res.json();
      setMessage(data.message);
    } catch (error) {
      setMessage('Failed to upload data to backend');
    }
  };

  return (
    <div className="p-6 max-w-3xl mx-auto bg-white shadow-md rounded">
      <h2 className="text-xl font-bold mb-4">Admin Panel - Upload Table CSV</h2>

      <input
        type="file"
        accept=".csv"
        onChange={handleCSVUpload}
        className="mb-4"
      />

      <button
        onClick={handleUploadToBackend}
        className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700"
      >
        Upload to Backend
      </button>

      {message && <p className="mt-4 text-green-600">{message}</p>}
    </div>
  );
};

export default AdminPanel;
