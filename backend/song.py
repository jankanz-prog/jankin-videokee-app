from fastapi import FastAPI
from fastapi.middleware.cors import CORSMiddleware
import os
from fastapi.responses import FileResponse

from module.common_functions import read_json_file
from model.reservation import Reservation
from model.UserLogin import Login

app = FastAPI()

app.add_middleware(
    CORSMiddleware,
    allow_origins=["*"],
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
    expose_headers=["Content-Disposition"],
)

# Allow frontend access
origins = [
    "http://localhost:5173",  # Local development
    "http://192.168.1.14:5173",  # Change this to your IP
]

songs = read_json_file("./data/songs.json")
reservations = []


@app.get("/songs")
async def getSongs():
    return {"songs": songs["songs"]}


@app.get("/reservations")
async def getReservations():
    return {"reservations": reservations}


@app.get("/song/{code}")
async def getSong(code):
    for song in songs["songs"]:
        if song["code"] == code:
            return song
    return None


def getUsername(userid):
    users = read_json_file("./data/users.json")
    for user in users["users"]:
        if user["userid"] == userid:
            return user["username"]
    return None


def getSongTitle(code):
    for song in songs["songs"]:
        if song["code"] == code:
            return song["title"]
    return None


@app.post("/song/reserve/add")
async def add(reserve: Reservation):
    print(f"[song.py] Received reservation request: {reserve}", flush=True)
    user_reservation = False
    song_found = False
    for reservation in reservations:
        if reserve.userid == reservation.userid and reserve.code == reservation.code:
            return {
                "message": "Reservation for current song by current user already exists."
            }

    if not user_reservation:
        for song in songs["songs"]:
            if song["code"] == reserve.code:
                reserve.id = len(reservations) + 1
                reserve.username = getUsername(reserve.userid)
                reserve.songTitle = getSongTitle(reserve.code)
                reservations.append(reserve)
                song_found = True
                
                break

    if not song_found:
        return {"message": "Song not found."}
    print(f"[song.py] Reservations: {reservations}", flush=True)   
    return {"reservations": reservations}


@app.delete("/song/reserve/delete")
async def delete(reserve: Reservation):
    for reservation in reservations:
        if reserve.id == reservation.id:
            reservations.remove(reservation)
            break

    return {"reservations": reservations}


@app.put("/song/reserve/update")
async def put(reserve: Reservation):
    for reservation in reservations:
        if reserve.id == reservation.id:
            # Check if the user has already reserved the song
            for a in reservations:
                if reserve.user_id == a.user_id and reserve.code == a.code:
                    return {
                        "message": "Reservation for current song by current user already exists."
                    }
            reservations.remove(reservation)
            reservations.append(reserve)
            break
    print(f"[song.py] Reservations: {reservations}", flush=True)        
    return {"reservations": reservations}


@app.get("/getSongToPlay")
async def getSongToPlay():
        if len(reservations) == 0:
            print("[SongHandler] No reservations in queue", flush=True)
            return {"message": "No songs to play."}
        
        print(f"[SongHandler] current reservations: {reservations}", flush=True)
        reservation_info = reservations.pop(0)
        print(f"[SongHandler] Popped reservation: {reservation_info}", flush=True)
        
        # Handle both dict and Pydantic model
        if hasattr(reservation_info, 'songTitle'):
            file_song = f"{reservation_info.songTitle}.mp4"
        else:
            file_song = f"{reservation_info['songTitle']}.mp4"
        
        file_path = f"./data/songfiles/{file_song}"
        print(f"[SongHandler] Looking for file: {file_path}", flush=True)
        
        if not os.path.exists(file_path):
            print(f"[SongHandler] File not found: {file_path}", flush=True)
            return {"message": f"Song file not found: {file_song}"}
        
        print(f"[SongHandler] Playing song: {file_song}", flush=True)
        print(f"[SongHandler] Remaining reservations: {len(reservations)}", flush=True)
        
        return FileResponse(file_path, filename=file_song, media_type="video/mp4")
    
    


@app.post("/login")
async def login(login: Login):
    users = read_json_file("./data/users.json")
    result = {"message": "Access denied.", "status": "error"}
    for user in users["users"]:
        if user["email"] == login.email and user["password"] == login.password:
            result = {
                "email": login.email,
                "message": "Access granted.",
                "status": "success",
                "userid": user["userid"],
            }
            break
    return result
