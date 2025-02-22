from pydantic import BaseModel


class Reservation(BaseModel):
    id: int
    user_id: str
    code: str

class ReservationDetails(BaseModel):
    username: str
    songTitle: str
    