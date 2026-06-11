# 📘 Assignment: Python File I/O and Persistence

## 🎯 Objective

Learn how to read from and write to files in Python, and persist program data using JSON so information is available across runs.

## 📝 Tasks

### 🛠️ Read and Analyze Text Files

#### Description
Open a text file, read its contents, and compute useful information from the data.

#### Requirements
Completed program should:

- Read from a text file using `open()` or `pathlib`
- Count lines, words, or other useful statistics
- Print a clear summary of the file contents
- Handle missing file errors gracefully

### 🛠️ Write Output to a File

#### Description
Save the results of your program to a text file so the output can be reviewed later.

#### Requirements
Completed program should:

- Write results to a text file
- Use the appropriate file mode (`w`, `a`, etc.)
- Include multiple lines or formatted text in the output file
- Confirm the file was written successfully

### 🛠️ Persist Structured Data with JSON

#### Description
Use JSON serialization to save and reload structured program data between runs.

#### Requirements
Completed program should:

- Use the built-in `json` module to serialize data
- Save a Python dictionary or list to a `.json` file
- Load the JSON data back into the program
- Modify the loaded data and save it again to demonstrate persistence
