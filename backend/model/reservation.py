from pydantic import BaseModel


class Reservation(BaseModel):
    id: int
    userid: str
    code: str

class ReservationDetails(BaseModel):
    username: str
    songTitle: str
    