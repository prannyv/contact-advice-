import json

writeFilename = "cleandorian.txt"
writingFile = open(writeFilename, "w")
write2 = open("cleanme.txt", "w")

readFilename = "dorian.z.c@gmail.txt"
readingFile = open(readFilename, "r")
months = ["jan", "feb", "mar", "apr", "may", "jun", "jul", "aug", "sep", "oct", "nov", "dec"]
flag = False
curSender = -1 #0 is me, 1 is other person, -1 is none

name = "dorian.z.c@gmail.com"

myMessages = []
friendMessages = []

tempString = ""
for line in readingFile:

    line = line.lower().strip()

    #remove date lines
    #if me, store somewhere for cur me message (loops until empty string (wont work if empty string is in thing tho))
    #instead, loop until nextdate! (dont need to add empty strings tho)

    #if othername, do the same

    if line[:3] in months:
        continue #if line is date, skip it

    if line.startswith("me"):
        #if curSender == 0 / -1, continue until its other person
        #if curSender == 1, add temp string to array and change cursender to 0
        if curSender == 1:
            friendMessages.append(tempString)
            writingFile.write(tempString + "\n")
            tempString = ""
        curSender = 0

    if line.startswith(name):
        #if curSender == 1 / -1, continue until its other person
        #if curSender == 0, add temp string to array and change cursender to 1
        if curSender == 0:
            myMessages.append(tempString)
            write2.write(tempString + "\n")
            tempString = ""
        curSender = 1
    
    if not line or line.startswith("me") or line.startswith(name):
        continue

    if "/users" in line or "https:" in line:
        continue #remove all lines with files and links


    tempString += line + " (+)"


combined_arrays = zip(myMessages, friendMessages)

# Create a list of dictionaries
json_data = [{'input_text': col1, 'output_text': col2} for col1, col2 in combined_arrays]

# # Convert the list of dictionaries to JSON
json_str = json.dumps(json_data, indent=2)

# # Write JSON to a file
# with open('output.jsonl', 'w') as json_file:
#     json_file.write(json_str)


#Write JSONL to a file
with open("output.jsonl", 'w') as jsonl_file:
    for entry in json_data:
        jsonl_file.write(json.dumps(entry) + '\n')


# print(len(myMessages))
# print(len(friendMessages))
# for item in myMessages:
#     if not item:
#         print("hey")

