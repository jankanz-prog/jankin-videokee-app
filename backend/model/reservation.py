from pydantic import BaseModel


class Reservation(BaseModel):
    id: int
    user_id: str
    code: str
    