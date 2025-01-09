# digit_recognition

A web-based application for handwritten digit recognition using a **Convolutional Neural Network (CNN)** trained on the MNIST dataset. Users can draw a digit on a canvas, and the app will predict the digit in real-time.

## Overview
This project uses a CNN model to classify handwritten digits (0-9) drawn on an HTML canvas. The model is trained on the MNIST dataset, and predictions are served through a Flask backend. The frontend is built with HTML, CSS, JavaScript, and Bootstrap.

## Technologies Used
- **Python**
- **Flask**
- **TensorFlow/Keras**
- **HTML, CSS, JavaScript**
- **Bootstrap**

## Features
- **Canvas Drawing:** Users can draw digits on a canvas.
- **Digit Prediction:** The app predicts the drawn digit using a CNN model.
- **Clear Button:** Reset the canvas for new input.

## Steps

### **Train the Model:**
   The repository includes a pre-trained model (`mnist_cnn_model.keras`). If you'd like to train the model yourself, run:
   bash
   python model.py
   
   This will save a trained model as `mnist_cnn_model.keras`.

### Run the Application:**
   Start the Flask application by running:
   bash
   python app.py
   

## Usage
- Draw a Digit: Use the canvas to draw a digit (0-9).
- Predict: Click "Predict Digit" to see the app's prediction.
- Clear Canvas: Use the "Clear Canvas" button to reset.


## Additional Notes:
### Requirements: Install necessary packages:
   Flask
   tensorflow
   numpy

   Ensure `mnist_cnn_model.keras` is included in the repo, or provide instructions for users to train their own model using `model.py`.
