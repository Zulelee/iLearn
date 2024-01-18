from fastapi import FastAPI, Form, File, UploadFile
from pydantic import BaseModel
import requests
import pymongo
from openai import OpenAI
import shutil
import os
import re
from dotenv import load_dotenv
from llama_hub.smart_pdf_loader import SmartPDFLoader
from llama_index import VectorStoreIndex
import openai
from llama_index import download_loader



# Load environment variables from the .env file
load_dotenv()


app = FastAPI(docs_url="/api/docs", openapi_url="/api/openapi.json")

#create mongo client
con_str =os.environ.get("MONGODB_URL")

try:
    client = pymongo.MongoClient(con_str)
except Exception:
    print("ERROR:" + Exception)

# Creating db
mydb = client["Ilearn"]

# create a Collection-Table 
User_collection = mydb["User"]


class UserSignup(BaseModel):
    username: str
    email: str
    password: str
    profession: str

class UserLogin(BaseModel):
    email: str
    password: str

def pdf_to_text(file_path : str):

    filepath = file_path
    files = {'file': open(filepath, 'rb')}

    url = "https://pdf-text-extractor.p.rapidapi.com/extract_text"

    # remember not to put 'content-type': "multipart/form-data" in the header!
    headers = {
        'x-rapidapi-host': "pdf-text-extractor.p.rapidapi.com",
        'x-rapidapi-key': os.environ.get("RAPIDAPI_PDF2TEXT_KEY")
        }

    response = requests.post(url, files=files, headers=headers)
    return response.json()

def preprocess_text(input_text):
    # Use a regular expression to remove non-English characters
    english_only_text = re.sub(r'[^a-zA-Z\s]', '', input_text)
    
    return english_only_text

@app.post("/api/signup")
def signup(user_data : UserSignup):

    existing_user = User_collection.find_one({"$or": [{"username": user_data.username}, {"email": user_data.email}]})
    if existing_user:
        return {"status": "error", "message": "Username or email already exists"}
    else:
        # Insert rows/documents into collection
        mydoc = {
                "username": user_data.username,
                "email" : user_data.email,
                "password" : user_data.password,
                "profession" : user_data.profession,
                }
        User_collection.insert_one(mydoc)

        return {"message": "signup successful"}

@app.post("/api/login")
def login(user_data : UserLogin):

    # create a Collection-Table 
    User_collection = mydb["User"]
        
    user = User_collection.find_one({"email": user_data.email})

    if user and user["password"] == user_data.password:
        user_role = user.get("profession")
        global current_username
        current_username = user.get("username") 
        current_username = current_username.capitalize()
        return {"status": "true", "userRole": user_role, "username": current_username}
    else:
        return {"status": "Login failed"}
        
    return {"$)$"}

@app.post("/api/check_plagiarism_file")
def check_plagiarism(file: UploadFile = File(...)):

    url = "https://plagiarism-checker-and-auto-citation-generator-multi-lingual.p.rapidapi.com/plagiarism"
    
    filename = file.filename

    os.makedirs("files", exist_ok=True)

    save_path = os.path.join("files", filename)
    with open(save_path, "wb") as f:
        shutil.copyfileobj(file.file, f)

    text = pdf_to_text(save_path)
    text = preprocess_text(text["text"][0])

    payload = {
        "text": text,
        "language": "en",
        "includeCitations": True,
        "scrapeSources": False
    }

    headers = {
        "content-type": "application/json",
        "X-RapidAPI-Key": os.environ.get("RAPIDAPI_PLAGIARISM_KEY"),
        "X-RapidAPI-Host": "plagiarism-checker-and-auto-citation-generator-multi-lingual.p.rapidapi.com"
    }

    response = requests.post(url, json=payload, headers=headers)
    response_json = response.json()

    result_dict = {
        'percentPlagiarism': response_json['percentPlagiarism'],
        'citations': response_json['citations']
    }

    return result_dict

@app.post("/api/check_plagiarism_text")
def check_plagiarism(content : dict):

    url = "https://plagiarism-checker-and-auto-citation-generator-multi-lingual.p.rapidapi.com/plagiarism"
    text = preprocess_text(content["text"])

    payload = {
        "text": text,
        "language": "en",
        "includeCitations": True,
        "scrapeSources": False
    }

    headers = {
        "content-type": "application/json",
        "X-RapidAPI-Key": os.environ.get("RAPIDAPI_PLAGIARISM_KEY"),
        "X-RapidAPI-Host": "plagiarism-checker-and-auto-citation-generator-multi-lingual.p.rapidapi.com"
    }

    response = requests.post(url, json=payload, headers=headers)
    response_json = response.json()

    result_dict = {
        'percentPlagiarism': response_json['percentPlagiarism'],
        'citations': response_json['citations']
    }

    return result_dict

@app.post("/api/check_grammar_text")
def check_grammar(content : dict):

    client = OpenAI(api_key=os.environ.get("OPENAI_KEY"))

    text = content["text"]
    
    response = client.chat.completions.create(
    model="gpt-3.5-turbo",
    messages=[
        {"role": "system", "content": "You are an English PhD Professor."},
        {"role": "user", "content": '''Provide feedback if the following content contains grammatical errors. If there are grammatical errors, then correct them and give the corrected sentences.'''},
        {"role": "user", "content": "Content: " + text},
        {"role": "user", "content": "The response must contain onl 2 sections: Errors, Correction"},
    ]
    )

    return {"response": response.choices[0].message.content}

@app.post("/api/check_grammar_file")
def check_grammar(file: UploadFile = File(...)):

    client = OpenAI(api_key=os.environ.get("OPENAI_KEY"))

    filename = file.filename

    os.makedirs("files", exist_ok=True)

    save_path = os.path.join("files", filename)
    with open(save_path, "wb") as f:
        shutil.copyfileobj(file.file, f)

    text = pdf_to_text(save_path)
    text = text["text"][0]
    response = client.chat.completions.create(
    model="gpt-3.5-turbo",
    messages=[
        {"role": "system", "content": "You are an English PhD Professor."},
        {"role": "user", "content": '''Provide feedback if the following content contains grammatical errors. If there are grammatical errors, then correct them and give the corrected sentences.'''},
        {"role": "user", "content": "Content: " + text},
        {"role": "user", "content": "The response must contain onl 2 sections: Errors, Correction"},
    ]
    )

    return {"response": response.choices[0].message.content}

@app.post("/api/searchtb")
def searchtb(file: UploadFile = File(...), text: str = Form(...)):
    
    openai.api_key = os.environ.get("OPENAI_KEY")
    
    filename = file.filename
    os.makedirs("files", exist_ok=True)

    save_path = os.path.join("files", filename)
    with open(save_path, "wb") as f:
        shutil.copyfileobj(file.file, f)

    PDFReader = download_loader("PDFReader")
    loader = PDFReader()

    documents = loader.load_data(file=save_path)

    index = VectorStoreIndex.from_documents(documents)
    query_engine = index.as_query_engine()

    response = query_engine.query(text)

    return {"response": response}

@app.post("/api/wordlookup")
def wordlookup(content : dict):
    
    client = OpenAI(api_key=os.environ.get("OPENAI_KEY"))

    text = content['text']

    response = client.chat.completions.create(
    model="gpt-3.5-turbo",
    messages=[
        {"role": "system", "content": "You are a highly qualified professor and the best tutor in the world."},
        {"role": "user", "content": "Generate a brief description of the word such that it will become easier for the student to understand it."},
        {"role": "user", "content": "Word: "+ text},
    ]
    )

    return {"response": response.choices[0].message.content}

@app.post("/api/course_outline")
def course_outline(content : dict):
    
    client = OpenAI(api_key=os.environ.get("OPENAI_KEY"))

    text = content['text']
    weeks = content['number']

    response = client.chat.completions.create(
    model="gpt-3.5-turbo-16k",
    messages=[
        {"role": "system", "content": "You are a highly qualified professor and the best tutor in the world."},
        {"role": "user", "content": "Generate a course outline that will be helpful to a teacher for the following table of content that spans over " + weeks + " weeks."},
        {"role": "user", "content": "Table of content: "+ text},
    ]
    )

    return {"response": response.choices[0].message.content}

@app.post("/api/chapter_objectives")
def course_outline(content : dict):
    
    client = OpenAI(api_key=os.environ.get("OPENAI_KEY"))

    text = content['text']

    response = client.chat.completions.create(
    model="gpt-3.5-turbo-16k",
    messages=[
        {"role": "system", "content": "You are a highly qualified professor and the best tutor in the world."},
        {"role": "user", "content": "Generate a clear and concise chapter objectives that will be helpful to teacher and students for the following chapter and topics:"},
        {"role": "user", "content": "Enter chapter name and subtopics: "+ text},
    ]
    )

    return {"response": response.choices[0].message.content}

@app.post("/api/mcq_generator")
def mcq_generator(content : dict):
    
    client = OpenAI(api_key=os.environ.get("OPENAI_KEY"))

    text = content['text']
    number_mcq = content['number']
    answer = content['answer']

    response = client.chat.completions.create(
    model="gpt-3.5-turbo",
    messages=[
        {"role": "system", "content": "You are a highly qualified professor and the best tutor in the world."},
        {"role": "user", "content": "Generate " + number_mcq + "MCQs on the topic/content: \n" + text + "\nShould the answers be included? " + answer
     },
    ]
    )

    return {"response": response.choices[0].message.content}


@app.post("/api/saq_generator")
def saq_generator(content : dict):
    
    client = OpenAI(api_key=os.environ.get("OPENAI_KEY"))

    text = content['text']
    number_saq = content['number']
    answer = content['answer']

    response = client.chat.completions.create(
    model="gpt-3.5-turbo",
    messages=[
        {"role": "system", "content": "You are a highly qualified professor and the best tutor in the world."},
        {"role": "user", "content": "Generate " + number_saq + "Short Answer Questions on the topic/content: \n" + text + "\nShould the answers be included? " + answer
     },
    ]
    )

    return {"response": response.choices[0].message.content}


@app.post("/api/casestudy_generator")
def casestudy_generator(content : dict):
    
    client = OpenAI(api_key=os.environ.get("OPENAI_KEY"))

    text = content['text']
    number_questions = content['number']
    answer = content['answer']

    response = client.chat.completions.create(
    model="gpt-3.5-turbo",
    messages=[
        {"role": "system", "content": "You are a highly qualified professor and the best tutor in the world."},
        {"role": "user", "content": "'Generate a Case Study on the topic/content: \n" + text + "\nThe case study should have " + number_questions + " questions. \nShould the answers be included?" + answer
     },
    ]
    )

    return {"response": response.choices[0].message.content}
