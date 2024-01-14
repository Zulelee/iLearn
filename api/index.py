from fastapi import FastAPI, Form
from pydantic import BaseModel

import pymongo

#create mongo client
con_str ="mongodb://root:a123@ac-cpokgyu-shard-00-00.nm9iyx9.mongodb.net:27017,ac-cpokgyu-shard-00-01.nm9iyx9.mongodb.net:27017,ac-cpokgyu-shard-00-02.nm9iyx9.mongodb.net:27017/?ssl=true&replicaSet=atlas-138oma-shard-0&authSource=admin&retryWrites=true&w=majority"

try:
    client = pymongo.MongoClient(con_str)
except Exception:
    print("ERROR:" + Exception)

# Creating db
mydb = client["Ilearn"]

# # create a Collection-Table 
User_collection = mydb["User"]
record = User_collection.find_one()
# #Insert rows/documents into collection
# mydoc={
#     "username": "hamza",
#     "email" : "hamza@gmail.com",
#     "password" : "123",
#     "professsion" : "student",
# }

# res = User_collection.insert_one(mydoc)

# print(res.inserted_id)
# er= client.list_database_names()

app = FastAPI(docs_url="/api/docs", openapi_url="/api/openapi.json")

#create mongo client
con_str ="mongodb://root:a123@ac-cpokgyu-shard-00-00.nm9iyx9.mongodb.net:27017,ac-cpokgyu-shard-00-01.nm9iyx9.mongodb.net:27017,ac-cpokgyu-shard-00-02.nm9iyx9.mongodb.net:27017/?ssl=true&replicaSet=atlas-138oma-shard-0&authSource=admin&retryWrites=true&w=majority"

try:
    client = pymongo.MongoClient(con_str)
except Exception:
    print("ERROR:" + Exception)

# Creating db
mydb = client["Ilearn"]



class UserSignup(BaseModel):
    username: str
    email: str
    password: str
    profession: str



@app.get("/api/healthchecker")
def healthchecker():
    return {"status": "success", "message": "Integrate FastAPI Framework with Next.js"}


@app.post("/api/signup")
def signup(user_data : UserSignup):


    #create mongo client
    con_str ="mongodb://root:a123@ac-cpokgyu-shard-00-00.nm9iyx9.mongodb.net:27017,ac-cpokgyu-shard-00-01.nm9iyx9.mongodb.net:27017,ac-cpokgyu-shard-00-02.nm9iyx9.mongodb.net:27017/?ssl=true&replicaSet=atlas-138oma-shard-0&authSource=admin&retryWrites=true&w=majority"

    try:
        client = pymongo.MongoClient(con_str)
    except Exception:
        print("ERROR:" + Exception)

    # Creating db
    mydb = client["Ilearn"]

    # create a Collection-Table 
    User_collection = mydb["User"]
    # Insert rows/documents into collection
    mydoc = {
            "username": user_data.username,
            "email" : user_data.email,
            "password" : user_data.password,
            "profession" : user_data.profession,
            }
    User_collection.insert_one(mydoc)

    return {"status": "signup successful"}

@app.post("/api/login")
def login(user_data : UserSignup):


    # create a Collection-Table 
    User_collection = mydb["User"]
    # Insert rows/documents into collection
    mydoc = {
            "username": user_data.username,
            "email" : user_data.email,
            "password" : user_data.password,
            "profession" : user_data.profession,
            }
    User_collection.insert_one(mydoc)

    return {"status": "Login successful"}