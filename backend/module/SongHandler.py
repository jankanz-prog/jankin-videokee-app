import os
from fastapi import FastAPI
from fastapi.responses import FileResponse

app = FastAPI()

reservations = []
reservation_details = []

def getSongToPlayFromReservations():
    if len(reservations) == 0:
        return {"message": "No songs to play."}
    
    file_song = reservations.pop(0)
    file_path = os.path.join(os.path.dirname(__file__), f"../data/songfiles/{file_song}")
    print(file_song)

    print(reservations)
    return FileResponse(file_path, filename=file_song, media_type="video/mp4")