from pydantic import BaseModel
from typing import Optional


class Reservation(BaseModel):
    id: Optional[int] = None
    userid: str
    code: str
    username: Optional[str] = None
    songTitle: str

    
    