import axios from "axios";

const API_BASE = "http://localhost:5000/api";

//  Upload CSV to backend (admin upload)
export const uploadCSV = async (formData) => {
  try {
    const response = await axios.post(`${API_BASE}/admin/upload`, formData, {
      headers: {
        "Content-Type": "multipart/form-data",
      },
    });
    return response.data;
  } catch (error) {
    console.error("CSV Upload failed:", error);
    throw new Error("Upload failed");
  }
};

//  Fetch all available tables (for frontend Booking page display)
export const fetchAvailableTables = async () => {
  try {
    const response = await axios.get(`${API_BASE}/tables`);
    return response.data;
  } catch (error) {
    console.error("Failed to fetch available tables:", error);
    return [];
  }
};
