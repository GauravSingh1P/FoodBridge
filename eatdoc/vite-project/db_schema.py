import sqlite3

conn = sqlite3.connect("food.db")
c = conn.cursor()

c.execute('''CREATE TABLE IF NOT EXISTS foods(
food_id INTEGER PRIMARY KEY AUTOINCREMENT,
food_name TEXT NOT NULL,
food_quantity INTEGER NOT NULL,
food_type TEXT NOT NULL CHECK (food_type IN('veg','non veg')),
food_location TEXT NOT NULL,
listing_type TEXT NOT NULL
)
''')
conn.commit()
conn.close()