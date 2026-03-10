import os
from fastapi import FastAPI
from fastapi.responses import FileResponse
from urllib.parse import quote

app = FastAPI()

reservations = []

def getSongToPlayFromReservations():
    try:
        print("[SongHandler] Function called", flush=True)
        
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
        
        response = FileResponse(file_path, filename=file_song, media_type="video/mp4")
        # Explicitly set Content-Disposition header to ensure filename is sent
        response.headers["Content-Disposition"] = f"inline; filename*=UTF-8''{quote(file_song)}"
        print(f"[SongHandler] Content-Disposition header set to: {response.headers['Content-Disposition']}", flush=True)
        
        return response
    
    except Exception as e:
        print(f"[SongHandler] ERROR: {type(e).__name__}: {str(e)}", flush=True)
        import traceback
        print(traceback.format_exc(), flush=True)
        return {"message": f"Error: {str(e)}"}