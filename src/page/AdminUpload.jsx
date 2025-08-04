// frontend/src/page/AdminUpload.jsx
import { useState } from 'react';

export default function AdminUpload() {
  const [status, setStatus] = useState('');
  const [error, setError] = useState('');
  const [uploading, setUploading] = useState(false);

  const handleFile = async (e) => {
    setStatus('');
    setError('');
    const file = e.target.files[0];
    if (!file || !file.name.toLowerCase().endsWith('.csv')) {
      setError('Please select a valid .csv file.');
      return;
    }

    const form = new FormData();
    form.append('file', file);

    try {
      setUploading(true);
      const res = await fetch('http://localhost:5000/admin/upload-csv', {
        method: 'POST',
        body: form,
      });
      const data = await res.json();
      if (!res.ok) throw new Error(data.error || 'Upload failed');
      setStatus('CSV uploaded successfully. Definitions updated.');
    } catch (err) {
      setError(err.message);
    } finally {
      setUploading(false);
    }
  };

  return (
    <div className="p-6 max-w-lg mx-auto bg-white rounded-2xl shadow">
      <h1 className="text-2xl font-semibold mb-4">Admin: Upload Tables CSV</h1>
      <p className="text-sm mb-2">
        Required headers: <code>table_id,type,capacity,location</code>
      </p>
      <input type="file" accept=".csv" onChange={handleFile} disabled={uploading} className="mb-2" />
      {uploading && <div className="text-gray-600">Uploading...</div>}
      {status && <div className="text-green-700">{status}</div>}
      {error && <div className="text-red-600">{error}</div>}
    </div>
  );
}
