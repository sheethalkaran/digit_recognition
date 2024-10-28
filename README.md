# handwritten_digit_recognition

A web-based application for handwritten digit recognition using a Convolutional Neural Network (CNN) trained on the MNIST dataset. Users can draw a digit on a canvas, and the app will predict the digit in real-time.

## Overview
This project uses a CNN model to classify handwritten digits (0-9) drawn on an HTML canvas. The model is trained on the MNIST dataset, and predictions are served through a Flask backend. The frontend is built with HTML, CSS, JavaScript, and Bootstrap.

## Technologies Used
- Python
- Flask
- TensorFlow/Keras
- HTML, CSS, JavaScript
- Bootstrap

## Features
- Canvas Drawing: Users can draw digits on a canvas.
- Digit Prediction: The app predicts the drawn digit using a CNN model.
- Clear Button: Reset the canvas for new input.

## Steps

1. Train the Model:
   The repository includes a pre-trained model (`mnist_cnn_model.keras`). If you'd like to train the model yourself, run:
   bash
   python model.py
   
   This will save a trained model as `mnist_cnn_model.keras`.

2. Run the Application:
   Start the Flask application by running:
   bash
   python app.py
   

3. Access the Application:
   Open your browser and go to [http://127.0.0.1:5000].

## Usage
- Draw a Digit: Use the canvas to draw a digit (0-9).
- Predict: Click "Predict Digit" to see the app's prediction.
- Clear Canvas: Use the "Clear Canvas" button to reset.

## Project Structure

handwritten-digit-recognition/
├── static/
│   ├── style.css          # CSS styling with Bootstrap
│   └── script.js          # JavaScript for canvas drawing and prediction
├── templates/
│   └── index.html         # Main HTML file
├── app.py                 # Flask backend
├── model.py               # Model training script
├── mnist_cnn_model.keras  # Pre-trained model file
└── README.md              # Project documentation


## Additional Notes:
1. Requirements: Install necessary packages:
   Flask
   tensorflow
   numpy
   
2. Model File: Ensure `mnist_cnn_model.keras` is included in the repo, or provide instructions for users to train their own model using `model.py`.
