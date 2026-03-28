# 🌾 Agriculture Crop Disease Detection & Advisory System

A comprehensive web-based solution that helps farmers identify crop diseases from leaf images and provides actionable treatment advice. The system combines a deep learning model (96.18% accuracy) with a bilingual advisory system to make agricultural expertise accessible to farmers.

**🔗 Live Demo**: [https://greenbidu.vercel.app/](https://greenbidu.vercel.app/)

---

## 📋 Table of Contents
- [Project Overview](#-project-overview)
- [Key Features](#-key-features)
- [Supported Crops & Diseases](#-supported-crops--diseases)
- [Technology Stack](#-technology-stack)
- [Model Performance](#-model-performance)
- [System Architecture](#-system-architecture)
- [Installation & Setup](#-installation--setup)
- [API Documentation](#-api-documentation)
- [Usage Guide](#-usage-guide)
- [Advisory System](#-advisory-system)
- [Model Development Process](#-model-development-process)
- [Project Structure](#-project-structure)
- [Contributors](#-contributors)
- [Future Roadmap](#-future-roadmap)
- [License](#-license)
- [Acknowledgments](#-acknowledgments)

---

## 🎯 Project Overview

Crop diseases cause significant yield losses worldwide—often because farmers cannot identify diseases early or lack access to expert advice. This system addresses both problems by:

✅ **Detecting diseases** from leaf images using a trained deep learning model  
✅ **Providing detailed advice** including symptoms, causes, treatment steps, and prevention measures  
✅ **Supporting multiple languages** (English and Nepali) to reach more farmers  
✅ **Storing user uploads** for personal history tracking  
✅ **Offering confidence scores** to help users understand prediction reliability  

The system currently supports **45 disease classes** across **14 different crops**, with a validation accuracy of **96.18%**.

---

## ✨ Key Features

### For Farmers & Users
| Feature | Description |
|---------|-------------|
| 📸 **Image Upload** | Upload leaf images directly through the web interface |
| 🤖 **Instant Detection** | Get disease identification with confidence scores in 2-3 seconds |
| 💊 **Treatment Advice** | Detailed step-by-step procedures for disease management |
| 🌐 **Language Toggle** | Switch between English and Nepali seamlessly |
| 📊 **Personal Dashboard** | View all uploaded images and previous detections |
| 🗑️ **Image Management** | Delete images from personal history |
| 📈 **Confidence Visualization** | See top predictions with confidence percentages |
| 📥 **Report Download** | Download detailed analysis reports |

### For System Administrators
| Feature | Description |
|---------|-------------|
| 🔐 **User Authentication** | Secure registration and login with JWT |
| 🗄️ **Image Storage** | MongoDB-based image metadata management |
| 📚 **Advisory Management** | Easily expandable disease advisory database |
| ⚙️ **Model Inference** | API endpoint for disease prediction |

---

## 🌱 Supported Crops & Diseases

The model can detect diseases in the following **14 crops** with **45 distinct classes**:

### 🍎 Apple (4 classes)
- Apple Scab
- Black Rot
- Cedar Apple Rust
- Healthy

### 🍌 Banana (3 classes)
- Healthy Leaf
- Panama Disease
- Sigatoka Disease

### 🍒 Cherry (2 classes)
- Powdery Mildew
- Healthy

### ☕ Coffee (2 classes)
- No Rust (Healthy)
- Rust

### 🌽 Corn / Maize (4 classes)
- Cercospora Leaf Spot (Gray Leaf Spot)
- Common Rust
- Northern Leaf Blight
- Healthy

### 🍇 Grape (4 classes)
- Black Rot
- Esca (Black Measles)
- Leaf Blight (Isariopsis Leaf Spot)
- Healthy

### 🥭 Mango (3 classes)
- Anthracnose
- Healthy
- Powdery Mildew

### 🍊 Orange (1 class)
- Haunglongbing (Citrus Greening)

### 🍑 Peach (2 classes)
- Bacterial Spot
- Healthy

### 🥔 Potato (3 classes)
- Early Blight
- Late Blight
- Healthy

### 🍓 Strawberry (2 classes)
- Leaf Scorch
- Healthy

### 🎋 Sugarcane (5 classes)
- Mosaic
- Red Rot
- Red Rust
- Yellow Rust
- Healthy

### 🍅 Tomato (10 classes)
- Bacterial Spot
- Early Blight
- Late Blight
- Leaf Mold
- Septoria Leaf Spot
- Spider Mites (Two-spotted Spider Mite)
- Target Spot
- Tomato Yellow Leaf Curl Virus
- Tomato Mosaic Virus
- Healthy

**Total**: 14 crops, 45 disease/health classes

---

## 🛠️ Technology Stack

### Frontend
| Technology | Purpose |
|------------|---------|
| ⚛️ **React 19** | UI library with modern hooks |
| ⚡ **Vite** | Fast build tool and development server |
| 🎨 **TailwindCSS** | Utility-first styling |
| 🧭 **React Router v7** | Navigation and routing |
| 📡 **Axios** | HTTP client with interceptors |
| 🚀 **Vercel** | Frontend deployment platform |

### Backend
| Technology | Purpose |
|------------|---------|
| 🟢 **Node.js** | JavaScript runtime |
| 🚂 **Express** | Web framework |
| 🍃 **MongoDB** | NoSQL database |
| 📦 **Mongoose** | ODM for MongoDB |
| 🔑 **JWT** | Authentication tokens |
| 📁 **Multer** | File upload handling |
| 🔐 **bcryptjs** | Password hashing |

### Machine Learning
| Technology | Purpose |
|------------|---------|
| 🧠 **TensorFlow/Keras** | Deep learning framework |
| 📱 **MobileNetV2** | Base model architecture |
| 🖼️ **PIL/Pillow** | Image preprocessing |
| 🔢 **NumPy** | Numerical computations |
| 📊 **scikit-learn** | Evaluation metrics |
| 🚀 **FastAPI** | Model serving (optional) |

---

## 📊 Model Performance

### Overall Metrics
| Metric | Value |
|--------|-------|
| ✅ **Validation Accuracy** | **96.18%** |
| 📈 **Weighted F1-Score** | 0.9607 |
| 📊 **Macro F1-Score** | 0.9516 |
| 🎯 **ROC AUC (Micro)** | 0.9993 |
| 📉 **Error Rate** | 3.82% |
| 🖼️ **Total Validation Images** | 19,776 |
| ✔️ **Correct Predictions** | 19,021 |

### Top Performing Classes (100% Accuracy)
- Sugarcane__RedRust
- Orange__Haunglongbing (Citrus Greening)
- Grape__Leaf Blight (Isariopsis Leaf Spot)
- Grape__healthy
- Strawberry__healthy

### Classes Requiring Improvement
| Class | Current Accuracy |
|-------|------------------|
| Coffee__NoRust | 45.81% |
| Sugarcane__Mosaic | 80.30% |
| Sugarcane__healthy | 85.11% |
| Sugarcane__Yellow Rust | 85.27% |
| Tomato__Spider Mites | 86.90% |

---

## 🏗️ System Architecture

```
┌─────────────────────────────────────────────────────────────────┐
│                         User Browser                            │
│                    (React Frontend - Vercel)                    │
└─────────────────────────────┬───────────────────────────────────┘
                              │
                              ▼
┌─────────────────────────────────────────────────────────────────┐
│                      API Gateway (Backend)                      │
│                    Node.js/Express - Port 5000                  │
├─────────────────────────────────────────────────────────────────┤
│  • Authentication (JWT)     • Image Upload (Multer)            │
│  • User Management          • Advisory Retrieval                │
│  • Image Metadata Storage   • MongoDB Connection                │
└─────────────────────────────┬───────────────────────────────────┘
                              │
              ┌───────────────┼───────────────┐
              ▼               ▼               ▼
┌─────────────────┐ ┌─────────────────┐ ┌─────────────────┐
│    MongoDB      │ │   File System   │ │  FastAPI/ML    │
│   Database      │ │   (Uploads)     │ │    Service     │
│ • Users         │ │ • User Images   │ │ • Model Loading│
│ • Images Meta   │ │ • Predictions   │ │ • Inference    │
│ • Advisory      │ │                 │ │ • Advisory     │
└─────────────────┘ └─────────────────┘ └─────────────────┘
```

---

## 💻 Installation & Setup

### Prerequisites
- Node.js (v18 or higher)
- MongoDB (local instance or MongoDB Atlas)
- Python 3.8+ (optional, for model inference)
- Git

### Step 1: Clone Repository
```bash
git clone https://github.com/sabin74/Agriculture-Crop-Disease-Detection-Advisory-System.git
cd Agriculture-Crop-Disease-Detection-Advisory-System
```

### Step 2: Backend Setup

```bash
cd backend
npm install
```

Create `.env` file:
```env
MONGO_URI=mongodb://localhost:27017/crop_disease
JWT_SECRET=your_super_secret_jwt_key_change_this
PORT=5000
```

Start backend server:
```bash
npm run dev
```
Server will run at `http://localhost:5000`

### Step 3: Frontend Setup

```bash
cd ../frontend
npm install
```

Create `.env` file:
```env
VITE_SERVER_URL=http://localhost:5000
VITE_FASTAPI_URL=http://localhost:8000
```

Start development server:
```bash
npm run dev
```
Application will run at `http://localhost:5173`

### Step 4: Model Service (Optional)

```bash
cd ../Modeling
pip install -r requirements.txt
streamlit run app.py
```
Demo will run at `http://localhost:8501`

---

## 📡 API Documentation

### Authentication Endpoints

#### POST `/api/auth/register`
Create a new user account.

**Request Body:**
```json
{
  "username": "farmer_john",
  "email": "john@example.com",
  "password": "SecurePass123!"
}
```

**Response:**
```json
{
  "_id": "user_id",
  "username": "farmer_john",
  "email": "john@example.com",
  "token": "jwt_token_here"
}
```

#### POST `/api/auth/login`
Login and receive JWT token.

**Request Body:**
```json
{
  "email": "john@example.com",
  "password": "SecurePass123!"
}
```

**Response:**
```json
{
  "_id": "user_id",
  "name": "farmer_john",
  "email": "john@example.com",
  "token": "jwt_token_here"
}
```

### Image Endpoints

#### POST `/api/images/upload`
Upload a leaf image for analysis. (Requires Authentication)

**Headers:**
- `Authorization: Bearer <jwt_token>`

**Form Data:**
- `image`: Image file (JPEG, PNG, JPG)

**Response:**
```json
{
  "message": "Image uploaded successfully!",
  "image": {
    "_id": "image_id",
    "farmer": "user_id",
    "imageUrl": "/uploads/filename.jpg",
    "diseaseDetected": "pending"
  }
}
```

#### GET `/api/images`
Retrieve all images for authenticated user.

**Headers:**
- `Authorization: Bearer <jwt_token>`

**Response:** Array of image objects

#### DELETE `/api/images/:id`
Delete a specific image. (Requires Authentication)

**Headers:**
- `Authorization: Bearer <jwt_token>`

### Advisory Endpoints

#### GET `/api/advisory/:disease`
Get advisory information for a detected disease.

**Headers:**
- `Authorization: Bearer <jwt_token>`

**Response:**
```json
{
  "disease": "Tomato__Late_blight",
  "advice": "Remove infected leaves immediately. Apply copper-based fungicide..."
}
```

---

## 📖 Usage Guide

### For New Users

1. **Visit the Application**
   - Go to [https://greenbidu.vercel.app/](https://greenbidu.vercel.app/)

2. **Create an Account**
   - Click "Sign Up"
   - Enter your name, email, and password
   - Password must be 8+ characters with uppercase, lowercase, number, and special character

3. **Log In**
   - Enter your email and password
   - You'll be redirected to your dashboard

### Detecting a Disease

1. **Upload an Image**
   - Click "Upload Image" button on dashboard
   - Select a clear leaf image (JPG, JPEG, or PNG)
   - Ensure the leaf is well-lit and centered

2. **Wait for Analysis**
   - Processing takes 2-3 seconds
   - The system analyzes the image using the trained model

3. **View Results**
   - Detected disease name appears on dashboard
   - Confidence score shows how certain the model is
   - Click "View Advice" for detailed treatment information

4. **Explore Advisory**
   - Switch between English and Nepali
   - Review symptoms, causes, and prevention measures
   - Follow step-by-step treatment procedures
   - Check yield impact estimates

### Managing Your History

- All uploaded images appear in a grid on your dashboard
- Each card shows image thumbnail, disease status, and confidence
- Use "Delete" button to remove unwanted images
- Click "View Advice" again to revisit treatment information

---

## 💡 Advisory System

Each disease detection returns comprehensive agricultural guidance:

### Information Provided

| Section | Details |
|---------|---------|
| 🔴 **Severity Level** | Critical / High / Medium / Low with color coding |
| 🧬 **Symptoms** | Visual indicators of the disease |
| 🦠 **Causes** | Pathogens and environmental factors |
| 🛡️ **Prevention** | Measures to avoid future outbreaks |
| 💊 **Treatment** | Step-by-step management procedures |
| ⚠️ **Immediate Actions** | Urgent steps for severe cases |
| 📉 **Yield Impact** | Estimated percentage of crop loss |
| ⏰ **Next Checkup** | Recommended follow-up timeline |

### Language Support
- **English** 🇬🇧 - Full technical and general terms
- **Nepali** 🇳🇵 - Localized agricultural terminology

---

## 🧠 Model Development Process

### Phase 1: Data Exploration
- Analyzed 74,880 training images across 45 classes
- Identified class imbalance (43.9× between smallest and largest classes)
- Verified image dimensions, formats, and quality
- Generated distribution visualizations

### Phase 2: Preprocessing
- Resized all images to 224×224 pixels (MobileNetV2 standard)
- Applied data augmentation:
  - Rotation (±20°, strong: ±40°)
  - Width/height shift (±10%, strong: ±20%)
  - Zoom (±10%, strong: ±20%)
  - Horizontal flip (always)
  - Brightness adjustment (0.9-1.1, strong: 0.8-1.2)
  - Shear (±20% for strong augmentation)
- Computed class weights to handle imbalance

### Phase 3: Model Architecture
- **Base Model**: MobileNetV2 (pre-trained on ImageNet)
- **Custom Classification Head**:
  - Global Average Pooling
  - Dense(512) with ReLU activation
  - Dropout(0.5)
  - Dense(256) with ReLU activation
  - Dropout(0.5)
  - Dense(45) with Softmax activation
- **Optimizer**: Adam (initial learning rate: 1e-4)

### Phase 4: Training Strategy

**Phase 1 (20 epochs):**
- Base model weights frozen
- Only classification head trained
- Learning rate: 1e-4

**Phase 2 (20 epochs):**
- Base model unfrozen for fine-tuning
- Lower learning rate: 5e-6
- Early stopping and reduce-on-plateau callbacks

### Phase 5: Evaluation
- Validation accuracy: 96.18%
- Confusion matrix analysis
- Per-class precision, recall, and F1-score
- ROC-AUC curves (micro and macro average)
- Misclassification pattern analysis

---

## 📁 Project Structure

```
Agriculture-Crop-Disease-Detection-Advisory-System/
│
├── backend/                         # Node.js backend server
│   ├── config/
│   │   └── db.js                    # MongoDB connection
│   ├── controllers/
│   │   ├── advisoryController.js    # Advisory endpoint logic
│   │   ├── authController.js        # Authentication handlers
│   │   └── imageController.js       # Image CRUD operations
│   ├── middleware/
│   │   ├── authMiddleware.js        # JWT verification
│   │   └── upload.js                # Multer configuration
│   ├── models/
│   │   ├── Advisory.js              # Disease advice schema
│   │   ├── Images.js                # Image metadata schema
│   │   └── User.js                  # User schema with bcrypt
│   ├── routes/
│   │   ├── advisory.js              # /api/advisory routes
│   │   ├── auth.js                  # /api/auth routes
│   │   └── images.js                # /api/images routes
│   ├── uploads/                     # Stored user images
│   ├── package.json
│   └── server.js                    # Application entry point
│
├── frontend/                        # React frontend application
│   ├── public/
│   │   └── vite.svg
│   ├── src/
│   │   ├── api/
│   │   │   ├── advisory.api.js      # Advisory API calls
│   │   │   ├── auth.api.js          # Authentication API
│   │   │   ├── axios.js             # Axios instance with interceptors
│   │   │   └── image.api.js         # Image upload API
│   │   ├── assets/
│   │   │   ├── error.gif            # 404 animation
│   │   │   ├── leaf.svg             # Icon assets
│   │   │   ├── login.webp           # Login page illustration
│   │   │   └── react.svg
│   │   ├── components/
│   │   │   ├── AdvisoryModal.jsx    # Bilingual advisory modal
│   │   │   ├── ImageCard.jsx        # Image display component
│   │   │   ├── Navbar.jsx           # Navigation bar
│   │   │   ├── PrivateRoute.jsx     # Auth protection
│   │   │   ├── ProtectedRoute.jsx   # Outlet-based protection
│   │   │   └── PublicRoute.jsx      # Public access redirect
│   │   ├── context/
│   │   │   └── AuthContext.jsx      # Auth state management
│   │   ├── hooks/
│   │   │   └── useAuth.js           # Auth hook wrapper
│   │   ├── pages/
│   │   │   ├── Dashboard.jsx        # User image dashboard
│   │   │   ├── Error.jsx            # 404 error page
│   │   │   ├── Login.jsx            # Login form
│   │   │   ├── Register.jsx         # Registration with confirm
│   │   │   ├── Signup.jsx           # Alternative signup
│   │   │   └── Upload.jsx           # Image upload form
│   │   ├── App.jsx                  # Routing configuration
│   │   ├── index.css                # Tailwind imports
│   │   └── main.jsx                 # Application entry
│   ├── index.html
│   ├── package.json
│   ├── vercel.json                  # SPA routing config
│   └── vite.config.js               # Vite configuration
│
└── Modeling/                        # Machine learning components
    ├── configs/
    │   ├── advisory_system.json     # Bilingual disease data (168KB)
    │   ├── class_indices.json       # Class name to index mapping
    │   ├── class_indices_final.json
    │   ├── class_names.json
    │   ├── class_weights.json       # Imbalance correction weights
    │   ├── preprocessing_config.json
    │   └── preprocessing_config.yaml
    │
    ├── Crop Disease Dataset/
    │   ├── train/                   # 45 folders, 74,880 images
    │   ├── valid/                   # 45 folders, 19,804 images
    │   └── test/                    # 45 folders
    │
    ├── models/
    │   ├── best_model.keras         # Best performing model (34MB)
    │   ├── final_model.keras        # Final trained model (34MB)
    │   ├── final_model.h5           # H5 format model
    │   ├── training_history.json    # Training metrics
    │   └── evaluation_results.json
    │
    ├── notebooks/
    │   ├── 01_data_exploration.ipynb
    │   ├── 02_data_preprocessing.ipynb
    │   ├── 03_model_training.ipynb
    │   ├── 04_model_evaluation.ipynb
    │   └── 05_inference_demo.ipynb
    │
    ├── reports/
    │   ├── analysis_results/
    │   │   ├── dataset_summary.json
    │   │   ├── class_list.json
    │   │   ├── train_class_distribution.csv
    │   │   └── val_class_distribution.csv
    │   ├── evaluation_results/
    │   │   ├── classification_report.csv
    │   │   ├── evaluation_report.txt
    │   │   ├── evaluation_summary.json
    │   │   ├── misclassified_images.png
    │   │   ├── per_class_metrics_distribution.png
    │   │   └── roc_curves.png
    │   ├── training_figures/
    │   │   └── training_results.png
    │   └── visualizations/
    │       ├── class_distribution_all.png
    │       ├── class_distribution_extremes.png
    │       ├── image_count_distribution.png
    │       ├── image_dimensions.png
    │       ├── sample_images_train.png
    │       └── sample_images_valid.png
    │
    ├── app.py                       # Streamlit demo application
    ├── README.md                    # Modeling documentation
    └── requirements.txt             # Python dependencies
```

---

## 👥 Contributors

### Sabin Lamsal - Machine Learning Model Development
- Dataset preprocessing and augmentation strategy
- MobileNetV2 architecture design and training
- Performance evaluation and optimization
- Advisory system data structure and content
- Model export and inference pipeline

### Subodh Dhamala - Frontend Development
- React application architecture and state management
- UI/UX implementation with TailwindCSS
- Authentication flow and context management
- API integration and error handling
- Responsive design and mobile optimization

### Bigyam Karmacharya - Backend Development
- Node.js/Express server architecture
- MongoDB database schema design
- JWT authentication implementation
- RESTful API endpoint development
- File upload handling with Multer

### Pujan Lakhe - System Design and Testing
- Overall system architecture and integration
- Quality assurance and testing
- Deployment coordination and optimization
- Documentation and user guides

---

## 🗺️ Future Roadmap

### Short Term (3-6 months)
| Priority | Feature | Status |
|----------|---------|--------|
| 🔴 High | Improve Coffee__NoRust model accuracy | Planned |
| 🔴 High | Add mobile-responsive improvements | In Progress |
| 🟡 Medium | Implement image compression for faster uploads | Planned |
| 🟡 Medium | Add email notifications for disease alerts | Planned |

### Medium Term (6-12 months)
| Priority | Feature | Status |
|----------|---------|--------|
| 🔴 High | Mobile application (React Native) | Planned |
| 🟡 Medium | Offline mode with local model storage | Researching |
| 🟡 Medium | Weather-based disease risk prediction | Researching |
| 🟢 Low | Community forum for farmer discussions | Planned |

### Long Term (12+ months)
| Feature | Description |
|---------|-------------|
| 🌾 **Expanded Crop Database** | Add rice, wheat, cotton, and more |
| 🎙️ **Voice Advisory** | Voice-based guidance in local languages |
| 📊 **Yield Prediction** | Estimate crop yield based on disease severity |
| 🤝 **Farmer Network** | Connect farmers with agricultural experts |
| 📸 **Real-time Video Analysis** | Live camera feed disease detection |

---

## 📝 License

This project is intended for **educational and research purposes**. The code is provided as-is without warranty. Please cite original dataset sources when using for academic work.

---

## 🙏 Acknowledgments

- **PlantVillage Dataset** contributors for providing high-quality leaf disease images
- **TensorFlow/Keras** team for the deep learning framework and pre-trained models
- **MongoDB** for the scalable database solution
- **Vercel** for frontend hosting and deployment
- **Agricultural research institutions** for domain expertise
- **Farmers** who provided valuable feedback during development

---

## 📞 Support & Contact

For questions, issues, or contributions:

- **GitHub Issues**: [Open an issue](https://github.com/sabin74/Agriculture-Crop-Disease-Detection-Advisory-System/issues)
- **Live Demo**: [https://greenbidu.vercel.app/](https://greenbidu.vercel.app/)
- **Repository**: [GitHub Repository](https://github.com/sabin74/Agriculture-Crop-Disease-Detection-Advisory-System)

---

*Empowering farmers with AI-driven crop intelligence* 🌾
