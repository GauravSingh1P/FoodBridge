from flask import Flask, request, jsonify
from flask_cors import CORS
import sqlite3

app = Flask(__name__)
CORS(app)

@app.route("/giver", methods=["POST"])
def add_food():
    data = request.json
    print(data['location'])
    if data:

        conn = sqlite3.connect("food.db")
        c = conn.cursor()
        c.execute("INSERT INTO foods(food_name,food_quantity,food_type,food_location,listing_type) VALUES(?,?,?,?,?)",(data['foodName'],data['quantity'],data['foodType'],data['location'],data['listingType']))
        conn.commit()
        conn.close()
    print("Received from frontend:", data)
    return jsonify({"message": "Food data received!"})


@app.route("/reciever", methods=["GET"])
def fetch_food():
    conn = sqlite3.connect("food.db")
    c = conn.cursor() 
    c.execute("SELECT food_name,food_quantity,food_type,food_location,listing_type FROM foods")
    result = c.fetchall()
    print(result)
    conn.close()

    foods = []

    for row in result:
        foods.append({
            "foodName": row[0],
            "quantity": row[1],
            "foodType": row[2],
            "location": row[3],
            "listingType": row[4]
        })

    return jsonify(foods)

if __name__ == "__main__":
    app.run(debug=True)