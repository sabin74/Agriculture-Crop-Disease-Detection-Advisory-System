import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import ImageCard from "../components/ImageCard";

const Dashboard = () => {
  const navigate = useNavigate();
  const [user, setUser] = useState(null);
  const [images, setImages] = useState([]);
  const [loading, setLoading] = useState(false);

  const token = localStorage.getItem("token");

  useEffect(() => {
    const storedUser = JSON.parse(localStorage.getItem("user"));
    if (!storedUser || !token) {
      navigate("/login");
    } else {
      setUser(storedUser);
      fetchImages();
    }
  }, [navigate, token]);

  const fetchImages = async () => {
    setLoading(true);
    try {
      const res = await axios.get("http://localhost:5000/api/images", {
        headers: { Authorization: `Bearer ${token}` },
      });
      setImages(Array.isArray(res.data) ? res.data : []);
    } catch (err) {
      console.error(err);
      setImages([]);
    } finally {
      setLoading(false);
    }
  };

  const handleLogout = () => {
    localStorage.removeItem("user");
    localStorage.removeItem("token");
    navigate("/login");
  };

  const handleDelete = async (id) => {
    if (!window.confirm("Are you sure you want to delete this image?")) return;
    try {
      await axios.delete(`http://localhost:5000/api/images/${id}`, {
        headers: { Authorization: `Bearer ${token}` },
      });
      setImages(images.filter((img) => img._id !== id));
    } catch (err) {
      console.error(err);
    }
  };

  const handleViewAdvice = async (disease) => {
    if (!disease || disease === "pending" || disease === "Healthy") return;
    try {
      const res = await axios.get(
        `http://localhost:5000/api/advisory/${disease}`,
        { headers: { Authorization: `Bearer ${token}` } }
      );
      alert(`Disease: ${res.data.disease}\nAdvice: ${res.data.advice}`);
    } catch (err) {
      alert("No advice found for this disease!");
      console.error(err);
    }
  };

  if (!user) return null;

  return (
    <div className="relative min-h-screen w-full bg-[#0d140d] px-6 py-10 overflow-hidden">
      <div className="absolute top-[-20%] left-[-10%] w-[60%] h-[60%] bg-green-900/30 rounded-full blur-[140px]" />
      <div className="absolute bottom-[-20%] right-[-10%] w-[60%] h-[60%] bg-emerald-900/20 rounded-full blur-[140px]" />

      <div className="relative z-10 max-w-7xl mx-auto">
        <div className="flex justify-between items-center mb-10">
          <div>
            <h1 className="text-4xl font-bold text-white mb-2">
              Welcome, {user.name} 🌾
            </h1>
            <p className="text-zinc-400">Upload crop images and get disease advice</p>
          </div>

          <div className="flex gap-4">
            <button
              onClick={() => navigate("/upload")}
              className="bg-white text-black font-bold px-6 py-3 rounded-full hover:bg-zinc-200"
            >
              Upload Image
            </button>

            <button
              onClick={handleLogout}
              className="bg-red-500 text-white font-bold px-6 py-3 rounded-full hover:bg-red-600"
            >
              Logout
            </button>
          </div>
        </div>

        {loading ? (
          <p className="text-white">Loading images...</p>
        ) : images.length === 0 ? (
          <p className="text-white">No images uploaded yet.</p>
        ) : (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {images.map((img) => (
              <ImageCard
                key={img._id}
                image={img}
                onDelete={handleDelete}
                onViewAdvice={handleViewAdvice}
              />
            ))}
          </div>
        )}
      </div>
    </div>
  );
};

export default Dashboard;
