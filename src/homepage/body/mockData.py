import json
from faker import Faker
import random

fake = Faker()

def generate_product(id):
    product = {
        "id": id,
        "name": fake.catch_phrase(),
        "price": round(random.uniform(10.99, 999.99), 2),
        "brand": fake.company(),
        "category": random.choice([
            "Electronics",
            "Shoes",
            "Gaming",
            "Home & Kitchen",
            "Tools & Home Improvement"
        ]),
        "description": fake.sentence(),
        "image": "https://example.com/product.jpg",
        "rating": round(random.uniform(4.0, 5.0), 1),
        "reviews": random.randint(100, 5000)
    }
    return product

products = [generate_product(i) for i in range(1, 81)]

with open('products.json', 'w') as f:
    json.dump(products, f, indent=4)