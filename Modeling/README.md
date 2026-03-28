# 🌱 Crop Disease Detection & Advisory System – Modeling Phase

## 📋 Overview
A comprehensive deep learning pipeline for detecting **45 crop diseases** across **14 different crops** from leaf images, integrated with a **multilingual advisory system** to assist farmers with actionable guidance.

This system combines **high-accuracy deep learning** with **practical agricultural knowledge**, making it suitable for real-world deployment, demos, and academic projects.

---

## 🎯 Key Features
- ✅ **45 Disease Classes + Healthy Detection**
- 🌾 **14 Crops Supported**
  - Apple, Banana, Corn, Coffee, Grape, Mango, Orange, Peach  
  - Potato, Strawberry, Sugarcane, Tomato, Cherry
- 🌐 **Multilingual Advisory**
  - English 🇬🇧
  - Nepali 🇳🇵 (नेपाली)
- 🎯 **High Accuracy**
  - 96.18% Validation Accuracy
- 🧑‍🌾 **Farmer-Focused Guidance**
  - Treatment steps
  - Fungicide recommendations
  - Prevention measures
  - Yield impact analysis

---

## 📊 Model Performance

| Metric | Score |
|------|------|
| Validation Accuracy | **96.18%** |
| F1-Score (Macro) | **95.16%** |
| ROC AUC | **0.999+** |
| Error Rate | **3.82%** |

---

## 🏗️ Model Architecture
- **Base Model:** MobileNetV2 (Transfer Learning)
- **Custom Classification Head:**
  - Dense(512) → Dense(256) → Dense(45)
  - Dropout for regularization
- **Training Strategy:** Two-Phase
  - Phase 1: Frozen base model
  - Phase 2: Fine-tuning
- **Input Size:** 224 × 224 RGB

---

## 📁 Project Structure
```text
Modeling/
├── Crop Disease Dataset/
│   ├── train/          # 74,880 training images
│   ├── valid/          # 19,804 validation images
│   └── test/           # Test images
├── models/
│   ├── best_model.keras
│   ├── final_model.keras
│   └── training_history.json
├── configs/
│   ├── class_indices.json
│   ├── class_weights.json
│   └── advisory_system.json
└── reports/
    ├── analysis_results/
    ├── evaluation_results/
    └── visualizations/
```

---

## 🔧 Installation & Setup

### Prerequisites
- Python **3.8+**
- TensorFlow **2.19.0**
- GPU recommended (Tesla T4 or better)

### Install Dependencies
```bash
pip install tensorflow numpy pandas matplotlib seaborn pillow scikit-learn gradio
```

---

## 🚀 Quick Start

### 1️⃣ Clone Repository
```bash
git clone https://github.com/sabin74/Agriculture-Crop-Disease-Detection-Advisory-System.git
cd Agriculture-Crop-Disease-Detection-Advisory-System
```

### 2️⃣ Run Inference Demo
```bash
python -c "
import gradio as gr
from modeling.inference import demo
demo.launch()
"
```

### 3️⃣ Make a Prediction
```python
from PIL import Image
from modeling.inference import predict_disease

image = Image.open("leaf_image.jpg")
result = predict_disease(image, language="english")
print(result)
```

---

## 📚 Notebooks Overview

### 01_data_exploration.ipynb
- Dataset statistics and visualization
- Class imbalance analysis (43.9× ratio)
- Image quality inspection

### 02_data_preprocessing.ipynb
- Image resizing & normalization
- Data augmentation
- Class weight computation

### 03_model_building_training.ipynb
- MobileNetV2 transfer learning
- Custom classifier head
- Two-phase training
- Callbacks (EarlyStopping, ReduceLROnPlateau)

### 04_model_evaluation.ipynb
- Accuracy, Precision, Recall, F1-Score
- Confusion matrix
- ROC-AUC analysis
- Error inspection

### 05_inference_demo.ipynb
- Interactive Gradio UI
- Multilingual advisory system
- Real-time inference

---

## 💡 Advisory System

Each disease prediction returns **comprehensive agricultural guidance**:

### Information Included
- 🔴 Severity Level (color-coded)
- 🧬 Symptoms
- 🦠 Causes (pathogen + environment)
- 🛡️ Prevention methods
- 💊 Treatment steps
- 🧪 Chemical & organic fungicides
- ⚠️ Immediate actions
- ⏳ Recovery time
- 📉 Yield impact estimation

### Supported Languages
- English 🇬🇧
- Nepali 🇳🇵 (नेपाली)

---

## 🎯 Supported Crops & Diseases

### Major Crops
- **Fruits:** Apple, Banana, Mango, Orange, Peach, Cherry, Grape, Strawberry
- **Vegetables:** Tomato, Potato
- **Cereals:** Corn (Maize)
- **Plantations:** Coffee, Sugarcane

### Key Diseases
- **Apple:** Scab, Black Rot, Cedar Apple Rust
- **Banana:** Panama Disease, Sigatoka
- **Tomato:** Early Blight, Late Blight, Yellow Leaf Curl Virus
- **Potato:** Early & Late Blight
- **Coffee:** Leaf Rust
- **Sugarcane:** Red Rot, Yellow Rust, Mosaic

---

## 📈 Training Details

### Hyperparameters
```python
IMAGE_SIZE = (224, 224)
BATCH_SIZE = 32
EPOCHS_PHASE1 = 20
EPOCHS_PHASE2 = 20
LEARNING_RATE = 0.0001 → 0.00001
```

### Data Augmentation
- Rotation ±20°
- Width/Height shift ±10%
- Zoom ±10%
- Horizontal flip
- Brightness adjustment

---

## 📊 Evaluation Highlights

### Top Performing Classes
- Sugarcane__RedRust – **100%**
- Strawberry__healthy – **100%**
- Orange__Haunglongbing – **100%**
- Grape__healthy – **100%**
- Grape__Leaf_blight – **100%**

### Most Challenging Classes
- Coffee__NoRust – **45.8%**
- Sugarcane__Mosaic – **80.3%**
- Sugarcane__healthy – **85.1%**

---

## 🚀 Deployment Options

### Option 1: Gradio Web App
```python
demo.launch(share=True)
```

### Option 2: REST API (FastAPI)
```python
from fastapi import FastAPI, File, UploadFile
from modeling.inference import predict_disease
from PIL import Image

app = FastAPI()

@app.post("/predict/")
async def predict(file: UploadFile = File(...)):
    image = Image.open(file.file)
    return predict_disease(image)
```

### Option 3: Mobile Deployment
- Convert to **TensorFlow Lite**
- Model size: ~12 MB
- Inference time: ~0.3 seconds

---

## 🔍 Troubleshooting

### CUDA Out of Memory
```python
BATCH_SIZE = 16
```

### Incorrect Predictions
- Ensure clear leaf image
- Good lighting
- Leaf centered
- JPG/PNG format only

### Slow Inference
- Resize images to 224×224
- Enable GPU
- Use batch prediction

---

## 📝 License
This project is intended for **educational and research purposes**.  
Please cite original dataset sources when using.

---

## 🙏 Acknowledgments
- PlantVillage Dataset Contributors
- TensorFlow / Keras Team
- Agricultural Research Institutions
- Farmers & Field Experts

---

## 📞 Support
- Check GitHub Issues
- Review project notebooks
- Consult advisory system for disease guidance

---

🌾 **Empowering farmers with AI-driven crop intelligence** 🤖

