import json
from fastapi import FastAPI
from fastapi.middleware.cors import CORSMiddleware

from model.reservation import Reservation
from modules.SongHandler import reservations, getSongToPlayFromReservations

app = FastAPI()

app.add_middleware(
    CORSMiddleware,
    allow_origins=['*']
)



with open("./data/songs.json", "r") as file:
   songs = json.load(file)

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
   

 



