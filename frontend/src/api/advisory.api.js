import axios from "axios";

const API_URL = import.meta.env.VITE_FASTAPI_URL || "http://localhost:8000";

export const getAdvisory = async (disease) => {
  try {
    const res = await axios.get(`${API_URL}/advisory/${encodeURIComponent(disease)}`);
    return res.data;
  } catch (err) {
    console.error("Failed to fetch advisory", err);
    throw err;
  }
};