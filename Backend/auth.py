from flask import Blueprint, request, jsonify
import jwt

auth_bp = Blueprint('auth', __name__)

SECRET_KEY = "your_secret_key_here"  # Replace this with your actual secret key

# Dummy user database for demonstration
users = {
    "user1": "password1",
    "user2": "password2"
}

@auth_bp.route('/login', methods=['POST'])
def login():
    data = request.json
    username = data.get('username')
    password = data.get('password')

    if username not in users or users[username] != password:
        return jsonify({'error': 'Invalid username or password'}), 401

    token = jwt.encode({'username': username}, SECRET_KEY, algorithm='HS256')
    return jsonify({'token': token.decode('utf-8')}), 200

@auth_bp.route('/register', methods=['POST'])
def register():
    data = request.json
    username = data.get('username')
    password = data.get('password')

    if username in users:
        return jsonify({'error': 'Username already exists'}), 400

    users[username] = password
    return jsonify({'message': 'Registration successful'}), 201

@auth_bp.route('/logout', methods=['GET'])
def logout():
    # No action needed for logout in token-based authentication
    return jsonify({'message': 'Logout successful'}), 200
