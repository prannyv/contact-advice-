from flask import Flask, request
from flask_cors import CORS
from flask_restful import Api, Resource, reqparse, fields, marshal_with

import os
import sys

from secret import key
import openai
from langchain.chains import ConversationalRetrievalChain, RetrievalQA
from langchain.chat_models import ChatOpenAI
from langchain.document_loaders import DirectoryLoader, TextLoader
from langchain.embeddings import OpenAIEmbeddings
from langchain.indexes import VectorstoreIndexCreator
from langchain.indexes.vectorstore import VectorStoreIndexWrapper
from langchain.llms import OpenAI
from langchain.vectorstores import Chroma
from textreader import scrapData

# FLASK API SETUP
os.environ["OPENAI_API_KEY"] = key
app = Flask(__name__)
#CORS(app)
api = Api(app)

model_post_args = reqparse.RequestParser()
model_post_args.add_argument("query", type=str, help="query", required=True)

# DEFINING API RESPONSE BODY
resourceField ={
    "response": fields.String
}

# DEFINING RESOURCE
class Model(Resource):
    @marshal_with(resourceField)
    def post(self, modelID):
        if modelID not in os.listdir("./dataset"):
            print("HI")
            return 400, {"response": "model not found"}
        else:
            query = model_post_args.parse_args()["query"]

            if f"{modelID}_Output.json" not in os.listdir("./dataset/outputs"):
                for conversation in os.listdir(f"./dataset/{modelID}"):
                    scrapData(conversation[:-4], f"./dataset/{modelID}/{conversation}", f"./dataset/outputs/{modelID}_Output.json")
            
            loader = TextLoader(f"./dataset/outputs/{modelID}_Output.json")
            index = VectorstoreIndexCreator().from_loaders([loader])
            resp = index.query(query, llm=ChatOpenAI())
            print(resp)
            
            return {"response": resp}, 200


if __name__ == "__main__":
    api.add_resource(Model, "/model/<string:modelID>")
    app.run(host="0.0.0.0", port=49152)
