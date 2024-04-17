# data.py

from flask import Blueprint, jsonify, request

data_bp = Blueprint('data', __name__)

# Example route to handle GET request for fetching data
@data_bp.route('/data', methods=['GET'])
def get_data():
    # Logic to fetch data from Firebase Firestore
    data = {'example_key': 'example_value'}
    return jsonify(data), 200

# Example route to handle POST request for adding data
@data_bp.route('/data', methods=['POST'])
def post_data():
    # Logic to add data to Firebase Firestore
    # Example: firebase_db.collection('data').add(request.json)
    return jsonify({'message': 'Data received successfully'}), 201

# Example route to handle PUT request for updating data
@data_bp.route('/data/<data_id>', methods=['PUT'])
def put_data(data_id):
    # Logic to update data in Firebase Firestore
    # Example: firebase_db.collection('data').document(data_id).update(request.json)
    return jsonify({'message': 'Data updated successfully'}), 200

# Example route to handle DELETE request for deleting data
@data_bp.route('/data/<data_id>', methods=['DELETE'])
def delete_data(data_id):
    # Logic to delete data from Firebase Firestore
    # Example: firebase_db.collection('data').document(data_id).delete()
    return jsonify({'message': 'Data deleted successfully'}), 200
