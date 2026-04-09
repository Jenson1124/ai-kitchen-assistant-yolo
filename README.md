# AI Kitchen Assistant with Vegetable Detection

An AI-powered kitchen assistant that detects vegetables from images and automatically generates recipes based on the detected ingredients. The system integrates **computer vision, deep learning, and generative AI** to help users discover dishes they can cook using the vegetables they currently have.

---

## Project Overview

The AI Kitchen Assistant is an intelligent system that uses a **deep learning–based object detection model** to identify vegetables from images. Once the vegetables are detected, the ingredient list is sent to a **large language model (LLM)** which generates a structured recipe including cooking instructions, preparation time, and difficulty level.

This project demonstrates the integration of:

- Computer Vision  
- Deep Learning  
- Transfer Learning  
- REST APIs  
- Generative AI  
- Mobile Application Development  

---

## Features

- Vegetable detection using **YOLOv8 object detection**
- Custom vegetable dataset annotated using **Roboflow**
- Backend API built with **Flask**
- Mobile application built with **React Native (Expo)**
- Recipe generation using **LLM through the Groq API**
- Detects **multiple vegetables in a single image**
- Generates structured recipes with cooking instructions

---

## System Architecture

```
Mobile App (React Native)
        │
        │ Upload Image
        ▼
Flask Backend API
        │
        │ YOLOv8 Model Inference
        ▼
Vegetable Detection
        │
        │ Extract Ingredients
        ▼
Groq LLM API
        │
        ▼
Recipe Generation
        │
        ▼
Recipe Returned to Mobile App
```

---

## Machine Learning Model

The vegetable detection model was trained using the **YOLOv8 object detection architecture** provided by the Ultralytics framework.

### Dataset
- Dataset created and annotated using **Roboflow**
- Contains multiple vegetable classes

Example classes include:

- Tomato  
- Onion  
- Garlic  
- Carrot  
- Bell Pepper  
- Cucumber  
- Potato  
- Cabbage  

### Data Augmentation

To improve model generalization, the following augmentation techniques were applied:

- Image flipping  
- Scaling  
- Rotation  
- Random transformations  

### Training Approach

The model was trained using **transfer learning**, starting from pretrained YOLO weights and fine-tuning them on the custom vegetable dataset.

### Model Output

During inference the model detects:

- Vegetable class label  
- Bounding box coordinates  
- Confidence score  

The trained model weights are stored in:

```
backend/best.pt
```

---

## Tech Stack

### Machine Learning
- YOLOv8 (Ultralytics)
- PyTorch
- Roboflow

### Backend
- Python
- Flask
- REST API

### Frontend
- React Native
- Expo

### AI / Generative AI
- Groq API
- Large Language Model (LLM)

---

## Project Structure

```
ai-kitchen-assistant-yolo
│
├── backend
│   ├── app.py
│   ├── inspect_model.py
│   ├── best.pt
│   ├── img.jpg
│   └── runs
│
├── EzuraSense
│   ├── src
│   ├── assets
│   ├── package.json
│   └── app.json
│
├── README.md
└── .gitignore
```

---

## How to Run the Project

### 1. Clone the Repository

```bash
git clone https://github.com/Jenson1124/ai-kitchen-assistant-yolo.git
cd ai-kitchen-assistant-yolo
```

### 2. Create Python Environment

```bash
python -m venv venv
```

Activate environment:

**Windows**

```bash
venv\Scripts\activate
```

### 3. Install Backend Dependencies

```bash
pip install -r requirements.txt
```

### 4. Run Flask Backend

```bash
cd backend
python app.py
```

### 5. Run Mobile Application

```bash
cd EzuraSense
npm install
npx expo start
```

---

## Example Workflow

1. User uploads an image of vegetables using the mobile application.
2. The image is sent to the Flask backend.
3. The YOLOv8 model detects vegetables present in the image.
4. The detected ingredient list is sent to the Groq API.
5. The LLM generates a recipe using the detected vegetables.
6. The recipe is returned and displayed in the mobile app.

---

## Machine Learning Concepts Demonstrated

This project demonstrates several core AI/ML concepts:

- Supervised Learning  
- Object Detection  
- Convolutional Neural Networks (CNNs)  
- Transfer Learning  
- Model Evaluation Metrics  
  - Precision  
  - Recall  
  - Mean Average Precision (mAP)

---

## Future Improvements

- Add real-time camera detection
- Improve dataset with more vegetable classes
- Add multiple recipe suggestions
- Integrate nutrition analysis
- Deploy backend using cloud services

---

## Author

**Jenson Antony**

GitHub:  
https://github.com/Jenson1124

---

## License

This project is created for educational and research purposes.
