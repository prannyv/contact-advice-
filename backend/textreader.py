writeFilename = "cleandorian.txt"
writingFile = open(writeFilename, "w")


readFilename = "dorian.z.c@gmail.txt"
readingFile = open(readFilename, "r")
months = ["jan", "feb", "mar", "apr", "may", "jun",
          "jul", "aug", "sep", "oct", "nov", "dec"]
skipFlag = False
name = "dorian.z.c@gmail.com"

for line in readingFile:

    line = line.lower().strip()

    if not line:
        skipFlag = False
        continue  # if line is empty, skip it and resume checking

    if skipFlag:
        # Save to other shit
        continue  # if indicated, do not check & skip line

    if line[:3] in months:
        continue  # if line is date, skip it

    if name in line:
        continue  # remove all lines w other persons name

    if "/users" in line or "https:" in line:
        continue  # remove all lines with files and links

    if line.startswith("me"):
        skipFlag = True
        continue

    writingFile.write(line + "\n")
