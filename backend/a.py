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


os.environ["OPENAI_API_KEY"] = key

print(os.getcwd())
query = "who is george washington"
loader = TextLoader("./backend/dataset/outputs/ethan_Output.json")
index = VectorstoreIndexCreator().from_loaders([loader])

print("HIIIIIII")
a = index.query(query, llm=ChatOpenAI())
print(a)
