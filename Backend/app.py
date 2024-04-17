from flask import Flask, request, jsonify
from firebase_admin import credentials, firestore, initialize_app
from auth import auth_bp
from data import data_bp

app = Flask(__name__)

# Initialize Firebase
cred = credentials.Certificate("firebase_key.json")
firebase_app = initialize_app(cred)
db = firestore.client()

# Example route to fetch data from Firebase
@app.route('/data', methods=['GET'])
def get_data_from_firestore():
    try:
        data = []
        docs = db.collection('your_collection').get()
        for doc in docs:
            data.append(doc.to_dict())
        return jsonify({'data': data}), 200
    except Exception as e:
        return jsonify({'error': str(e)}), 500

# Example route to handle GET request
@app.route('/api/data', methods=['GET'])
def get_data():
    try:
        # Logic to fetch data from Firebase Firestore
        data = {'example_key': 'example_value'}
        return jsonify(data), 200
    except Exception as e:
        return jsonify({'error': str(e)}), 500

# Example route to handle POST request
@app.route('/api/data', methods=['POST'])
def post_data():
    try:
        # Extract data from request body
        request_data = request.json
        
        # Logic to add data to Firebase Firestore
        # Example: firebase_db.collection('data').add(request_data)
        
        return jsonify({'message': 'Data received successfully'}), 201
    except Exception as e:
        return jsonify({'error': str(e)}), 500

# Example route to handle PUT request
@app.route('/api/data/<data_id>', methods=['PUT'])
def put_data(data_id):
    try:
        # Extract data from request body
        request_data = request.json
        
        # Logic to update data in Firebase Firestore
        # Example: firebase_db.collection('data').document(data_id).update(request_data)
        
        return jsonify({'message': 'Data updated successfully'}), 200
    except Exception as e:
        return jsonify({'error': str(e)}), 500

# Example route to handle DELETE request
@app.route('/api/data/<data_id>', methods=['DELETE'])
def delete_data(data_id):
    try:
        # Logic to delete data from Firebase Firestore
        # Example: firebase_db.collection('data').document(data_id).delete()
        
        return jsonify({'message': 'Data deleted successfully'}), 200
    except Exception as e:
        return jsonify({'error': str(e)}), 500

# Register authentication blueprint
app.register_blueprint(auth_bp)

# Register data handling blueprint
app.register_blueprint(data_bp)

if __name__ == '__main__':
    app.run(debug=True)
