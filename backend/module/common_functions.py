import json
import pandas as pd

file_path = 'data/songs.xlsx'

def read_excel_to_json(file_path):
    # Read the Excel file
    df = pd.read_excel(file_path)

    # Convert the DataFrame to a list of dictionaries (JSON objects)
    json_array = df.to_dict(orient='records')
    return json_array

def read_json_file(file_path):
    # Read the JSON file
    with open(file_path, "r") as file:
        data = json.load(file)
    return data