# app.py
from flask import Flask, render_template, request, jsonify
import numpy as np
from tensorflow import keras

app = Flask(__name__)

# Load the trained model

model = keras.models.load_model('mnist_cnn_model.keras')

@app.route('/')
def home():
    return render_template('index.html')

@app.route('/predict', methods=['POST'])
def predict():
    # Get the data from the request
    data = request.get_json()
    image = np.array(data['image'], dtype=np.float32).reshape((1, 28, 28, 1)) 
    print("Input shape:", image.shape)  # Debugging line

    # Make a prediction
    prediction = model.predict(image)
    digit = np.argmax(prediction)
    return jsonify({'digit': int(digit)})

if __name__ == "__main__":
    app.run(debug=True)