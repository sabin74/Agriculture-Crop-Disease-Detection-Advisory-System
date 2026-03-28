import api from "./axios";

export const uploadImage = async (file, onProgress) => {
  const formData = new FormData();
  formData.append("image", file);

  const response = await api.post("/images/upload", formData, {
    headers: {
      "Content-Type": "multipart/form-data",
    },
    onUploadProgress: (progressEvent) => {
      if (onProgress) {
        const percent = Math.round(
          (progressEvent.loaded * 100) / progressEvent.total,
        );
        onProgress(percent);
      }
    },
  });

  return response.data;
};

export const getImages = async()=>{
  const res = await api.get('/images');
  return res.data;
};

export const deleteImage = async (id) => {
  const res = await api.delete(`/images/${id}`);
  return res.data;
};

