from fastapi import FastAPI, HTTPException
from pydantic import BaseModel
from typing import Dict

app = FastAPI()

class Item(BaseModel):
    id: int
    name: str
    description: str
    price: float

items: Dict[int, Item] = {}

@app.get("/")
def read_root():
    return {"message": "Welcome to the FastAPI REST API assignment"}

@app.post("/items/")
def create_item(item: Item):
    if item.id in items:
        raise HTTPException(status_code=400, detail="Item ID already exists")
    items[item.id] = item
    return item

# TODO: Add GET, PUT, and DELETE endpoints for item resources
