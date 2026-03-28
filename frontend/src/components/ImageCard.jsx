import cropImg from "../assets/login.webp"; // fallback if image fails

const ImageCard = ({ image, onDelete, onViewAdvice }) => {
  // Construct full URL for backend images
  const imageUrl = image.imageUrl
    ? `http://localhost:5000${image.imageUrl}`
    : cropImg;

  return (
    <div className="bg-white/5 border border-white/10 rounded-3xl p-5 backdrop-blur-xl hover:scale-[1.02] transition-transform">
      <img
        src={imageUrl}
        alt="crop"
        className="w-full h-52 object-cover rounded-2xl mb-4"
      />
      <div className="flex justify-between items-center mb-4">
        <span className="text-sm text-zinc-400">Status</span>
        <span
          className={`px-4 py-1 rounded-full text-sm font-semibold ${
            image.diseaseDetected === "pending"
              ? "bg-yellow-500/20 text-yellow-400"
              : image.diseaseDetected === "Healthy"
              ? "bg-green-500/20 text-green-400"
              : "bg-red-500/20 text-red-400"
          }`}
        >
          {image.diseaseDetected}
        </span>
      </div>

      <div className="flex gap-3">
        <button
          onClick={() => onViewAdvice(image.diseaseDetected)}
          className="flex-1 bg-emerald-500/20 text-emerald-400 font-semibold py-2 rounded-full hover:bg-emerald-500/30 transition"
        >
          View Advice
        </button>
        <button
          onClick={() => onDelete(image._id)}
          className="flex-1 bg-red-500/20 text-red-400 font-semibold py-2 rounded-full hover:bg-red-500/30 transition"
        >
          Delete
        </button>
      </div>
    </div>
  );
};

export default ImageCard;
