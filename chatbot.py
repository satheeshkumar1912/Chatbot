from flask import Flask, request, jsonify
from flask_cors import CORS

app = Flask(__name__)
CORS(app)  # Enable CORS for your app

@app.route('/chat', methods=['POST'])
def chat():
    user_message = request.json.get("message")
    bot_response = ""
    
    if "bye" in user_message:
        bot_response = "Goodbye! Have a great day!"
    elif "hello" in user_message or "hi" in user_message or "hey" in user_message:
        bot_response = "Hello there! How can I help you today?"
    elif "your name" in user_message or "what is your name?" in user_message or "your name?" in user_message:
        bot_response = "I am a simple Python chatbot. You can call me PyBot!"
    elif "how are you" in user_message or "how are you?" in user_message:
        bot_response = "I'm just a bunch of code, but thank you for asking! How are you?"
    elif "time" in user_message:
        bot_response = "I don’t have a watch, but you can check it on your device!"
    else:
        bot_response = "I am still learning. Could you please rephrase that?"

    return jsonify({"response": bot_response})

# if __name__ == "__main__":
#     app.run(debug=True)


#_____________________________________________________________________________________________________________________________________________________

# # Simple Chatbot with continuous interaction using a while loop

# import flask
# from flask import Flask, request, jsonify
# from flask_cors import CORS
# # After initializing your app
# # CORS(chatbot)


# app = Flask(__name__)
# CORS(app)  # Enable CORS for your app

# @app.route('/chat', methods=['POST'])
# def chat():
#     user_message = request.json.get("message")

#     # Basic response logic - replace this with your chatbot's logic
#     # Checking if the user wants to end the conversation
#     if "bye" in user_input:
#         print("Chatbot: Goodbye! Have a great day!")
    
#     # Responses based on user input
#     elif "hello" in user_input or "hi" or "hey" in user_input:
#         print("Chatbot: Hello there! How can I help you today?")

#     elif "your name" or "what is your name?" or "your name?" in user_input:
#         print("Chatbot: I am a simple Python chatbot. You can call me PyBot!")

#     elif "how are you" or "how are you?" in user_input:
#         print("Chatbot: I'm just a bunch of code, but thank you for asking! How are you?")

#     elif "time" in user_input:
#         print("Chatbot: I don’t have a watch, but you can check it on your device!")

#     else:
#         print("Chatbot: I am still learning. Could you please rephrase that?")

#     return jsonify({"response": bot_response})

# if __name__ == "__main__":
#     app.run(debug=True)

