from fastapi import FastAPI, HTTPException
from fastapi.middleware.cors import CORSMiddleware

from module.common_functions import read_json_file
from model.reservation import Reservation
from module.SongHandler import reservations, getSongToPlayFromReservations
from model.UserLogin import Login 

app = FastAPI()

app.add_middleware(
    CORSMiddleware,
    allow_origins=['*'],
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)

songs = read_json_file("./data/songs.json")

@app.get("/songs")
async def getSongs():
   return {"songs": songs["songs"]}

@app.get("/song/{code}")
async def getSong(code):
   for song in songs["songs"]:
      if song['code'] == code:
         return song
   return None

@app.post("/song/reserve/add")
async def add(reserve: Reservation):
   user_reservation = False
   song_found = False
   for reservation in reservations:
      if reserve.user_id == reservation.user_id and reserve.code == reservation.code:   
         return {"message": "Reservation for current song by current user already exists."}
        
   if not user_reservation:         
      for song in songs["songs"]:
         if song['code'] == reserve.code:
            reserve.id = len(reservations) + 1
            reservations.append(reserve) 
            song_found = True
            break

         
   if not song_found:
      return {"message": "Song not found."} 

   return {"reservations": reservations} 

@app.delete("/song/reserve/delete}")
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
               return {"message": "Reservation for current song by current user already exists."}
         reservations.remove(reservation)
         reservations.append(reserve)
         break

   return {"reservations": reservations}

@app.get("/getSongToPlay")
async def getSongToPlay():
   return getSongToPlayFromReservations()

@app.post("/login")
async def login(login: Login):
   users = read_json_file("./data/users.json")
   result = {"message": "Access denied.", "status": "error"}
   for user in users["users"]:
      if user['email'] == login.email and user['password'] == login.password:
         result = {"email": login.email, "message": "Access granted.", "status": "success"}
         break
   return result

   

 



