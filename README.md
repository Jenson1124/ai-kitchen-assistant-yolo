# AI Kitchen Assistant with Vegetable Detection

An AI-powered kitchen assistant that detects vegetables from images
using a YOLOv8 model and automatically generates recipes using a large
language model (LLM). The system combines **computer vision, deep
learning, and generative AI** to help users decide what dish they can
cook with the vegetables they currently have.

------------------------------------------------------------------------

## Overview

This project detects vegetables from an uploaded image and generates a
recipe using the detected ingredients.

Workflow:

1.  User uploads a vegetable image through the mobile app.
2.  The Flask backend receives the image.
3.  A YOLOv8 object detection model detects vegetables in the image.
4.  Detected ingredients are sent to a Large Language Model via the Groq
    API.
5.  The AI generates a structured recipe.
6.  The recipe is displayed in the mobile application.

------------------------------------------------------------------------

## Features

-   Vegetable detection using **YOLOv8**
-   Custom dataset annotated using **Roboflow**
-   **Flask backend API** for model inference
-   **React Native (Expo)** mobile application
-   Recipe generation using **LLM via Groq API**
-   Detects multiple vegetables in one image

------------------------------------------------------------------------

## Tech Stack

### Machine Learning

-   YOLOv8 (Ultralytics)
-   PyTorch
-   Roboflow

### Backend

-   Python
-   Flask

### Frontend

-   React Native
-   Expo

### AI Integration

-   Groq API
-   Large Language Models (LLMs)

------------------------------------------------------------------------

## Project Structure

ai-kitchen-assistant-yolo │ ├── backend │ ├── app.py │ ├──
inspect_model.py │ ├── best.pt │ ├── img.jpg │ └── runs │ ├── EzuraSense
│ ├── src │ ├── assets │ ├── package.json │ └── app.json │ ├── README.md
└── .gitignore

------------------------------------------------------------------------

## Setup Instructions

### Clone Repository

git clone https://github.com/Jenson1124/ai-kitchen-assistant-yolo.git cd
ai-kitchen-assistant-yolo

### Create Python Environment

python -m venv venv

Activate (Windows):

venv`\Scripts`{=tex}`\activate`{=tex}

### Install Dependencies

pip install -r requirements.txt

### Run Backend

cd backend python app.py

### Run Mobile App

cd EzuraSense npm install npx expo start

------------------------------------------------------------------------

## Machine Learning Concepts Used

-   Supervised Learning
-   Object Detection
-   Convolutional Neural Networks (CNNs)
-   Transfer Learning
-   Evaluation Metrics (Precision, Recall, mAP)

------------------------------------------------------------------------

## Future Improvements

-   Real-time camera detection
-   More vegetable classes
-   Nutrition information generation
-   Cloud deployment

------------------------------------------------------------------------

## Author

Jenson Antony\
GitHub: https://github.com/Jenson1124
