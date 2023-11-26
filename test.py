import json

with open("output.jsonl", 'r') as file:
    json_data = file.read()
parsed_data = json.loads(json_data)

print(parsed_data)