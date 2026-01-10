# 🌾 Agriculture Crop Disease Detection & Advisory System

A **web-based intelligent system** designed to help farmers **detect crop diseases early** and receive **treatment & prevention advice**, with a strong focus on **Nepali agriculture** and local farming challenges.

This project integrates **Machine Learning (CNN-based image classification)** with a **MERN stack web application**, creating a practical, high‑impact solution for reducing crop loss and improving yield.

---

## 🚜 Problem Statement (Nepal Context)

- Most Nepali farmers rely on **manual inspection or delayed expert advice** for crop diseases
- Lack of timely disease detection leads to:
  - Reduced crop yield
  - Increased pesticide misuse
  - Economic loss for smallholder farmers
- Agricultural experts are not easily accessible in rural areas

📌 **Early detection + correct advisory = higher productivity & lower loss**

---

## 🎯 Project Objectives

- Enable **early crop disease detection** using image-based ML
- Provide **clear treatment & prevention advice** to farmers
- Deliver advisories in a **farmer-friendly interface (Nepali language support)**
- Store disease history for tracking and analysis
- Build a scalable system usable by **NGOs, agri-startups, and government bodies**

---

## 🧠 What the System Does

1. Farmers **register/login** to the web application
2. Upload **crop leaf images** via mobile or desktop
3. ML model analyzes the image
4. System predicts:
   - Crop type
   - Disease name (or healthy)
5. Displays:
   - Disease details
   - Treatment recommendations
   - Preventive measures
6. Stores prediction history for future reference

---

## 🏗️ System Architecture

```
Frontend (React)
   │
   │ Image Upload + Dashboard
   ▼
Backend (Node.js + Express)
   │
   │ API Request
   ▼
ML Service (Flask API)
   │
   │ CNN Prediction
   ▼
MongoDB Database
   ├── User Data
   ├── Uploaded Images
   └── Prediction History
```

---

## 🧪 Machine Learning Component

### 🔬 Model Details

- **Model Type:** Convolutional Neural Network (CNN)
- **Architectures Used:**
  - MobileNet (lightweight & fast)
  - ResNet (higher accuracy – optional)
- **Task:** Image Classification
- **Input:** Crop leaf images
- **Output:** Disease class / Healthy

### 🧠 ML Responsibilities

- Image preprocessing
- Feature extraction
- Disease classification
- Confidence score generation

---

## 🌐 MERN Stack Role

### Frontend – React

- Farmer-friendly UI
- Image upload form
- Disease result display
- Advisory dashboard
- Responsive design (mobile-friendly)

### Backend – Node.js & Express

- User authentication
- Image upload handling
- API communication with ML service
- Advisory data delivery

### Database – MongoDB

- Farmer profiles
- Image upload records
- Disease prediction history
- Advisory logs

---

## 🌱 Advisory System

- Treatment recommendations
- Preventive farming practices
- Fertilizer & pesticide guidance
- Advisory content tailored for:
  - Local crops
  - Nepali farming conditions

📌 *Advisories can be displayed in Nepali language for better accessibility.*

---

## 📂 Project Folder Structure

```
Agriculture-Crop-Disease-Detection/
│
├── client/                 # React frontend
│   ├── src/
│   └── public/
│
├── server/                 # Node.js backend
│   ├── routes/
│   ├── controllers/
│   ├── models/
│   └── middleware/
│
├── ml-service/             # Flask ML API
│   ├── model/
│   ├── app.py
│   └── requirements.txt
│
├── database/               # MongoDB schemas
│
├── datasets/               # Training images
│
├── docs/                   # Documentation
│
└── README.md
```

---

## ⚙️ Installation & Setup (High Level)

### Clone Repository
```bash
git clone <repository-url>
cd Agriculture-Crop-Disease-Detection
```

### Frontend
```bash
cd client
npm install
npm start
```

### Backend
```bash
cd server
npm install
node index.js
```

### ML Service
```bash
cd ml-service
pip install -r requirements.txt
python app.py
```

---

## 📊 Use Cases

- Smallholder farmers
- Agricultural NGOs
- Government agriculture departments
- Agri-tech startups
- Research & academic projects

---

## 🌟 Why This Project Is Powerful

✔ High social & economic impact in Nepal  
✔ Solves a real agricultural problem  
✔ Strong **ML + MERN integration**  
✔ Scalable & deployable solution  
✔ Highly attractive for recruiters, NGOs, and public-sector projects

---

## 🧠 Skills Demonstrated

- Convolutional Neural Networks (CNN)
- Image classification
- MERN stack development
- REST API design
- ML model deployment using Flask
- Real-world problem solving

---

## 🔮 Future Enhancements

- Multi-crop disease support
- Offline mobile app support
- Voice-based advisory (Nepali)
- Confidence-based alerts
- Government database integration
- Model accuracy improvement with more local data

---

## 👤 Author

**Sabin Lamsal**  
Machine Learning & Full Stack Development Enthusiast  
Focused on building impactful AI solutions for real-world problems

---

🌾 *Empowering farmers through AI-driven agriculture.*

